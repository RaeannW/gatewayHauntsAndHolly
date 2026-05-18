import { Post, RecipeSubcategory } from "@/lib/sample-data";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import RecipeTabs from "@/components/recipe/RecipeTabs/RecipeTabs";
import RecipesHero from "@/components/recipe/RecipesHero/RecipesHero";
import styles from "./RecipesSection.module.css";

interface RecipesSectionProps {
  heroTitle: string;
  heroSubtitle: string;
  heroButtonHref?: string;
  heroButtonLabel?: string;
  sectionTitle: string;
  recipes: Post[];
  counts: Record<RecipeSubcategory, number>;
  tabBasePath: string;
  garlandImage?: string;
  garlandHeight?: number;
}

export default function RecipesSection({
  heroTitle,
  heroSubtitle,
  heroButtonHref = "/recipes",
  heroButtonLabel = "View All Recipes",
  sectionTitle,
  recipes,
  counts,
  tabBasePath,
  garlandImage,
  garlandHeight,
}: RecipesSectionProps) {
  return (
    <>
      <RecipesHero
        title={heroTitle}
        subtitle={heroSubtitle}
        buttonHref={heroButtonHref}
        buttonLabel={heroButtonLabel}
        garlandImage={garlandImage}
        garlandHeight={garlandHeight}
      />

      <RecipeTabs basePath={tabBasePath} counts={counts} />

      <section className={styles.section}>
        <h2 className={styles.title}>{sectionTitle}</h2>
        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <BlogPostCard key={recipe.slug} post={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
