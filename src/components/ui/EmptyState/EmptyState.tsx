import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function EmptyState({
  heading = "Nothing here yet",
  body = "Check back soon — new recipes are added throughout the season.",
  ctaLabel,
  ctaHref,
}: EmptyStateProps) {
  return (
    <div className={styles.outer}>
      <Image
        src="/images/decor/tape.png"
        alt=""
        width={120}
        height={40}
        className={styles.tape}
        aria-hidden="true"
      />
      <div className={styles.box}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.body}>{body}</p>
        {ctaLabel && ctaHref && (
          <div className={styles.cta}>
            <Button as="link" href={ctaHref} variant="secondary" size="md">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
