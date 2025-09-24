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

/** Escape user-supplied values for HTML */
function esc(v: string) {
  return (v || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function userReplyHtml(opts: {
  name: string;
  subject: string;
  logoCid?: string;
  email: string;
  company: string;
  phone: string;
  services: string;
  message: string;
}) {
  const { name, subject, logoCid, email, company, phone, services, message } = opts;
  const safeName = name || "there";
  const preheader =
    "Thanks for contacting Teleringer. We received your message and will follow up soon.";

  const logo = logoCid
    ? `<img src="cid:${logoCid}" alt="Teleringer" width="180" style="display:block;height:auto;border:0;outline:none;text-decoration:none;">`
    : "";

  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>We received your message</title></head>
<body style="margin:0;padding:0;background:#f3f5f7;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f5f7;">
    <tr><td align="center" style="padding:24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.05);">
        <tr><td style="padding:24px 24px 8px 24px;" align="left">${logo}</td></tr>
        <tr><td style="padding:0 24px 8px 24px;" align="left">
          <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;color:#111827;">We received your message</h1>
        </td></tr>
        <tr><td style="padding:0 24px 16px 24px;" align="left">
          <p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">Hi ${esc(safeName)},</p>
          <p style="margin:0 0 14px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">Thanks for contacting Teleringer. We received your message${
            subject ? ` about “${esc(subject)}”` : ""
          }. A team member will follow up soon.</p>
        </td></tr>

        <!-- Echo back what they submitted -->
        <tr><td style="padding:0 24px 6px 24px;">
          <h2 style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#111827;">You submitted</h2>
        </td></tr>
        <tr><td style="padding:0 24px 16px 24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e5e7eb;border-radius:8px;">
            <tr>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;width:180px;">Name</td>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;">${esc(name)}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;">Email</td>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;">${esc(email)}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;">Company</td>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;">${esc(company)}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;">Phone</td>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;">${esc(phone)}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;">Service Interest</td>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;">${esc(services || "—")}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;background:#fafafa;vertical-align:top;">Message</td>
              <td style="padding:12px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;white-space:pre-wrap;">${esc(message)}</td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="padding:0 24px;">
          <hr style="border:0;border-top:1px solid #e5e7eb;margin:4px 0 16px 0;">
        </td></tr>

        <!-- Signature -->
        <tr><td style="padding:0 24px 8px 24px;" align="left">
          <p style="margin:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;"><strong>Teleringer</strong></p>
          <p style="margin:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;">Tel: (570) 456-5550</p>
          <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111827;"><a href="https://www.teleringer.com" style="color:#0b7d5c;text-decoration:none;" target="_blank">www.teleringer.com</a></p>
          <p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:9pt;line-height:1.5;color:#6b7280;">
            The information contained in this electronic mail transmission is a privileged attorney-client communication and is intended solely for the addressee(s) named above. If you are not an addressee, or responsible for delivering this transmission to an addressee, you have received this transmission in error and you are strictly prohibited from reading or disclosing it. The information contained in this transmission is highly confidential and may be subject to legally enforceable privileges. Unless you are an addressee or associated with an addressee for delivery purposes, you may violate these privileges and subject yourself to liability if you do anything with this transmission other than immediately contacting me by telephone at 570-456-5550 and delete this transmission. Thank you.
          </p>
        </td></tr>
      </table>
      <div style="height:24px;line-height:24px;font-size:24px;">&nbsp;</div>
    </td></tr>
  </table>
</body></html>`;
}

function userReplyText(
  name: string,
  subject: string,
  email: string,
  company: string,
  phone: string,
  services: string,
  message: string
) {
  const safeName = name || "there";
  return (
    `Hi ${safeName},\n\n` +
    `Thanks for contacting Teleringer. We received your message` +
    (subject ? ` about "${subject}"` : "") +
    `. A team member will follow up soon.\n\n` +
    `== You submitted ==\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Company: ${company}\n` +
    `Phone: ${phone}\n` +
    `Service Interest: ${services || "—"}\n` +
    `Message:\n${message}\n\n` +
    `Teleringer\nTel: (570) 456-5550\nwww.teleringer.com\n`
  );
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Honeypot: if bots fill this hidden field, ignore
    if (String(form.get("website") || "").trim() !== "") {
      return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
    }

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const phone = String(form.get("phone") || "");
    const subject = String(form.get("subject") || "Website Contact");
    const message = String(form.get("message") || "");

    // Support multiple checkboxes named "service"
    const servicesAll = form.getAll("service").map(String).filter(Boolean);
    const services = servicesAll.join(", ");

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // SMTP transport (your cPanel server)
    const transporter = nodemailer.createTransport({
      host: reqEnv("SMTP_HOST"),                 // e.g., mail.teleringer.com
      port: Number(reqEnv("SMTP_PORT")),         // 465 (SSL) or 587 (STARTTLS)
      secure: String(reqEnv("SMTP_SECURE")) === "true",
      auth: {
        user: reqEnv("SMTP_USER"),               // full mailbox, e.g., no-reply@teleringer.com
        pass: reqEnv("SMTP_PASS"),
      },
      // tls: { minVersion: "TLSv1.2" }, // uncomment if your server requires it
    });

    // 1) Send to Teleringer inbox
    await transporter.sendMail({
      from: reqEnv("MAIL_FROM"),
      to: reqEnv("MAIL_TO"),
      replyTo: email || reqEnv("MAIL_TO"),
      subject: `Contact: ${subject} — ${name}`,
      text:
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n` +
        (services ? `Services: ${services}\n` : "") +
        `\nMessage:\n${message}\n`,
    });

    // 2) Auto-reply to the visitor (HTML + text, with optional inline logo via CID)
    if (email) {
      const logoCid = "logo@teleringer"; // arbitrary stable ID
      const logoUrl = optEnv("MAIL_LOGO_URL"); // e.g. https://www.teleringer.com/brand/header-logo.png

      await transporter.sendMail({
        from: reqEnv("MAIL_FROM"),
        to: email,
        replyTo: reqEnv("MAIL_TO"),
        subject: "We received your message",
        text: userReplyText(name, subject, email, company, phone, services, message),
        html: userReplyHtml({
          name,
          subject,
          logoCid: logoUrl ? logoCid : undefined,
          email,
          company,
          phone,
          services,
          message,
        }),
        attachments: logoUrl
          ? [{ filename: "header-logo.png", path: logoUrl, cid: logoCid }]
          : [],
      });
    }

    // Redirect back to /contact with a success flag
    return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
