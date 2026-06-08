"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import styles from "./NewsletterSignup.module.css";

interface NewsletterSignupProps {
  variant?: "light" | "dark";
  showStlCheckbox?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup({
  variant = "light",
  showStlCheckbox = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [stlLocal, setStlLocal] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, stlLocal }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setEmail("");
      setStlLocal(false);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div
      className={`${styles.signup} ${variant === "dark" ? styles.dark : ""}`}
    >
      <h3 className={styles.title}>Get Updates</h3>
      <p className={styles.description}>
        New posts and seasonal picks straight to your inbox.
      </p>

      {status === "success" ? (
        <p className={styles.success}>
          You&apos;re on the list. We will be in touch when we launch.
        </p>
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
            disabled={isLoading}
            className={styles.input}
          />
          {showStlCheckbox && (
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={stlLocal}
                onChange={(e) => setStlLocal(e.target.checked)}
                disabled={isLoading}
                className={styles.checkbox}
              />
              I&apos;m in the St. Louis area. Send me local events &amp; guides
            </label>
          )}
          <Button
            as="button"
            type="submit"
            variant="primary"
            size="md"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing…" : "Subscribe"}
          </Button>
          {status === "error" && (
            <p className={styles.error} role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
