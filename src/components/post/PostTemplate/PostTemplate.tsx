import Image from "next/image";
import Link from "next/link";
import PinterestButton from "@/components/ui/PinterestButton/PinterestButton";
import NotebookPage from "@/components/post/NotebookPage/NotebookPage";
import PostBody from "@/components/post/PostBody/PostBody";
import { SITE_URL } from "@/lib/constants";
import { Post, POST_TYPE_LABELS } from "@/lib/sample-data";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import styles from "./PostTemplate.module.css";

interface PostTemplateProps {
  post: Post;
}

export default function PostTemplate({ post }: PostTemplateProps) {
  const postTypeLabel = POST_TYPE_LABELS[post.postType];

  const holidayLabel =
    post.holiday === "halloween"
      ? "Halloween"
      : post.holiday === "christmas"
        ? "Christmas"
        : null;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...(holidayLabel ? [{ label: holidayLabel, href: `/${post.holiday}` }] : []),
    { label: post.title },
  ];

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const metaItems = [
    { label: "By", value: post.author },
    { label: "Published", value: formattedDate },
    ...(post.readTime ? [{ label: "Read Time", value: `${post.readTime} min` }] : []),
  ];

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <NotebookPage>
          <span className={styles.category}>{postTypeLabel}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.intro}>{post.excerpt}</p>

          <div className={styles.heroImage}>
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
              priority
            />
            <PinterestButton
              url={`${SITE_URL}/posts/${post.slug}`}
              media={`${SITE_URL}${post.image.src}`}
              description={`${post.title} — ${post.excerpt}`}
            />
          </div>

          <div className={styles.meta}>
            {metaItems.map(({ label, value }) => (
              <div key={label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{label}</span>
                <span className={styles.metaValue}>{value}</span>
              </div>
            ))}
          </div>

          {post.body && post.body.length > 0 && <PostBody blocks={post.body} />}

          <div className={styles.backLink}>
            {holidayLabel ? (
              <Link href={`/${post.holiday}`}>← Back to {holidayLabel}</Link>
            ) : (
              <Link href="/">← Back to Home</Link>
            )}
          </div>
        </NotebookPage>
      </div>
    </article>
  );
}
