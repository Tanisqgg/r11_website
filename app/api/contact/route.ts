import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name = "", email = "", company = "", message = "" } = body || {};

    // Optional email via Resend if keys are set on the server
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || "hr@redelevenlabs.com";
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@your-domain.com";

    if (RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(RESEND_API_KEY);
        await resend.emails.send({
          from: RESEND_FROM_EMAIL,
          to: RESEND_TO_EMAIL,
          subject: `New demo request from ${name || email}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company}`,
            `Message: ${message}`,
          ].join("\n")
        });
      } catch (e) {
        console.error("Email send failed:", e);
        // still return 200 so the user gets a success if form is valid
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}
