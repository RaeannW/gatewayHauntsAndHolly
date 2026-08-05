import PageHeader from "@/components/ui/PageHeader/PageHeader";
import GateDivider from "@/components/ui/GateDivider/GateDivider";
import Button from "@/components/ui/Button/Button";
import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  title?: string;
  tagline?: string;
  message: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  tagline,
  message,
}: ComingSoonProps) {
  return (
    <div className={styles.comingSoon}>
      <PageHeader title={title} tagline={tagline} showDivider />

      <section className={styles.body}>
        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <Button as="link" href="/" variant="primary">
            Back to Home
          </Button>
          <Button as="link" href="/halloween" variant="secondary">
            Halloween
          </Button>
        </div>
      </section>

      <GateDivider />
    </div>
  );
}
