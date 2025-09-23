import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
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

    // 2) Auto-reply to the visitor
    if (email) {
      await transporter.sendMail({
        from: reqEnv("MAIL_FROM"),
        to: email,
        replyTo: reqEnv("MAIL_TO"),
        subject: "We received your message",
        text:
          `Hi ${name || "there"},\n\nThanks for contacting Teleringer.\n` +
          `We received your message about "${subject}". A team member will follow up soon.\n\n` +
          `— Teleringer Communications\n570-246-4287 • teleringer.com`,
      });
    }

    // Redirect back to /contact with a success flag
    return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
