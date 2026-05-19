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
  getTopicsInOrder,
  getRecipeSubcategoriesInOrder,
} from "@/sanity/lib/queries";
import styles from "./page.module.css";

export default async function HalloweenPage() {
  const [
    featuredList,
    allPosts,
    latestRecipes,
    recipeCounts,
    topics,
    subcategories,
  ] = await Promise.all([
    getFeaturedPosts("halloween"),
    getPostsByHoliday("halloween"),
    getLatestRecipes("halloween", 3),
    getRecipeSubcategoryCounts("halloween"),
    getTopicsInOrder(),
    getRecipeSubcategoriesInOrder(),
  ]);

  const featured = featuredList[0];
  const blogPosts = allPosts.filter((post) => post.postType !== "recipe");

  const categories: Category[] = [
    { topic: "all", label: "All Posts", count: blogPosts.length },
    ...topics
      .map((topic) => ({
        topic: topic.slug,
        label: topic.title,
        count: blogPosts.filter((p) => p.topic === topic.slug).length,
      }))
      .filter((cat) => cat.count > 0),
  ];

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
        subcategories={subcategories}
        tabBasePath="/halloween/recipes"
        garlandImage="/images/decor/laceTileCream.svg"
        garlandHeight={60}
      />
    </>
  );
}
