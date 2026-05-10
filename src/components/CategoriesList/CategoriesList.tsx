"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Topic } from "@/lib/sample-data";
import styles from "./CategoriesList.module.css";

export interface Category {
  topic: Topic | "all";
  label: string;
  count: number;
}

interface CategoriesListProps {
  categories: Category[];
  basePath: string;
}

export default function CategoriesList({
  categories,
  basePath,
}: CategoriesListProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.list} aria-label="Categories">
      <h2 className={styles.heading}>Categories</h2>
      <ul>
        {categories.map((cat) => {
          const href =
            cat.topic === "all" ? basePath : `${basePath}/${cat.topic}`;
          const isActive = pathname === href;

          return (
            <li key={cat.topic}>
              <Link
                href={href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                <span className={styles.label}>{cat.label}</span>
                <span className={styles.count}>({cat.count})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
