import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const phone = String(form.get("phone") || "");
    const subject = String(form.get("subject") || "Website Contact");
    const message = String(form.get("message") || "");
    const services = String(form.get("service") || "");
    const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.teleringer.com";

    const transporter = nodemailer.createTransport({
      host: env("SMTP_HOST"),
      port: Number(env("SMTP_PORT")),
      secure: String(env("SMTP_SECURE")) === "true",
      auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
    });

    await transporter.sendMail({
      from: env("MAIL_FROM"),
      to: env("MAIL_TO"),
      replyTo: email || env("MAIL_TO"),
      subject: `Contact: ${subject} — ${name}`,
      text:
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n` +
        (services ? `Services: ${services}\n` : "") +
        `\nMessage:\n${message}\n\n— Sent from ${SITE}`,
    });

    if (email) {
      await transporter.sendMail({
        from: env("MAIL_FROM"),
        to: email,
        replyTo: env("MAIL_TO"),
        subject: "We received your message",
        text:
          `Hi ${name || "there"},\n\nThanks for contacting Teleringer.\n` +
          `We received your message about "${subject}". A team member will follow up soon.\n\n` +
          `— Teleringer Communications\n570-246-4287 • teleringer.com`,
      });
    }

    const redirectTo = new URL(SITE);
    redirectTo.searchParams.set("sent", "1");
    return NextResponse.redirect(redirectTo.toString(), { status: 303 });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
