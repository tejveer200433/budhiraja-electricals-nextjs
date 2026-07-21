import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const TARGET_EMAIL = "tejveer.singh_cs22@gla.ac.in";

async function createTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
  const smtpTo = process.env.SMTP_TO ?? TARGET_EMAIL;
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASS must be set in environment variables.");
  }

  return {
    transporter: nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    }),
    from: smtpFrom,
    to: smtpTo,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const { transporter, from, to } = await createTransporter();
    const subject = `New enquiry from ${name}`;
    const textLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : undefined,
      company ? `Company: ${company}` : undefined,
      "",
      message,
    ].filter(Boolean);

    await transporter.sendMail({
      from,
      to,
      subject,
      text: textLines.join("\n"),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send message.";
    console.error("Contact API error", error);
    return NextResponse.json({ error: `Unable to send message. ${message}` }, { status: 500 });
  }
}
