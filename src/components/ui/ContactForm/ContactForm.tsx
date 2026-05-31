"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import styles from "./ContactForm.module.css";

const INQUIRY_TYPES = [
  { value: "tips", label: "Tips & local event suggestions" },
  { value: "pitch", label: "Blog pitch / want to contribute" },
  { value: "partnership", label: "Partnerships & sponsorships" },
  { value: "project", label: "Design or development project" },
  { value: "bug", label: "Bug or site issue" },
  { value: "other", label: "Something else" },
] as const;

interface ContactFormProps {
  formAction: string;
}

export default function ContactForm({ formAction }: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(formAction, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successWrap}>
        <p className={styles.successHeading}>
          Thanks — your message is on its way.
        </p>
        <p className={styles.successBody}>
          I read every note that comes in and try to respond within a week. Talk
          soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="inquiryType" className={styles.label}>
          What is this about?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          defaultValue=""
          className={styles.select}
        >
          <option value="" disabled>
            Choose one
          </option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={styles.textarea}
        />
      </div>

      {/* Honeypot field for spam — bots fill it, humans don't */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />

      <div className={styles.submitRow}>
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
        {status === "error" && (
          <p className={styles.errorText}>
            Something went wrong. Try again, or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
