import Image from "next/image";
import CategoriesList, {
  Category,
} from "@/components/blog/CategoriesList/CategoriesList";
import NewsletterSignup from "@/components/ui/NewsletterSignup/NewsletterSignup";
import styles from "./BlogSidebar.module.css";

interface BlogSidebarProps {
  categories: Category[];
  basePath: string;
  decorImage?: {
    src: string;
    alt: string;
  };
}

export default function BlogSidebar({
  categories,
  basePath,
  decorImage,
}: BlogSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div>
        <CategoriesList categories={categories} basePath={basePath} />

        {decorImage && (
          <div className={styles.decorImage}>
            <Image
              src={decorImage.src}
              alt={decorImage.alt}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        )}

        <NewsletterSignup />
      </div>
    </aside>
  );
}
