import { Suspense } from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import RecipesPageTabs from "@/components/recipe/RecipesPageTabs/RecipesPageTabs";
import RecipesTabsView from "@/components/recipe/RecipesPageTabs/RecipesTabsView";
import { getPostsByType } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Recipes | Gateway Haunts & Holly",
  description:
    "Seasonal eats from the desk — desserts, drinks, and appetizers for Halloween and Christmas.",
};

export default async function RecipesPage() {
  const recipes = await getPostsByType("recipe");

  return (
    <>
      <div className={styles.header}>
        <PageHeader
          title="Recipes"
          tagline="Seasonal eats from the desk"
          showDivider
        />
      </div>

      <Suspense
        fallback={<RecipesTabsView recipes={recipes} activeTab={null} />}
      >
        <RecipesPageTabs recipes={recipes} />
      </Suspense>
    </>
  );
}
