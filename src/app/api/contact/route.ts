import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * ============================================================
 *  CONTACT API — Demo endpoint
 * ============================================================
 *  This route validates and logs contact submissions. It does
 *  NOT send an email. To wire up real delivery, replace the
 *  `TODO` block below with your email provider call (Resend,
 *  Postmark, SendGrid, etc.) using a server-side API key.
 *
 *  The response is intentionally honest about the demo status
 *  so the UI can show an accurate message to the visitor.
 */

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long."),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  // ---- DEMO BEHAVIOR ----
  // Log the submission so it's genuinely "received" (not faked).
  // Replace this block with a real email send in production.
  console.log("[contact] new submission", {
    name,
    email,
    subject,
    message,
    at: new Date().toISOString(),
  });

  // Optional: persist to your database here if you want to keep
  // a record of submissions. e.g.:
  //   await db.contactMessage.create({ data: { name, email, subject, message } });

  return NextResponse.json(
    {
      ok: true,
      demo: true,
      message:
        "Your message was received by the demo endpoint and logged. No email was actually sent — connect an email provider in src/app/api/contact/route.ts to enable delivery.",
    },
    { status: 200 }
  );
}

export const dynamic = "force-dynamic";
