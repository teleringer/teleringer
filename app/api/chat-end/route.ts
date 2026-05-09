import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";

function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function esc(v: string) {
  return (v || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Message = { role: "user" | "assistant"; content: string };

function buildTranscriptText(messages: Message[]) {
  return messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n\n");
}

async function generateSummary(messages: Message[]): Promise<string> {
  try {
    const client = new Anthropic();
    const transcript = buildTranscriptText(messages);
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 256,
      messages: [
        {
          role: "user",
          content:
            `Summarize in 2–3 sentences what this visitor's inquiry or interest was about Teleringer's services. ` +
            `Do not include their name, email, or phone number. Describe only the purpose or questions they had.\n\n` +
            `Conversation:\n${transcript}`,
        },
      ],
    });
    const block = response.content[0];
    return block.type === "text" ? block.text.trim() : "";
  } catch {
    return "The visitor reached out with a question about Teleringer's services.";
  }
}

function markdownToHtml(raw: string): string {
  const text = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const inline = (s: string) =>
    s
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.+?)__/g, "<strong>$1</strong>")
      .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
      .replace(/_([^_\n]+)_/g, "<em>$1</em>")
      .replace(/`([^`\n]+)`/g, '<code style="background:#f3f4f6;padding:1px 3px;border-radius:3px;font-family:monospace;font-size:12px;">$1</code>');

  const lines = text.split("\n");
  const out: string[] = [];
  let inUl = false;
  let inOl = false;

  const closeList = () => {
    if (inUl) { out.push("</ul>"); inUl = false; }
    if (inOl) { out.push("</ol>"); inOl = false; }
  };

  for (const line of lines) {
    const hm = line.match(/^#{1,3}\s+(.+)/);
    const ulm = line.match(/^[ \t]*[-*+]\s+(.+)/);
    const olm = line.match(/^[ \t]*\d+\.\s+(.+)/);

    if (hm) {
      closeList();
      out.push(`<p style="margin:6px 0 2px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;">${inline(hm[1])}</p>`);
    } else if (ulm) {
      if (inOl) { out.push("</ol>"); inOl = false; }
      if (!inUl) { out.push('<ul style="margin:3px 0 3px 16px;padding:0;font-family:Arial,sans-serif;font-size:13px;">'); inUl = true; }
      out.push(`<li style="margin:1px 0;">${inline(ulm[1])}</li>`);
    } else if (olm) {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (!inOl) { out.push('<ol style="margin:3px 0 3px 16px;padding:0;font-family:Arial,sans-serif;font-size:13px;">'); inOl = true; }
      out.push(`<li style="margin:1px 0;">${inline(olm[1])}</li>`);
    } else {
      closeList();
      if (line.trim() === "") {
        out.push('<div style="height:5px;"></div>');
      } else {
        out.push(`<span style="font-family:Arial,sans-serif;font-size:13px;">${inline(line)}</span><br>`);
      }
    }
  }
  closeList();
  return out.join("");
}

function adminEmailHtml(p: {
  name: string;
  email: string;
  phone: string;
  when: string;
  messages: Message[];
}) {
  const rows = [
    ["Name", esc(p.name)],
    ["Email", `<a href="mailto:${esc(p.email)}" style="color:#2563eb;">${esc(p.email)}</a>`],
    ["Phone", esc(p.phone)],
    ["Time", esc(p.when)],
  ]
    .map(
      ([label, value]) => `
<tr>
  <td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:14px;color:#111827;background:#fafafa;width:80px;">${label}</td>
  <td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:14px;color:#111827;">${value}</td>
</tr>`,
    )
    .join("");

  const transcriptRows = p.messages
    .filter((m) => m.content.trim())
    .map((m) => {
      const isUser = m.role === "user";
      const cellContent = isUser
        ? `<span style="white-space:pre-wrap;word-break:break-word;font-family:Arial,sans-serif;font-size:13px;color:#111827;">${esc(m.content)}</span>`
        : `<div style="word-break:break-word;">${markdownToHtml(m.content)}</div>`;
      return `<tr>
  <td style="padding:8px 10px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;color:${isUser ? "#1d4ed8" : "#374151"};background:${isUser ? "#eff6ff" : "#f9fafb"};vertical-align:top;white-space:nowrap;width:80px;border-top:1px solid #e5e7eb;">${isUser ? "User" : "Assistant"}</td>
  <td style="padding:8px 14px;background:${isUser ? "#eff6ff" : "#f9fafb"};vertical-align:top;border-top:1px solid #e5e7eb;">${cellContent}</td>
</tr>`;
    })
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f5f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f5f7;">
    <tr><td align="center" style="padding:24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px;background:#fff;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.05);">
        <tr><td style="padding:24px 24px 8px;">
          <h1 style="margin:0;font-family:Arial,sans-serif;font-size:20px;color:#111827;">Chat Transcript: ${esc(p.name)}</h1>
        </td></tr>
        <tr><td style="padding:8px 24px 16px;">
          <h2 style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:15px;color:#374151;">Contact Info</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
                 style="border:1px solid #e5e7eb;border-radius:8px;">${rows}</table>
        </td></tr>
        <tr><td style="padding:0 24px 16px;">
          <h2 style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:15px;color:#374151;">Conversation</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
                 style="border:1px solid #e5e7eb;border-radius:8px;">${transcriptRows}</table>
        </td></tr>
        <tr><td style="padding:0 24px 24px;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#9ca3af;">
            Generated by teleringer.com chat widget.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function userAckEmailHtml(p: {
  firstName: string;
  name: string;
  email: string;
  phone: string;
  summary: string;
}) {
  const infoRows = [
    ["Name", esc(p.name)],
    ["Email", esc(p.email)],
    ["Phone", esc(p.phone)],
  ]
    .map(
      ([label, value]) => `
<tr>
  <td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:14px;color:#111827;background:#fafafa;width:80px;">${label}</td>
  <td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:14px;color:#111827;">${value}</td>
</tr>`,
    )
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#f3f5f7;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Thank you for contacting Teleringer. A member of our team will be in touch with you soon.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f5f7;">
    <tr><td align="center" style="padding:24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px;background:#ffffff;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.05);">

        <tr><td style="padding:24px 24px 8px;">
          <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;color:#111827;">Thank you for contacting Teleringer</h1>
        </td></tr>

        <tr><td style="padding:8px 24px 16px;">
          <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">
            Hi ${esc(p.firstName)},
          </p>
          <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">
            Thank you for chatting with us today! A member of our team will be in touch with you soon.
          </p>
          <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#374151;">
            ${esc(p.summary)}
          </p>

          <h2 style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111827;">Here&rsquo;s a summary of what you shared with us:</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
                 style="border:1px solid #e5e7eb;border-radius:8px;">${infoRows}</table>
        </td></tr>

        <tr><td style="padding:0 24px;">
          <hr style="border:0;border-top:1px solid #e5e7eb;margin:4px 0 16px 0;">
        </td></tr>

        <tr><td style="padding:0 24px 24px;">
          <p style="margin:0 0 2px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111827;">
            <strong>Small Business Communications</strong>
          </p>
          <p style="margin:0 0 2px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111827;">
            US &#128222; +1 570-456-5550 &bull; &#127760; <a href="https://www.teleringer.com" style="color:#2563eb;text-decoration:none;" target="_blank">www.teleringer.com</a>
          </p>
          <p style="margin:0 0 2px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111827;">
            Email: <a href="mailto:info@teleringer.com" style="color:#2563eb;text-decoration:none;">info@teleringer.com</a>
          </p>
          <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111827;">
            Client Login <a href="https://interface.teleringer.com" style="color:#2563eb;text-decoration:none;" target="_blank">HERE</a>
          </p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;color:#6b7280;">
            Confidentiality Notice: This email and any attachments are intended solely for the recipient and may contain confidential or privileged information. Any unauthorized review, use, disclosure, or distribution is prohibited. If you are not the intended recipient, please notify the sender immediately and delete this email.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: NextRequest) {
  let body: {
    lead?: { name?: string; email?: string; phone?: string };
    messages?: Message[];
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const { lead, messages } = body;
  if (!lead?.name || !lead?.email || !lead?.phone) {
    return Response.json({ ok: false, error: "Missing lead fields" }, { status: 400 });
  }
  if (!Array.isArray(messages) || !messages.some((m) => m.role === "user")) {
    return Response.json({ ok: false, error: "No user messages" }, { status: 400 });
  }

  const { name, email, phone } = lead;
  const firstName = name.trim().split(/\s+/)[0];
  const when = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const transcript = buildTranscriptText(messages);

  const [summary] = await Promise.all([generateSummary(messages)]);

  try {
    const transporter = nodemailer.createTransport({
      host: reqEnv("SMTP_HOST"),
      port: Number(reqEnv("SMTP_PORT")),
      secure: String(reqEnv("SMTP_SECURE")) === "true",
      auth: { user: reqEnv("SMTP_USER"), pass: reqEnv("SMTP_PASS") },
    });

    // 1) Admin transcript email
    try {
      await transporter.sendMail({
        from: reqEnv("MAIL_FROM"),
        to: reqEnv("MAIL_TO"),
        replyTo: email,
        subject: `Chat Transcript: ${name}`,
        text:
          `Chat transcript from teleringer.com\n\n` +
          `Name:  ${name}\nEmail: ${email}\nPhone: ${phone}\nTime:  ${when}\n\n` +
          `--- Conversation ---\n\n${transcript}`,
        html: adminEmailHtml({ name, email, phone, when, messages }),
      });
    } catch (err) {
      console.error("chat-end admin email error:", err);
    }

    // 2) User acknowledgment email
    try {
      await transporter.sendMail({
        from: reqEnv("MAIL_FROM"),
        to: email,
        replyTo: reqEnv("MAIL_TO"),
        subject: "Thank you for contacting Teleringer",
        text:
          `Hi ${firstName},\n\n` +
          `Thank you for chatting with us today! A member of our team will be in touch with you soon.\n\n` +
          `${summary}\n\n` +
          `Here's a summary of what you shared with us:\n` +
          `Name:  ${name}\nEmail: ${email}\nPhone: ${phone}\n\n` +
          `Small Business Communications\n` +
          `US +1 570-456-5550 | www.teleringer.com\n` +
          `Email: info@teleringer.com\n` +
          `Client Login: https://interface.teleringer.com\n\n` +
          `Confidentiality Notice: This email and any attachments are intended solely for the recipient and may contain confidential or privileged information. Any unauthorized review, use, disclosure, or distribution is prohibited. If you are not the intended recipient, please notify the sender immediately and delete this email.`,
        html: userAckEmailHtml({ firstName, name, email, phone, summary }),
      });
    } catch (err) {
      console.error("chat-end user ack email error:", err);
    }
  } catch (err) {
    console.error("chat-end transporter error:", err);
  }

  return Response.json({ ok: true });
}
