import Image from "next/image";
import styles from "./SplitSection.module.css";

interface SplitSectionProps {
  sectionTitle: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  backgroundSrc: string;
  backgroundAlt?: string;
  imageSide?: "left" | "right";
}

export default function SplitSection({
  sectionTitle,
  children,
  imageSrc,
  imageAlt,
  backgroundSrc,
  backgroundAlt = "",
  imageSide = "right",
}: SplitSectionProps) {
  return (
    <div
      className={`${styles.grid} ${imageSide === "left" ? styles.imageLeft : ""}`}
    >
      <div className={styles.textColumn}>
        <h2 className={styles.heading}>{sectionTitle}</h2>
        <div className={styles.body}>{children}</div>
      </div>

      <div className={styles.imageColumn}>
        <div className={styles.frame}>
          <div className={styles.mat}>
            <Image
              fill
              src={backgroundSrc}
              alt={backgroundAlt}
              className={styles.backgroundImg}
              aria-hidden={!backgroundAlt || undefined}
            />
            <div className={styles.photoWrap}>
              <Image
                fill
                src={imageSrc}
                alt={imageAlt}
                className={styles.photoImg}
              />
              <Image
                src="/images/decor/tape.png"
                alt=""
                width={140}
                height={47}
                className={styles.tape}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
