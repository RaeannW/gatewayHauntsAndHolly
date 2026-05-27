import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import styles from "./ConnectBox.module.css";

interface ConnectBoxProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  children: React.ReactNode;
  buttonLabel: string;
  buttonHref: string;
  buttonVariant?: "primary" | "secondary" | "outlined";
}

export default function ConnectBox({
  imageSrc,
  imageAlt,
  heading,
  children,
  buttonLabel,
  buttonHref,
  buttonVariant = "primary",
}: ConnectBoxProps) {
  return (
    <div className={styles.outer}>
      <div className={styles.imageWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={140}
          height={47}
          className={styles.image}
          aria-hidden={!imageAlt || undefined}
        />
      </div>
      <div className={styles.box}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.body}>{children}</div>
        <div className={styles.cta}>
          <Button as="link" href={buttonHref} variant={buttonVariant} size="md">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
