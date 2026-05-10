import Hero from "@/components/Hero/Hero";
import FeaturedBlogCard from "@/components/FeaturedBlogCard/FeaturedBlogCard";
import BlogSection from "@/components/BlogSection/BlogSection";
import { Category } from "@/components/CategoriesList/CategoriesList";
import {
  getFeaturedPosts,
  getPostsByHoliday,
  TOPICS_IN_ORDER,
} from "@/lib/sample-data";
import styles from "./page.module.css";

export default function HalloweenPage() {
  const featured = getFeaturedPosts("halloween")[0];
  const allPosts = getPostsByHoliday("halloween");
  const blogPosts = allPosts.filter((post) => post.postType !== "recipe");

  const categories: Category[] = [
    { topic: "all", label: "All Posts", count: blogPosts.length },
    ...TOPICS_IN_ORDER.map((topic) => ({
      topic,
      label: topic.charAt(0).toUpperCase() + topic.slice(1),
      count: blogPosts.filter((p) => p.topic === topic).length,
    })).filter((cat) => cat.count > 0),
  ];

  return (
    <>
      <Hero
        title="Halloween"
        subtitle="Tips and Treats to Celebrate the Spookiest Time of the Year"
        description="Pop-up bars, pumpkin patches, costume parties, and the haunted history of the city. Everything you need for a spooky season worth remembering."
        countdownTarget="halloween"
        countdownVariant="compact"
        slides={[
          {
            href: "/halloween/recipes/witches-fingers",
            imageSrc: "/images/placeholder-1.jpg",
            imageAlt: "Witches finger cookies",
            category: "Recipe",
            title: "Witches' finger cookies for your next gathering",
          },
        ]}
      />

      <section className={styles.halloweenFeaturedSection}>
        {featured && <FeaturedBlogCard post={featured} />}
      </section>

      <BlogSection
        posts={blogPosts}
        categories={categories}
        basePath="/halloween"
        decorImage={{
          src: "/images/decor/halloweenNewsletterImg.png",
          alt: "Vintage Halloween illustration",
        }}
        garlandImage="/images/decor/laceTile.svg"
        garlandHeight={60}
      />
    </>
  );
}
