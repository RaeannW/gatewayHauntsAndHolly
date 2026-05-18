import styles from "./CalloutBlock.module.css";

interface CalloutBlockProps {
  variant: "note" | "tip" | "warning";
  text: string;
}

export default function CalloutBlock({ variant, text }: CalloutBlockProps) {
  return (
    <div className={styles.callout} data-variant={variant}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
