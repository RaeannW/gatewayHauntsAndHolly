import styles from "./NotebookPage.module.css";

interface NotebookPageProps {
  children: React.ReactNode;
}

export default function NotebookPage({ children }: NotebookPageProps) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
