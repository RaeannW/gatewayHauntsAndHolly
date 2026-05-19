import styles from "./HeadingBlock.module.css";

interface HeadingBlockProps {
  level: 2 | 3;
  text: React.ReactNode;
}

export default function HeadingBlock({ level, text }: HeadingBlockProps) {
  if (level === 3) {
    return <h3 className={styles.heading3}>{text}</h3>;
  }
  return <h2 className={styles.heading2}>{text}</h2>;
}
