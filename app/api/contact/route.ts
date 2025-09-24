// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Required env helper */
function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}
/** Optional env helper */
function optEnv(name: string) {
  return process.env[name] || "";
}
/** HTML escape */
function esc(v: string) {
  return (v || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Shared wrapper with logo + card */
function emailShell({
  logoCid,
  title,
  bodyHtml,
  footerHtml,
}: {
  logoCid?: string;
  title: string;
  bodyHtml: string;
  footerHtml: string;
}) {
  const logo = logoCid
    ? `<img src="cid:${logoCid}" alt="Teleringer" width="180" style="display:block;height:auto;border:0;outline:none;text-decoration:none;">`
    : "";
  const preheader = "Thanks for contacting Teleringer. We received your message and will follow up soon.";

  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(
    title,
  )}</title></head>
<body style="margin:0;padding:0;background:#f3f5f7;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f5f7;">
    <tr><td align="center" style="padding:24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.05);">
        <tr><td style="padding:24px 24px 8px 24px;" align="left">${logo}</td></tr>
        <tr><td style="padding:0 24px 8px 24px;" align="left">
          <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;color:#111827;">${esc(
            title,
          )}</h1>
        </td></tr>
        <tr><td style="padding:0 24px 16px 24px;" align="left">${bodyHtml}</td></tr>
        <tr><td style="padding:0 24px;">
          <hr style="border:0;border-top:1px solid #e5e7eb;margin:4px 0 16px 0;">
        </td></tr>
        <tr><td style="padding:0 24px 24px 24px;" align="left">${footerHtml}</td></tr>
      </table>
      <div style="height:24px;line-height:24px;font-size:24px;">&nbsp;</div>
    </td></tr>
  </table>
</body></html>`;
}

/** Build the “You submitted” table */
function submittedTable(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([label, value]) => `
<tr>
  <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;width:180px;">${esc(
    label,
  )}</td>
  <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;${
    label === "Message" ? "white-space:pre-wrap;" : ""
  }">${esc(value || "—")}</td>
</tr>`,
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e5e7eb;border-radius:8px;">${rows}</table>`;
}

/** User auto-reply HTML */
function userReplyHtml(p: {
  name: string;
  subject: string;
  logoCid?: string;
  email: string;
  company: string;
  phone: string;
  services: string;
  message: string;
}) {
  const intro = `
<p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">
  Hi ${esc(p.name || "there")},
</p>
<p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">
  Thanks for contacting Teleringer. We received your message${
    p.subject ? ` about “${esc(p.subject)}”` : ""
  }. A team member will follow up soon.
</p>
<h2 style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#111827;">You submitted</h2>
${submittedTable({
  Name: p.name,
  Email: p.email,
  Company: p.company,
  Phone: p.phone,
  "Service Interest": p.services,
  Message: p.message,
})}
`;

  const footer = `
<p style="margin:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;"><strong>Teleringer</strong></p>
<p style="margin:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">Tel: (570) 456-5550</p>
<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;"><a href="https://www.teleringer.com" style="color:#0b7d5c;text-decoration:none;" target="_blank">www.teleringer.com</a></p>
<p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:9pt;line-height:1.5;color:#6b7280;">
  The information contained in this electronic mail transmission is a privileged attorney-client communication and is intended solely for the addressee(s) named above. If you are not an addressee, or responsible for delivering this transmission to an addressee, you have received this transmission in error and you are strictly prohibited from reading or disclosing it. The information contained in this transmission is highly confidential and may be subject to legally enforceable privileges. Unless you are an addressee or associated with an addressee for delivery purposes, you may violate these privileges and subject yourself to liability if you do anything with this transmission other than immediately contacting me by telephone at 570-456-5550 and delete this transmission. Thank you.
</p>
`;

  return emailShell({ logoCid: p.logoCid, title: "We received your message", bodyHtml: intro, footerHtml: footer });
}

/** Admin notification HTML (matches the same style) */
function adminNoticeHtml(p: {
  logoCid?: string;
  ip: string;
  when: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  services: string;
  message: string;
}) {
  const intro = `
<p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">
  New website contact submission received.
</p>
${submittedTable({
  Name: p.name,
  Email: p.email,
  Company: p.company,
  Phone: p.phone,
  Subject: p.subject,
  "Service Interest": p.services,
  Message: p.message,
  "IP Address": p.ip,
  "Received At": p.when,
})}
`;

  const footer = `
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#6b7280;">
  This message was generated by teleringer.com.
</p>
`;

  return emailShell({ logoCid: p.logoCid, title: "New Contact Message", bodyHtml: intro, footerHtml: footer });
}

/** Plain-text fallbacks */
function userReplyText(
  name: string,
  subject: string,
  email: string,
  company: string,
  phone: string,
  services: string,
  message: string,
) {
  const safeName = name || "there";
  return (
    `Hi ${safeName},\n\n` +
    `Thanks for contacting Teleringer. We received your message` +
    (subject ? ` about "${subject}"` : "") +
    `. A team member will follow up soon.\n\n` +
    `== You submitted ==\n` +
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService Interest: ${services || "—"}\n` +
    `Message:\n${message}\n\n` +
    `Teleringer\nTel: (570) 456-5550\nwww.teleringer.com\n`
  );
}

function adminNoticeText(
  name: string,
  email: string,
  company: string,
  phone: string,
  subject: string,
  services: string,
  message: string,
  ip: string,
  when: string,
) {
  return (
    `New website contact submission\n\n` +
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nSubject: ${subject}\n` +
    `Service Interest: ${services || "—"}\n\nMessage:\n${message}\n\n` +
    `IP: ${ip}\nReceived At: ${when}\n`
  );
}

/** Light spam heuristics */
function tooManyLinks(s: string, maxLinks = 6) {
  const links = (s.match(/https?:\/\/|www\./gi) || []).length;
  return links > maxLinks;
}
function containsBadStuff(s: string) {
  const bad = [
    "viagra", "porn", "casino", "loan", "crypto investment", "forex",
    "seo backlinks", "guest post", "guestpost", "smm panel",
  ];
  const t = s.toLowerCase();
  return bad.some((w) => t.includes(w));
}

/** Cloudflare Turnstile verification */
async function verifyTurnstile(token?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true }; // allow if not configured yet
  if (!token) return { ok: false, reason: "missing_token" };

  const form = new URLSearchParams();
  form.append("secret", secret);
  form.append("response", token);

  const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const data = await r.json();
  return { ok: !!data?.success, reason: data?.["error-codes"]?.[0] };
}

export async function POST(req: NextRequest) {
  try {
    // Optionally guard giant payloads
    const contentLength = Number(req.headers.get("content-length") || "0");
    if (contentLength > 512 * 1024) {
      return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }

    const form = await req.formData();

    // Honeypot (your existing field)
    if (String(form.get("website") || "").trim() !== "") {
      return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
    }

    // Timing: must be ≥ 2s since page render (set by hidden input on page)
    const started = Number(String(form.get("form_ts") || "0"));
    if (!Number.isNaN(started) && started > 0 && Date.now() - started < 2000) {
      return NextResponse.json({ ok: false, error: "Spam detected (too fast)" }, { status: 400 });
    }

    // Turnstile token (added by <div class="cf-turnstile">)
    const tsToken = String(form.get("cf-turnstile-response") || "");
    const ts = await verifyTurnstile(tsToken);
    if (!ts.ok) {
      return NextResponse.json({ ok: false, error: "Captcha failed" }, { status: 400 });
    }

    // Gather fields (names match your form)
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const phone = String(form.get("phone") || "");
    const subject = String(form.get("subject") || "Website Contact");
    const message = String(form.get("message") || "");
    const servicesAll = form.getAll("service").map(String).filter(Boolean);
    const services = servicesAll.join(", ");

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    if (tooManyLinks(message) || containsBadStuff(message)) {
      return NextResponse.json({ ok: false, error: "Spam content" }, { status: 400 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      (req as any).ip ||
      "unknown";
    const when = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

    // SMTP transport (cPanel)
    const transporter = nodemailer.createTransport({
      host: reqEnv("SMTP_HOST"),
      port: Number(reqEnv("SMTP_PORT")),
      secure: String(reqEnv("SMTP_SECURE")) === "true",
      auth: { user: reqEnv("SMTP_USER"), pass: reqEnv("SMTP_PASS") },
    });

    const logoCid = "logo@teleringer";
    const logoUrl = optEnv("MAIL_LOGO_URL"); // e.g. https://www.teleringer.com/brand/header-logo.png

    // 1) Send to Teleringer inbox (HTML styled)
    try {
      await transporter.sendMail({
        from: reqEnv("MAIL_FROM"), // e.g., "Teleringer <info@teleringer.com>"
        to: reqEnv("MAIL_TO"),     // e.g., "info@teleringer.com"
        replyTo: email || reqEnv("MAIL_TO"),
        subject: `Contact: ${subject} — ${name}`,
        text: adminNoticeText(name, email, company, phone, subject, services, message, ip, when),
        html: adminNoticeHtml({
          logoCid: logoUrl ? logoCid : undefined,
          ip,
          when,
          name,
          email,
          company,
          phone,
          subject,
          services,
          message,
        }),
        attachments: logoUrl ? [{ filename: "header-logo.png", path: logoUrl, cid: logoCid }] : [],
      });
    } catch (e: any) {
      console.error("SEND_ADMIN_EMAIL_ERROR", e?.response || e);
      // carry on to user ack; we still confirm to the user
    }

    // 2) Auto-reply to the visitor (same professional look)
    if (email) {
      try {
        await transporter.sendMail({
          from: reqEnv("MAIL_FROM"), // MUST be your domain for DMARC/SPF alignment
          to: email,
          replyTo: reqEnv("MAIL_TO"),
          subject: "We received your message",
          text: userReplyText(name, subject, email, company, phone, services, message),
          html: userReplyHtml({
            logoCid: logoUrl ? logoCid : undefined,
            name,
            subject,
            email,
            company,
            phone,
            services,
            message,
          }),
          attachments: logoUrl ? [{ filename: "header-logo.png", path: logoUrl, cid: logoCid }] : [],
        });
      } catch (e: any) {
        // If this bounces, you’ll see the server’s reason in Vercel logs
        console.error("SEND_USER_EMAIL_ERROR", e?.response || e);
      }
    }

    // Redirect back to UI with success flag
    return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
