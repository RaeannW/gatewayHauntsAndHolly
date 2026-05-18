import styles from "./ListBlock.module.css";

interface ListBlockProps {
  items: string[];
  ordered: boolean;
}

export default function ListBlock({ items, ordered }: ListBlockProps) {
  if (ordered) {
    return (
      <ol className={styles.orderedList}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }
  return (
    <ul className={styles.unorderedList}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
