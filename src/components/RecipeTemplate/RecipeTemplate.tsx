import Image from "next/image";
import Link from "next/link";
import { Post, RECIPE_SUBCATEGORY_LABELS } from "@/lib/sample-data";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import styles from "./RecipeTemplate.module.css";

interface RecipeTemplateProps {
  recipe: Post;
}

export default function RecipeTemplate({ recipe }: RecipeTemplateProps) {
  const subcategoryLabel = recipe.recipeSubcategory
    ? RECIPE_SUBCATEGORY_LABELS[recipe.recipeSubcategory]
    : "Recipe";

  const holidayLabel =
    recipe.holiday === "halloween"
      ? "Halloween"
      : recipe.holiday === "christmas"
        ? "Christmas"
        : null;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...(holidayLabel
      ? [
          {
            label: holidayLabel,
            href: `/${recipe.holiday}`,
          },
        ]
      : []),
    { label: "Recipes", href: "/recipes" },
    { label: recipe.title },
  ];

  // JSON-LD schema for Google rich recipe cards
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.excerpt,
    image: recipe.image.src,
    author: {
      "@type": "Person",
      name: recipe.author,
    },
    datePublished: recipe.publishedAt,
    prepTime: recipe.prepTime ? `PT${recipe.prepTime}M` : undefined,
    cookTime: recipe.cookTime ? `PT${recipe.cookTime}M` : undefined,
    totalTime:
      recipe.prepTime && recipe.cookTime
        ? `PT${recipe.prepTime + recipe.cookTime}M`
        : undefined,
    recipeYield: recipe.servings
      ? `${recipe.servings} ${recipe.servingUnit ?? "servings"}`
      : undefined,
    recipeCategory: subcategoryLabel,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.instructions?.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
  };

  return (
    <article className={styles.article}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />

      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className={styles.layout}>
          <aside className={styles.sidebar} aria-hidden="true"></aside>

          <div className={styles.content}>
            <aside className={styles.sidebar} aria-hidden="true" />

            <span className={styles.category}>{subcategoryLabel}</span>
            <h1 className={styles.title}>{recipe.title}</h1>
            <p className={styles.intro}>{recipe.excerpt}</p>

            <div className={styles.heroImage}>
              <Image
                src={recipe.image.src}
                alt={recipe.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {(recipe.servings || recipe.prepTime || recipe.cookTime) && (
              <div className={styles.meta}>
                {recipe.servings && (
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Servings</span>
                    <span className={styles.metaValue}>
                      {recipe.servings} {recipe.servingUnit ?? ""}
                    </span>
                  </div>
                )}
                {recipe.prepTime && (
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Prep Time</span>
                    <span className={styles.metaValue}>
                      {recipe.prepTime} min
                    </span>
                  </div>
                )}
                {recipe.cookTime && (
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Cook Time</span>
                    <span className={styles.metaValue}>
                      {recipe.cookTime} min
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className={styles.recipeBody}>
              <div className={styles.ingredients}>
                <h2 className={styles.sectionHeading}>Ingredients</h2>
                <ul className={styles.ingredientsList}>
                  {recipe.ingredients?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.instructions}>
                <h2 className={styles.sectionHeading}>Instructions</h2>
                <ol className={styles.instructionsList}>
                  {recipe.instructions?.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {recipe.notes && (
              <div className={styles.notes}>
                <h2 className={styles.sectionHeading}>Notes</h2>
                <p>{recipe.notes}</p>
              </div>
            )}

            <div className={styles.backLink}>
              {holidayLabel ? (
                <Link href={`/${recipe.holiday}#recipes`}>
                  ← Back to {holidayLabel} Recipes
                </Link>
              ) : (
                <Link href="/recipes">← Back to All Recipes</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
