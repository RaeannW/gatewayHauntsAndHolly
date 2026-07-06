"use client";

import { useSearchParams } from "next/navigation";
import type { Post } from "@/sanity/lib/queries";
import RecipesTabsView, { isRecipeTabKey } from "./RecipesTabsView";

interface RecipesPageTabsProps {
  recipes: Post[];
}

export default function RecipesPageTabs({ recipes }: RecipesPageTabsProps) {
  const searchParams = useSearchParams();
  const rawTab = searchParams.get("tab");
  const activeTab = isRecipeTabKey(rawTab) ? rawTab : null;

  return <RecipesTabsView recipes={recipes} activeTab={activeTab} />;
}
