import { notFound } from "next/navigation";
import RecipeTemplate from "@/components/recipe/RecipeTemplate/RecipeTemplate";
import {
  getPostBySlug,
  getAllRecipeSlugs,
  getRecipeSubcategoriesInOrder,
} from "@/sanity/lib/queries";

export const revalidate = 60;

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllRecipeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = await getPostBySlug(slug);

  if (!recipe || recipe.postType !== "recipe") {
    return { title: "Recipe Not Found" };
  }

  return {
    title: `${recipe.title} | Gateway Haunts & Holly`,
    description: recipe.excerpt,
    openGraph: {
      title: recipe.title,
      description: recipe.excerpt,
      images: [recipe.image.src],
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;

  const [recipe, subcategories] = await Promise.all([
    getPostBySlug(slug),
    getRecipeSubcategoriesInOrder(),
  ]);

  if (!recipe || recipe.postType !== "recipe") {
    notFound();
  }

  return <RecipeTemplate recipe={recipe} subcategories={subcategories} />;
}
