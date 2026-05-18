import Image from "next/image";
import styles from "./ImageBlock.module.css";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  align: "wide" | "left" | "right" | "center";
}

export default function ImageBlock({ src, alt, caption, align }: ImageBlockProps) {
  return (
    <figure className={styles.figure} data-align={align}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ objectFit: "cover" }}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
