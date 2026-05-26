import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import SplitSection from "@/components/ui/SplitSection/SplitSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Gateway Haunts & Holly",
  description:
    "Meet the person behind Gateway Haunts & Holly — your St. Louis guide to the best of Halloween and Christmas.",
};

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <PageHeader title="About" tagline="The Story Behind the Guide" showDivider />

      <SplitSection
        sectionTitle="Why I Started"
        imageSrc="/images/backgrounds/pumpkinBackground.jpeg"
        imageAlt="The founder of Gateway Haunts & Holly"
        backgroundSrc="/images/backgrounds/orangePlaid.jpeg"
      >
        <p>
          Gateway Haunts &amp; Holly started as a personal list — a running note
          of every pumpkin patch, pop-up bar, light display, and holiday market
          I didn&apos;t want to miss. St. Louis does the seasons well, and I
          kept finding that the best stuff was buried in Facebook groups or word
          of mouth.
        </p>
        <p>
          So I built this. A place to collect everything worth doing between
          October and January, written for people who take their holidays as
          seriously as I do.
        </p>
        <p>
          Whether you&apos;re hunting for the scariest haunted house in the
          metro or the coziest Christmas market, this is your guide. Replace
          this paragraph with your own story.
        </p>
      </SplitSection>
    </div>
  );
}
