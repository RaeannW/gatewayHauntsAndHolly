import PageTheme from "@/components/ui/PageTheme/PageTheme";
import Hero from "@/components/ui/Hero/Hero";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard/FeaturedBlogCard";
import Garland from "@/components/ui/Garland/Garland";
import BlogSection from "@/components/blog/BlogSection/BlogSection";
import RecipesHubSection from "@/components/recipe/RecipesHubSection/RecipesHubSection";
import CrossHubTeaser from "@/components/ui/CrossHubTeaser/CrossHubTeaser";
import { Category } from "@/components/blog/CategoriesList/CategoriesList";
import {
  getFeaturedPosts,
  getPostsByHoliday,
  getRecipesByHoliday,
  getTopicsInOrder,
  getPostHref,
} from "@/sanity/lib/queries";
import styles from "./page.module.css";

export default async function ChristmasPage() {
  const [featuredList, allPosts, recipes, topics] = await Promise.all([
    getFeaturedPosts("christmas"),
    getPostsByHoliday("christmas"),
    getRecipesByHoliday("christmas"),
    getTopicsInOrder(),
  ]);

  const featured = featuredList[0];
  const blogPosts = allPosts.filter((post) => post.postType !== "recipe");

  const slides = featuredList
    .filter((p) => Boolean(p.image?.src))
    .slice(0, 6)
    .map((p) => ({
      href: getPostHref(p),
      imageSrc: p.image.src,
      imageAlt: p.image.alt,
      category: `Christmas · ${p.postType.charAt(0).toUpperCase()}${p.postType.slice(1)}`,
      title: p.title,
      excerpt: p.excerpt,
    }));

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
        slides={slides}
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

      <RecipesHubSection
        holiday="christmas"
        recipes={recipes}
        heroTitle="Recipes"
        heroSubtitle="Seasonal sweets, savory bites, and drinks worth pouring into a goblet."
        garlandImage="/images/decor/laceTileCream.svg"
        garlandHeight={60}
      />

      <CrossHubTeaser
        backgroundColor="var(--h-color-dark-orange)"
        accentColor="var(--h-color-dark-orange)"
        illustrationSrc="/images/decor/pumpkinIllustration.svg"
        heading="When the Twinkle Lights Come Down…"
        body="The first leaves of fall mean the haunts are back. Here's where we start scouting the season's spookiest spots."
        buttonLabel="Explore Halloween"
        buttonHref="/halloween"
      />
    </>
  );
}
