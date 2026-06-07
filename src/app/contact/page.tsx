import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Garland from "@/components/ui/Garland/Garland";
import PostCard from "@/components/ui/PostCard/PostCard";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import GateDivider from "@/components/ui/GateDivider/GateDivider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact | Gateway Haunts & Holly",
  description:
    "Get in touch with Gateway Haunts & Holly — tips, pitches, partnerships, and project inquiries welcome.",
};

const CONTACT_EMAIL = "rae@gatewayhauntsandholly.com";

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <PageHeader title="Contact" tagline="Send Us a Note" showDivider />

      <Garland src="/images/decor/laceTile.svg" height={60} />

      <PostCard
        illustrationSrc="/images/decor/pumpkinIllustration.svg"
        illustrationAlt=""
        messageKicker="A note from the desk"
        message="Got a tip, a pitch, or just want to say hi? Drop us a line — we love hearing from fellow holiday people."
      />
      <section className={styles.intro} aria-label="Contact form introduction">
        <p>
          The fastest way to reach me is the form below. I read every message
          and try to respond within a week. Tell me a bit about whats on your
          mind and Ill get back to you.
        </p>
      </section>

      <section className={styles.formSection} aria-label="Contact form">
        <ContactForm formAction={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!} />

        <p className={styles.fallback}>
          Prefer your own email client? Reach me at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>

      <GateDivider />
    </div>
  );
}
