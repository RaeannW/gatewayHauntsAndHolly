"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import styles from "./NewsletterSignup.module.css";

interface NewsletterSignupProps {
  variant?: "light" | "dark";
}

export default function NewsletterSignup({ variant = "light" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to ConvertKit / Mailchimp / Resend
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className={`${styles.signup} ${variant === "dark" ? styles.dark : ""}`}>
      <h3 className={styles.title}>Get Updates</h3>
      <p className={styles.description}>
        New posts and seasonal picks straight to your inbox.
      </p>

      {submitted ? (
        <p className={styles.success}>Thanks — check your inbox to confirm.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="newsletter-email" className={styles.srOnly}>
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={styles.input}
          />
          <Button as="button" type="submit" variant="primary" size="md">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
