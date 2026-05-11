"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RECIPE_SUBCATEGORIES_IN_ORDER,
  RECIPE_SUBCATEGORY_LABELS,
  RecipeSubcategory,
} from "@/lib/sample-data";
import styles from "./RecipeTabs.module.css";

interface RecipeTabsProps {
  basePath: string;
  counts: Record<RecipeSubcategory, number>;
}

export default function RecipeTabs({ basePath, counts }: RecipeTabsProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.tabs} aria-label="Recipe categories">
      {RECIPE_SUBCATEGORIES_IN_ORDER.map((sub) => {
        const href = `${basePath}/${sub}`;
        const isActive = pathname === href;
        return (
          <Link
            key={sub}
            href={href}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
          >
            {RECIPE_SUBCATEGORY_LABELS[sub]} ({counts[sub]})
          </Link>
        );
      })}
    </nav>
  );
}
