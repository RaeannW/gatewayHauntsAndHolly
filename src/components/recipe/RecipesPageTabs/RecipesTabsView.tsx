"use client";

import { useRouter } from "next/navigation";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import type { Post } from "@/sanity/lib/queries";
import styles from "./RecipesPageTabs.module.css";

export type RecipeTabKey =
  | "desserts"
  | "drinks"
  | "appetizers"
  | "halloween"
  | "christmas";

interface RecipeTabConfig {
  key: RecipeTabKey;
  label: string;
  heading: string;
}

export const RECIPE_TABS: RecipeTabConfig[] = [
  { key: "desserts", label: "Desserts", heading: "Desserts" },
  { key: "drinks", label: "Drinks", heading: "Drinks" },
  { key: "appetizers", label: "Appetizers", heading: "Appetizers" },
  { key: "halloween", label: "Halloween", heading: "Halloween Recipes" },
  { key: "christmas", label: "Christmas", heading: "Christmas Recipes" },
];

export function isRecipeTabKey(value: string | null): value is RecipeTabKey {
  return RECIPE_TABS.some((tab) => tab.key === value);
}

function matchesTab(recipe: Post, tab: RecipeTabKey): boolean {
  switch (tab) {
    case "desserts":
      return recipe.recipeSubcategory === "dessert";
    case "drinks":
      return recipe.recipeSubcategory === "drink";
    case "appetizers":
      return recipe.recipeSubcategory === "appetizer";
    case "halloween":
      return recipe.holiday === "halloween" || recipe.holiday === "both";
    case "christmas":
      return recipe.holiday === "christmas" || recipe.holiday === "both";
  }
}

interface RecipesTabsViewProps {
  recipes: Post[];
  activeTab: RecipeTabKey | null;
}

export default function RecipesTabsView({
  recipes,
  activeTab,
}: RecipesTabsViewProps) {
  const router = useRouter();

  function selectTab(tab: RecipeTabKey) {
    router.push(`/recipes?tab=${tab}`, { scroll: false });
  }

  const visibleRecipes = activeTab
    ? recipes.filter((recipe) => matchesTab(recipe, activeTab))
    : recipes;

  const heading =
    RECIPE_TABS.find((tab) => tab.key === activeTab)?.heading ??
    "Latest Recipes";

  return (
    <>
      <div role="tablist" aria-label="Recipe categories" className={styles.tabs}>
        {RECIPE_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`recipes-tab-${tab.key}`}
              aria-selected={isActive}
              aria-controls="recipes-tabpanel"
              className={`${styles.tab} ${isActive ? styles.active : ""}`}
              onClick={() => selectTab(tab.key)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <section
        id="recipes-tabpanel"
        role="tabpanel"
        aria-labelledby={activeTab ? `recipes-tab-${activeTab}` : undefined}
        className={styles.section}
      >
        <h2 className={styles.title}>{heading}</h2>
        <div className={styles.grid}>
          {visibleRecipes.map((recipe) => (
            <BlogPostCard key={recipe._id} post={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
