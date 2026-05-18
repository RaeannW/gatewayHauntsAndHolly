import { notFound } from "next/navigation";
import PostTemplate from "@/components/PostTemplate/PostTemplate";
import { getPostBySlug, samplePosts } from "@/lib/sample-data";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return samplePosts
    .filter((post) => post.postType !== "recipe")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
  const post = getPostBySlug(slug);

  if (!post || post.postType === "recipe") {
    notFound();
  }

  return <PostTemplate post={post} />;
}
