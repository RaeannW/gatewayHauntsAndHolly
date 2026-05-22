import HomeSections from "@/components//home/HomeSections/HomeSections";
import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import HomeLatest from "@/components/home/HomeLatest/HomeLatest";
import { getHomepageCarousel, getLatestPosts } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export default async function HomePage() {
  const [carouselSlides, latestPosts] = await Promise.all([
    getHomepageCarousel(),
    getLatestPosts(6),
  ]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.topSpace} />

        <HomeSections />

        <div className={styles.divider} aria-hidden="true"></div>

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
      </div>
    </>
  );
}
