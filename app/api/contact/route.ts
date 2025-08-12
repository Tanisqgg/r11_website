import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const nodemailer = (await import("nodemailer")).default;  // ← dynamic import
  const body = await request.json().catch(() => ({}));
  const { name = "", email = "", company = "", message = "", website = "" } = body || {};
  if (website) return NextResponse.json({ ok: false }, { status: 400 });

  const {
    ZOHO_SMTP_HOST = "smtp.zoho.com",
    ZOHO_SMTP_PORT = "465",
    ZOHO_SMTP_SECURE = "true",
    ZOHO_SMTP_USER,
    ZOHO_SMTP_PASS,
    CONTACT_FROM,
    CONTACT_TO,
  } = process.env as Record<string, string | undefined>;

  if (!ZOHO_SMTP_USER || !ZOHO_SMTP_PASS || !CONTACT_TO) {
    return NextResponse.json({ ok: false, error: "SMTP not configured" }, { status: 500 });
  }

  const fromAddress = CONTACT_FROM || ZOHO_SMTP_USER;
  const transporter = (await nodemailer.createTransport({
    host: ZOHO_SMTP_HOST,
    port: Number(ZOHO_SMTP_PORT),
    secure: ZOHO_SMTP_SECURE === "true",
    auth: { user: ZOHO_SMTP_USER, pass: ZOHO_SMTP_PASS },
  }));

  const subject = `New demo request from ${name || email}`;
  const text = [`Name: ${name}`, `Email: ${email}`, `Company: ${company}`, `Message: ${message}`].join("\n");

  // Optional first time only:
  // await transporter.verify();

  await transporter.sendMail({
    from: `RedElevenLabs <${fromAddress}>`,
    to: CONTACT_TO,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true });
}