import { Post } from "@/lib/sample-data";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import styles from "./BlogFeed.module.css";

interface BlogFeedProps {
  posts: Post[];
  cardsPerRow?: number;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

export default function BlogFeed({ posts, cardsPerRow = 2 }: BlogFeedProps) {
  const rows = chunkArray(posts, cardsPerRow);

  return (
    <div className={styles.feed}>
      {rows.map((rowPosts, i) => (
        <div key={i} className={styles.row}>
          {rowPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ))}
    </div>
  );
}
