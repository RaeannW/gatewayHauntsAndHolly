import HomeSections from "@/components//home/HomeSections/HomeSections";
import HeroCarousel from "@/components/ui/Hero/HeroCarousel";
import HomeLatest from "@/components/home/HomeLatest/HomeLatest";
import HomeConnect from "@/components/home/HomeConnect/HomeConnect";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Garland from "@/components/ui/Garland/Garland";
import GateDivider from "@/components/ui/GateDivider/GateDivider";
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
        <PageHeader title="Welcome" tagline="Halloween & Christmas Guide" />

        <HomeSections />

        <HeroCarousel slides={carouselSlides} />
        <Garland src="/images/decor/laceTile.svg" height={60} />

        <HomeLatest posts={latestPosts} />

        <HomeConnect />

        <GateDivider />
      </div>
    </>
  );
}
