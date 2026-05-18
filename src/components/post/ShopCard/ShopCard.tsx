import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import styles from "./ShopCard.module.css";

interface ShopCardProps {
  name: string;
  description?: string;
  image: { src: string; alt: string };
  affiliateUrl: string;
}

export default function ShopCard({
  name,
  description,
  image,
  affiliateUrl,
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
          src={image.src}
          alt={image.alt}
          fill
          sizes="200px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}
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
  );
}
