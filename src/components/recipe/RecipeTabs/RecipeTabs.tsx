"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type {
  RecipeSubcategory,
  RecipeSubcategoryInOrder,
} from "@/sanity/lib/queries";
import styles from "./RecipeTabs.module.css";

interface RecipeTabsProps {
  basePath: string;
  counts: Record<RecipeSubcategory, number>;
  subcategories: RecipeSubcategoryInOrder[];
}

export default function RecipeTabs({
  basePath,
  counts,
  subcategories,
}: RecipeTabsProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.tabs} aria-label="Recipe categories">
      {subcategories.map((sub) => {
        const href = `${basePath}/${sub.slug}`;
        const isActive = pathname === href;
        return (
          <Link
            key={sub.slug}
            href={href}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
          >
            {sub.pluralTitle} ({counts[sub.slug]})
          </Link>
        );
      })}
    </nav>
  );
}
