import { notFound } from "next/navigation";
import RecipeTemplate from "@/components/RecipeTemplate/RecipeTemplate";
import { getPostBySlug, samplePosts } from "@/lib/sample-data";

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return samplePosts
    .filter((post) => post.postType === "recipe")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getPostBySlug(slug);

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
  const recipe = getPostBySlug(slug);

  if (!recipe || recipe.postType !== "recipe") {
    notFound();
  }

  return <RecipeTemplate recipe={recipe} />;
}
