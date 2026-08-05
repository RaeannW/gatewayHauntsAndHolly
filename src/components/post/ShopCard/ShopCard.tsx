import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import styles from "./ShopCard.module.css";

interface ShopCardProps {
  name: string;
  description?: string;
  image: { src: string; alt: string };
  affiliateUrl: string;
  isAffiliate?: boolean;
}

export default function ShopCard({
  name,
  description,
  image,
  affiliateUrl,
  isAffiliate = true,
}: ShopCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src="/images/decor/thumbTack.png"
        alt=""
        width={40}
        height={40}
        className={styles.thumbtack}
        aria-hidden="true"
      />
      <div className={styles.image}>
        <Image
          src={image.src || "/images/placeholder-1.jpg"}
          alt={image.alt || ""}
          fill
          sizes="200px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p
          className={`${styles.affiliateLabel} ${!isAffiliate ? styles.affiliateLabelHidden : ""}`}
          aria-hidden={!isAffiliate}
        >
          Affiliate Link
        </p>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.actions}>
          <Button
            as="link"
            href={affiliateUrl}
            variant="primary"
            size="sm"
            external
            className={styles.button}
          >
            Shop
          </Button>
        </div>
      </div>
    </div>
  );
}