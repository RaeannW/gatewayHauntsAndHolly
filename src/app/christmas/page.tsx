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

export default function ChristmasPage() {
  const featured = getFeaturedPosts("christmas")[0];
  const allPosts = getPostsByHoliday("christmas");
  const blogPosts = allPosts.filter((post) => post.postType !== "recipe");

  const categories: Category[] = [
    { topic: "all", label: "All Posts", count: blogPosts.length },
    ...TOPICS_IN_ORDER.map((topic) => ({
      topic,
      label: topic.charAt(0).toUpperCase() + topic.slice(1),
      count: blogPosts.filter((p) => p.topic === topic).length,
    })).filter((cat) => cat.count > 0),
  ];

  const latestRecipes = getLatestRecipes("christmas", 3);
  const recipeCounts = getRecipeSubcategoryCounts("christmas");

  return (
    <>
      <PageTheme theme="christmas" />
      <Hero
        title="Christmas"
        subtitle="Tips and Treats to Celebrate the Most Wonderful Time of the Year"
        description="Pop-up bars, pumpkin patches, costume parties, and the haunted history of the city. Everything you need for a spooky season worth remembering."
        countdownTarget="christmas"
        countdownVariant="compact"
        slides={[
          {
            href: "/christmas/recipes/santa-cookies",
            imageSrc: "/images/christmasPlaceHolder.jpg",
            imageAlt: "Santa cookies",
            category: "Recipe",
            title: "Holiday santa cookies for your next gathering",
          },
        ]}
      />

      <section className={styles.christmasFeaturedSection}>
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
        basePath="/christmas"
        decorImage={{
          src: "/images/decor/cmasNewsletterImg.png",
          alt: "Vintage christmas illustration",
        }}
        garlandImage="/images/decor/laceTile.svg"
        garlandHeight={60}
      />

      <RecipesSection
        heroTitle="Recipes"
        heroSubtitle="Spooky-season sweets, savory bites, and drinks worth pouring into a goblet."
        sectionTitle="Latest Christmas Recipes"
        recipes={latestRecipes}
        counts={recipeCounts}
        tabBasePath="/christmas/recipes"
        garlandImage="/images/decor/laceTileCream.svg"
        garlandHeight={60}
      />
    </>
  );
}
