import HomeSections from "@/components//home/HomeSections/HomeSections";
import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import HomeLatest from "@/components/home/HomeLatest/HomeLatest";
import HomeConnect from "@/components/home/HomeConnect/HomeConnect";
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
        <p className={styles.title}>Welcome</p>

        <div className={styles.dividerLine} aria-hidden="true"></div>

        <h1 className={styles.tagline}>
          {" "}
          ✶ Your Halloween & Christmas Guide ✶
        </h1>

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

        <HomeConnect />
      </div>
    </>
  );
}
