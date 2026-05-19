import { getFeaturedPosts } from "@/sanity/lib/queries";

export default async function HomePage() {
  const featured = await getFeaturedPosts();
  return (
    <div>
      <main>Homepage</main>
    </div>
  );
}
