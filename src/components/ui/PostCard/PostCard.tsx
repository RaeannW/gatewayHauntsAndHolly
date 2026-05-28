import Image from "next/image";
import styles from "./PostCard.module.css";

interface PostCardProps {
  stampSrc?: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
  message: string;
  messageKicker?: string;
}

export default function PostCard({
  stampSrc = "/images/decor/stamp.png",
  illustrationSrc,
  illustrationAlt = "",
  message,
  messageKicker = "A note from the desk",
}: PostCardProps) {
  return (
    <div
      className={styles.card}
      aria-label="A postcard from Gateway Haunts & Holly"
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Post Card.</h2>
        <Image
          src={stampSrc}
          alt=""
          width={56}
          height={56}
          className={styles.stamp}
          aria-hidden="true"
        />
      </div>

      <div className={styles.divider} aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.addressSide}>
          {illustrationSrc && (
            <div className={styles.illustration}>
              <Image
                src={illustrationSrc}
                alt={illustrationAlt}
                width={180}
                height={140}
                className={styles.illustrationInner}
              />
            </div>
          )}

          <dl className={styles.addressFields}>
            <div className={styles.field}>
              <dt className={styles.fieldLabel}>To:</dt>
              <dd className={styles.fieldLine} />
              <dd className={styles.fieldLine} />
            </div>
            <div className={styles.field}>
              <dt className={styles.fieldLabel}>From:</dt>
              <dd className={styles.fieldLine} />
              <dd className={styles.fieldLine} />
            </div>
          </dl>
        </div>

        <div className={styles.messageSide}>
          <p className={styles.kicker}>{messageKicker}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </div>
  );
}
