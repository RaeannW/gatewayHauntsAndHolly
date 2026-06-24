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

  const { email, stlLocal, _gotcha } = body as {
    email?: unknown;
    stlLocal?: unknown;
    _gotcha?: unknown;
  };

  // Honeypot: bots fill this hidden field, humans don't. Pretend success so
  // bots don't learn to leave it blank.
  if (typeof _gotcha === "string" && _gotcha.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const normalizedEmail =
    typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const createContact = () =>
    resend.contacts.create({
      email: normalizedEmail,
      unsubscribed: false,
      ...(stlLocal === true
        ? { topics: [{ id: STL_TOPIC_ID, subscription: "opt_in" as const }] }
        : {}),
    });

  let { data, error } = await createContact();

  // Resend's API occasionally fails to resolve on the first attempt
  // (transient network blip) — one retry clears most of these.
  if (error) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    ({ data, error } = await createContact());
  }

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
