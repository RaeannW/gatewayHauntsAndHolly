import { Post } from "@/sanity/lib/queries";
import BlogSidebar from "@/components/blog/BlogSidebar/BlogSidebar";
import BlogFeed from "@/components/blog/BlogFeed/BlogFeed";
import Garland from "@/components/ui/Garland/Garland";
import { Category } from "@/components/blog/CategoriesList/CategoriesList";
import styles from "./BlogSection.module.css";

interface BlogSectionProps {
  posts: Post[];
  categories: Category[];
  basePath: string;
  decorImage?: {
    src: string;
    alt: string;
  };
  garlandImage?: string;
  garlandHeight?: number;
}

export default function BlogSection({
  posts,
  categories,
  basePath,
  decorImage,
  garlandImage,
  garlandHeight,
}: BlogSectionProps) {
  return (
    <>
      {garlandImage && <Garland src={garlandImage} height={garlandHeight} />}
      <section className={styles.section}>
        <BlogSidebar
          categories={categories}
          basePath={basePath}
          decorImage={decorImage}
        />
        <div className={styles.feed}>
          <BlogFeed posts={posts} />
        </div>
      </section>
    </>
  );
}
