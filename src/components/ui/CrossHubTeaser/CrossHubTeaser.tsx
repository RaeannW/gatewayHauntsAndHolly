import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Garland from "../Garland/Garland";
import styles from "./CrossHubTeaser.module.css";

interface CrossHubTeaserProps {
  backgroundColor: string;
  accentColor: string;
  illustrationSrc: string;
  illustrationAlt?: string;
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CrossHubTeaser({
  backgroundColor,
  accentColor,
  illustrationSrc,
  illustrationAlt = "",
  heading,
  body,
  buttonLabel,
  buttonHref,
}: CrossHubTeaserProps) {
  return (
    <section
      className={styles.section}
      style={
        {
          backgroundColor,
          "--crosshub-accent": accentColor,
        } as React.CSSProperties
      }
    >
      <div className={styles.garland}>
        <Garland src="/images/decor/laceTile.svg" height={60} />
      </div>

      <div className={styles.inner}>
        <div className={styles.illustrationWrap}>
          <Image
            src={illustrationSrc}
            alt={illustrationAlt}
            fill
            className={styles.illustration}
            aria-hidden={!illustrationAlt || undefined}
          />
        </div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.body}>{body}</p>
        <Button as="link" href={buttonHref} variant="inverted" size="md">
          {buttonLabel}
          <span aria-hidden="true"> →</span>
        </Button>
      </div>
    </section>
  );
}
