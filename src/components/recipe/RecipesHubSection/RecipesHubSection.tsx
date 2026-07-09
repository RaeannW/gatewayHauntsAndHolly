"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import EmptyState from "@/components/ui/EmptyState/EmptyState";
import BlogPostCard from "@/components/blog/BlogPostCard/BlogPostCard";
import RecipesHero from "@/components/recipe/RecipesHero/RecipesHero";
import type { Post, RecipeSubcategory } from "@/sanity/lib/queries";
import styles from "./RecipesHubSection.module.css";

type Holiday = "halloween" | "christmas";
type HubTabKey = "latest" | "desserts" | "drinks" | "appetizers";

interface HubTabConfig {
  key: HubTabKey;
  label: string;
  subcategory?: RecipeSubcategory;
}

const HUB_TABS: HubTabConfig[] = [
  { key: "latest", label: "Latest" },
  { key: "desserts", label: "Desserts", subcategory: "dessert" },
  { key: "drinks", label: "Drinks", subcategory: "drink" },
  { key: "appetizers", label: "Appetizers", subcategory: "appetizer" },
];

const RECIPES_MAX = 3;

const HOLIDAY_LABELS: Record<Holiday, string> = {
  halloween: "Halloween",
  christmas: "Christmas",
};

interface RecipesHubSectionProps {
  holiday: Holiday;
  recipes: Post[];
  heroTitle: string;
  heroSubtitle: string;
  heroButtonHref?: string;
  heroButtonLabel?: string;
  garlandImage?: string;
  garlandHeight?: number;
}

export default function RecipesHubSection({
  holiday,
  recipes,
  heroTitle,
  heroSubtitle,
  heroButtonHref,
  heroButtonLabel,
  garlandImage,
  garlandHeight,
}: RecipesHubSectionProps) {
  const [activeTab, setActiveTab] = useState<HubTabKey>("latest");

  const holidayLabel = HOLIDAY_LABELS[holiday];
  const tab = HUB_TABS.find((t) => t.key === activeTab)!;

  const visibleRecipes = (
    tab.subcategory
      ? recipes.filter((recipe) => recipe.recipeSubcategory === tab.subcategory)
      : recipes
  ).slice(0, RECIPES_MAX);

  const heading =
    tab.key === "latest" ? `Latest ${holidayLabel} Recipes` : tab.label;

  const ctaLabel =
    tab.key === "latest" ? `See all ${holidayLabel} Recipes` : `See all ${tab.label}`;
  const ctaHref =
    tab.key === "latest" ? `/recipes?tab=${holiday}` : `/recipes?tab=${tab.key}`;

  const emptyBodyTarget = tab.key === "latest" ? `${holidayLabel} recipes` : tab.label.toLowerCase();
  const emptyBody = `New recipes are added throughout the season — check back soon, or explore all our ${emptyBodyTarget} for other seasons.`;

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

      <div role="tablist" aria-label="Recipe categories" className={styles.tabs}>
        {HUB_TABS.map((t) => {
          const isActive = t.key === activeTab;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              id={`${holiday}-recipes-tab-${t.key}`}
              aria-selected={isActive}
              aria-controls={`${holiday}-recipes-tabpanel`}
              className={`${styles.tab} ${isActive ? styles.active : ""}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <section
        id={`${holiday}-recipes-tabpanel`}
        role="tabpanel"
        aria-labelledby={`${holiday}-recipes-tab-${activeTab}`}
        className={styles.section}
      >
        <h2 className={styles.title}>{heading}</h2>

        {visibleRecipes.length > 0 ? (
          <>
            <div className={styles.grid}>
              {visibleRecipes.map((recipe) => (
                <BlogPostCard key={recipe._id} post={recipe} />
              ))}
            </div>
            <div className={styles.cta}>
              <Button as="link" href={ctaHref} variant="secondary" size="md">
                {ctaLabel}
              </Button>
            </div>
          </>
        ) : (
          <EmptyState
            heading="Nothing here yet"
            body={emptyBody}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        )}
      </section>
    </>
  );
}
