import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// St. Louis local segment — controls events & guides emails
const STL_TOPIC_ID = "97d7453b-ea4e-4fad-b41f-a380d7e4717f";
// TODO: add Boo Box topic ID here when that segment is launched

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, stlLocal } = body as { email?: unknown; stlLocal?: unknown };

  const normalizedEmail =
    typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const { data, error } = await resend.contacts.create({
    email: normalizedEmail,
    unsubscribed: false,
    ...(stlLocal === true
      ? { topics: [{ id: STL_TOPIC_ID, subscription: "opt_in" as const }] }
      : {}),
  });

  if (error) {
    // "Contact already exists" is success — don't surface repeat signups as errors
    const msg = error.message?.toLowerCase() ?? "";
    if (msg.includes("already exists") || msg.includes("contact_exists")) {
      return NextResponse.json({ ok: true });
    }

    console.error("[subscribe] Resend error:", error);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again later." },
      { status: 500 }
    );
  }

  console.log("[subscribe] created contact:", data?.id);
  return NextResponse.json({ ok: true });
}
