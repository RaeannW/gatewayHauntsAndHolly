import HomeSections from "@/components//home/HomeSections/HomeSections";
import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import HomeLatest from "@/components/home/HomeLatest/HomeLatest";
import HomeConnect from "@/components/home/HomeConnect/HomeConnect";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Garland from "@/components/ui/Garland/Garland";
import { getHomepageCarousel, getLatestPosts } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export default async function HomePage() {
  const [carouselSlides, latestPosts] = await Promise.all([
    getHomepageCarousel(),
    getLatestPosts(3),
  ]);

  return (
    <>
      <div className={styles.home}>
        <PageHeader
          title="Welcome"
          tagline="Your Halloween & Christmas Guide"
        />

        <HomeSections />

        <Garland src="/images/decor/laceTile.svg" height={60} />

        <HeroCarousel slides={carouselSlides} />

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.diamondBottom} />
          <span className={styles.lineBottom} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/decor/flourishTwo.svg"
            alt=""
            className={styles.flourishBottom}
          />
          <span className={styles.lineBottom} />
          <span className={styles.diamondBottom} />
        </div>

        <HomeLatest posts={latestPosts} />

        <HomeConnect />
      </div>
    </>
  );
}
