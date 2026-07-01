import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  tagline?: string;
  ornament?: string;
  taglineAs?: "h1" | "p";
  showDivider?: boolean;
}

export default function PageHeader({
  title,
  tagline,
  ornament = "✶",
  taglineAs: Tag = "h1",
  showDivider = false,
}: PageHeaderProps) {
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.dividerLine} aria-hidden="true"></div>
      {tagline && (
        <Tag className={styles.tagline}>
          {ornament} {tagline} {ornament}
        </Tag>
      )}
      {showDivider && <div className={styles.dividerLine} aria-hidden="true"></div>}
    </>
  );
}
