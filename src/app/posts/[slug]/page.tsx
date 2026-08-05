import { notFound } from "next/navigation";
import PostTemplate from "@/components/post/PostTemplate/PostTemplate";
import { getPostBySlug, getAllNonRecipeSlugs } from "@/sanity/lib/queries";

export const revalidate = 60;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllNonRecipeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.postType === "recipe") {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Gateway Haunts & Holly`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image.src],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.postType === "recipe") {
    notFound();
  }

  return <PostTemplate post={post} />;
}
