import Image from "next/image";
import styles from "./ParagraphWithImageBlock.module.css";

interface ParagraphWithImageBlockProps {
  text: string;
  image: { src: string; alt: string };
  align: "left" | "right";
}

export default function ParagraphWithImageBlock({
  text,
  image,
  align,
}: ParagraphWithImageBlockProps) {
  return (
    <div className={styles.block} data-align={align}>
      <div className={styles.imageWrapper}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
