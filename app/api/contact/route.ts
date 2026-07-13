import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Works locally without an API key too — logs the submission instead
    // of sending, so the form is fully testable before you connect Resend.
    if (!apiKey) {
      console.log("New contact form submission (RESEND_API_KEY not set):", {
        name,
        email,
        service,
        message,
      });
      return NextResponse.json({ ok: true, mode: "logged" });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Research Connect Pro <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || site.email,
      replyTo: email,
      subject: `New enquiry: ${service || "General"} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
