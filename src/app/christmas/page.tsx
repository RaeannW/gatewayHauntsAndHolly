import PageTheme from "@/components/ui/PageTheme/PageTheme";
import Hero from "@/components/ui/Hero/Hero";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard/FeaturedBlogCard";
import Garland from "@/components/ui/Garland/Garland";
import BlogSection from "@/components/blog/BlogSection/BlogSection";
import RecipesSection from "@/components/recipe/RecipesSection/RecipesSection";
import { Category } from "@/components/blog/CategoriesList/CategoriesList";
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
        subtitle="The Season of Lights, Traditions, and St. Louis Magic"
        descriptionParagraphs={[
          "Light displays, holiday markets, cookie swaps, and family traditions. Your guide to making merry across the metro. Light displays, holiday markets, cookie swaps, and family traditions. Your guide to making merry across the metro.",
          "Whether you're chasing the perfect tree or planning a quiet evening in, we've gathered the season's best for every kind of celebration. Whether you're chasing the perfect tree or planning a quiet evening in, we've gathered the season's best for every kind of celebration.",
        ]}
        countdownImage={{
          src: "/images/decor/alarm.png",
          alt: "Christmas ornament",
          width: 70,
          height: 70,
        }}
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
