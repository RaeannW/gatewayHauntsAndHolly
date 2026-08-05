import Image from "next/image";
import Link from "next/link";
import PinterestButton from "@/components/ui/PinterestButton/PinterestButton";
import NotebookPage from "@/components/post/NotebookPage/NotebookPage";
import Notes from "@/components/post/Notes/Notes";
import ShopCard from "@/components/post/ShopCard/ShopCard";
import { SITE_URL } from "@/lib/constants";
import { Post, RecipeSubcategoryInOrder } from "@/sanity/lib/queries";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import styles from "./RecipeTemplate.module.css";

interface RecipeTemplateProps {
  recipe: Post;
  subcategories: RecipeSubcategoryInOrder[];
}

export default function RecipeTemplate({
  recipe,
  subcategories,
}: RecipeTemplateProps) {
  const subcategoryLabel = recipe.recipeSubcategory
    ? (subcategories.find((s) => s.slug === recipe.recipeSubcategory)
        ?.pluralTitle ?? "Recipe")
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
    recipeIngredient: recipe.ingredients?.map((item) => item.text),
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

        <NotebookPage>
          <span className={styles.category}>{subcategoryLabel}</span>
          <h1 className={styles.title}>{recipe.title}</h1>
          <p className={styles.intro}>{recipe.excerpt}</p>

          <div className={styles.heroImage}>
            <Image
              src={recipe.image.src || "/images/placeholder-1.jpg"}
              alt={recipe.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
              priority
            />
            <PinterestButton
              url={`${SITE_URL}/recipes/${recipe.slug}`}
              media={`${SITE_URL}${recipe.image.src}`}
              description={`${recipe.title} — ${recipe.excerpt}`}
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
                  <li key={i}>
                    {item.affiliateUrl ? (
                      <a
                        href={item.affiliateUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className={styles.ingredientLink}
                      >
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </li>
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

          {recipe.tools && recipe.tools.length > 0 && (
            <div className={styles.tools}>
              <h2 className={styles.sectionHeading}>Tools &amp; Supplies</h2>
              <p className={styles.toolsIntro}>
                Optional specialty items and tools related to this recipe.
                {recipe.tools.some((tool) => tool.isAffiliate !== false) && (
                  <>
                    {" "}
                    Items marked <em>Affiliate Link</em> are affiliate links.
                    As an Amazon Associate I earn from qualifying purchases, at
                    no extra cost to you.
                  </>
                )}
              </p>
              <div className={styles.toolsGrid}>
                {recipe.tools.map((tool, i) => (
                  <ShopCard key={i} {...tool} />
                ))}
              </div>
            </div>
          )}

          {recipe.notes && (
            <Notes>
              <p>{recipe.notes}</p>
            </Notes>
          )}

          <div className={styles.backLink}>
            {holidayLabel &&
            (recipe.holiday === "halloween" ||
              recipe.holiday === "christmas") ? (
              <Link href={`/${recipe.holiday}#recipes`}>
                ← Back to {holidayLabel} Recipes
              </Link>
            ) : (
              <Link href="/recipes">← Back to All Recipes</Link>
            )}
          </div>
        </NotebookPage>
      </div>
    </article>
  );
}
