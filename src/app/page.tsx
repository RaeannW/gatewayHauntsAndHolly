import HomeSections from "@/components//home/HomeSections/HomeSections";
import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import { getHomepageCarousel } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export default async function HomePage() {
  const carouselSlides = await getHomepageCarousel();

  return (
    <>
      <div className={styles.home}>
        <div className={styles.topSpace} />

        <HomeSections />

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.diamond} />
          <span className={styles.line} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/nav/flourish.svg"
            alt=""
            className={styles.flourish}
          />
          <span className={styles.line} />
          <span className={styles.diamond} />
        </div>

        <HeroCarousel slides={carouselSlides} />
      </div>
    </>
  );
}
