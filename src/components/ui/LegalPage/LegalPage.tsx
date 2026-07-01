import NotebookPage from "@/components/post/NotebookPage/NotebookPage";
import styles from "./LegalPage.module.css";

interface LegalPageProps {
  title: string;
  tagline?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <div className={styles.page}>
      <NotebookPage>
        <article className={styles.article}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lastUpdated}>Last updated: {lastUpdated}</p>
          {children}
        </article>
      </NotebookPage>
    </div>
  );
}
