import PageTheme from "@/components/PageTheme/PageTheme";
import Hero from "@/components/Hero/Hero";
import FeaturedBlogCard from "@/components/FeaturedBlogCard/FeaturedBlogCard";
import Garland from "@/components/Garland/Garland";
import BlogSection from "@/components/BlogSection/BlogSection";
import RecipesSection from "@/components/RecipesSection/RecipesSection";
import { Category } from "@/components/CategoriesList/CategoriesList";
import {
  getFeaturedPosts,
  getPostsByHoliday,
  getLatestRecipes,
  getRecipeSubcategoryCounts,
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

  const latestRecipes = getLatestRecipes("halloween", 3);
  const recipeCounts = getRecipeSubcategoryCounts("halloween");

  return (
    <>
      <PageTheme theme="halloween" />
      <Hero
        title="Halloween"
        subtitle="Tips and Treats to Celebrate the Spookiest Time of the Year"
        descriptionParagraphs={[
          "Pop-up bars, pumpkin patches, costume parties, and the haunted history of the city. Everything you need for a spooky season worth remembering. Pop-up bars, pumpkin patches, costume parties, and the haunted history of the city. Everything you need for a spooky season worth remembering.",
          "From family-friendly hayrides to adults-only haunts, we cover the corners of the metro where Halloween comes alive each fall. From family-friendly hayrides to adults-only haunts, we cover the corners of the metro where Halloween comes alive each fall.",
        ]}
        countdownImage={{
          src: "/images/decor/alarm.png",
          alt: "Halloween pumpkin",
          width: 70,
          height: 70,
        }}
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
        {featured && (
          <>
            <Garland src="/images/decor/laceTile.svg" height={60} />
            <FeaturedBlogCard post={featured} />
          </>
        )}
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

      <RecipesSection
        heroTitle="Recipes"
        heroSubtitle="Spooky-season sweets, savory bites, and drinks worth pouring into a goblet."
        sectionTitle="Latest Halloween Recipes"
        recipes={latestRecipes}
        counts={recipeCounts}
        tabBasePath="/halloween/recipes"
        garlandImage="/images/decor/laceTileCream.svg"
        garlandHeight={60}
      />
    </>
  );
}
