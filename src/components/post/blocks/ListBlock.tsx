import styles from "./ListBlock.module.css";

interface ListBlockProps {
  ordered: boolean;
  children: React.ReactNode;
}

export default function ListBlock({ ordered, children }: ListBlockProps) {
  if (ordered) {
    return <ol className={styles.orderedList}>{children}</ol>;
  }
  return <ul className={styles.unorderedList}>{children}</ul>;
}
