import Image from "next/image";
import styles from "./TwoUpSection.module.css";

interface TwoUpColumnData {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  body: React.ReactNode;
  order?: "imageFirst" | "textFirst";
}

interface TwoUpSectionProps {
  left: TwoUpColumnData;
  right: TwoUpColumnData;
  bordered?: boolean;
}

function Column({
  imageSrc,
  imageAlt,
  heading,
  body,
  order = "imageFirst",
  side,
}: TwoUpColumnData & { side: "left" | "right" }) {
  const columnClass = [
    styles.column,
    side === "left" ? styles.leftColumn : styles.rightColumn,
    order === "textFirst" ? styles.textFirst : styles.imageFirst,
  ].join(" ");

  return (
    <div className={columnClass}>
      <div className={styles.imageBlock}>
        <Image
          fill
          src={imageSrc}
          alt={imageAlt}
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  );
}

export default function TwoUpSection({
  left,
  right,
  bordered = false,
}: TwoUpSectionProps) {
  const wrapperClass = [
    styles.wrapper,
    bordered ? styles.bordered : "",
  ].join(" ").trim();

  return (
    <section className={wrapperClass}>
      <Column {...left} side="left" />
      <Column {...right} side="right" />
    </section>
  );
}
