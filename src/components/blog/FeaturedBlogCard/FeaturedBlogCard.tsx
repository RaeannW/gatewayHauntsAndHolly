import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { Post, getPostHref } from "@/sanity/lib/queries";
import styles from "./FeaturedBlogCard.module.css";

interface FeaturedBlogCardProps {
  post: Post;
  label?: string;
}

export default function FeaturedBlogCard({
  post,
  label = "Featured Post",
}: FeaturedBlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const href = getPostHref(post);

  return (
    <article className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <Image
            src={post.image.src || "/images/placeholder-1.jpg"}
            alt={post.image.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>{label}</span>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.excerpt}>{post.excerpt}</p>

          <div className={styles.meta}>
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            {post.readTime && (
              <>
                <span className={styles.metaSeparator}>·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>

          <Button as="link" href={href} variant="primary">
            Read Now
          </Button>
        </div>
      </div>
    </article>
  );
}
