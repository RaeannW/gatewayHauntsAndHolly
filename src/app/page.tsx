import HomeSections from "@/components//home/HomeSections/HomeSections";
import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import styles from "./page.module.css";

export default function HomePage() {
  const carouselSlides = [
    {
      href: "/recipes/witches-finger-cookies",
      imageSrc: "/images/placeholder-1.jpg",
      imageAlt: "Witches finger cookies",
      category: "Featured · Recipe",
      title: "Witches' Finger Cookies for Your Next Gathering",
      excerpt: "A buttery shortbread base with a sliced-almond fingernail.",
    },
    // add more featured slides
  ];

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
