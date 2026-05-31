import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import GateDivider from "@/components/ui/GateDivider/GateDivider";
import Button from "@/components/ui/Button/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | Gateway Haunts & Holly",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <PageHeader title="404" tagline="Lost in the Stacks" showDivider />

      <section className={styles.body}>
        <p className={styles.message}>
          We could not find the page you were looking for. It may have moved,
          changed names, or simply slipped into the spirit realm. Try one of the
          links below to get back on track.
        </p>

        <div className={styles.actions}>
          <Button as="link" href="/" variant="primary">
            Back to Home
          </Button>
          <Button as="link" href="/halloween" variant="secondary">
            Halloween
          </Button>
          <Button as="link" href="/christmas" variant="secondary">
            Christmas
          </Button>
        </div>
      </section>

      <GateDivider />
    </div>
  );
}
