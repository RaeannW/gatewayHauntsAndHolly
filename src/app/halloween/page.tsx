import Hero from "@/components/Hero/Hero";
import FeaturedBlogCard from "@/components/FeaturedBlogCard/FeaturedBlogCard";
import { getFeaturedPosts } from "@/lib/sample-data";
import styles from "./page.module.css";

export default function HalloweenPage() {
  const featured = getFeaturedPosts()[0];

  return (
    <>
      <Hero
        title="Halloween & Fall"
        subtitle="Tips and Treats to Celebrate the Spookiest Time of the Year"
        description="Pop-up bars, pumpkin patches, costume parties, and the haunted history of the city. Everything you need for a spooky season worth remembering."
        countdownTarget="halloween"
        countdownVariant="compact"
        slides={[
          {
            href: "/halloween/recipes/witches-fingers",
            imageSrc: "/images/placeholder-1.jpg",
            imageAlt: "Witches finger cookies",
            category: "Recipe",
            title: "Witches' finger cookies for your next gathering",
          },
        ]}
      />
      <section className={styles.halloweenFeaturedSection}>
        {featured && <FeaturedBlogCard post={featured} />}
      </section>
    </>
  );
}
