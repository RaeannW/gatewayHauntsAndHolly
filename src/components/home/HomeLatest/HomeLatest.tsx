import Link from "next/link";
import { Post } from "@/sanity/lib/queries";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import styles from "./HomeLatest.module.css";

interface HomeLatestProps {
  posts: Post[];
}

export default function HomeLatest({ posts }: HomeLatestProps) {
  if (!posts.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Latest Posts</h2>
      <div className={styles.grid}>
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
      <div className={styles.footer}>
        <Link href="/blog" className={styles.seeAll}>
          See all posts →
        </Link>
      </div>
    </section>
  );
}
