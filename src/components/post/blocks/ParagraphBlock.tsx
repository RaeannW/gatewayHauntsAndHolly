import styles from "./ParagraphBlock.module.css";

interface ParagraphBlockProps {
  text: React.ReactNode;
}

export default function ParagraphBlock({ text }: ParagraphBlockProps) {
  return <p className={styles.paragraph}>{text}</p>;
}
