import Image from "next/image";
import Link from "next/link";
import { Post, getPostHref } from "@/lib/sample-data";
import styles from "./BlogPostCard.module.css";

interface BlogPostCardProps {
  post: Post;
}

const POST_TYPE_LABELS: Record<string, string> = {
  article: "Post",
  review: "Review",
  guide: "Guide",
  roundup: "Roundup",
  recipe: "Recipe",
  event: "Event",
};

const RECIPE_SUBCATEGORY_TAGS: Record<string, string> = {
  dessert: "Dessert",
  drink: "Drink",
  appetizer: "Appetizer",
  meal: "Meal",
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const tagLabel =
    post.postType === "recipe" && post.recipeSubcategory
      ? RECIPE_SUBCATEGORY_TAGS[post.recipeSubcategory]
      : (POST_TYPE_LABELS[post.postType] ?? "Post");

  const href = getPostHref(post);

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <span className={styles.tag}>{tagLabel}</span>
          <div className={styles.image}>
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          {post.postType === "review" && post.rating !== undefined && (
            <span className={styles.rating}>★ {post.rating}</span>
          )}
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{post.title}</h3>

          <div className={styles.divider} aria-hidden="true">
            <span className={styles.ornament}>❦</span>
          </div>

          <p className={styles.excerpt}>{post.excerpt}</p>

          <div className={styles.meta}>
            <span>{post.author}</span>
            {post.readTime && (
              <>
                <span className={styles.metaDot} aria-hidden="true" />
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
