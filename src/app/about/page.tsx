import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Garland from "@/components/ui/Garland/Garland";
import SplitSection from "@/components/ui/SplitSection/SplitSection";
import TwoUpSection from "@/components/ui/TwoUpSection/TwoUpSection";
import ConnectBox from "@/components/ui/ConnectBox/ConnectBox";
import GateDivider from "@/components/ui/GateDivider/GateDivider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Gateway Haunts & Holly",
  description:
    "The story behind Gateway Haunts & Holly — a St. Louis guide to Halloween and Christmas, built by a front-end developer who takes the holidays seriously.",
};

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <PageHeader
        title="About"
        tagline="The Story Behind the Guide"
        showDivider
      />

      <Garland src="/images/decor/laceTile.svg" height={60} />

      <SplitSection
        sectionTitle="How It Started"
        imageSrc="/images/backgrounds/pumpkinBackground.jpeg"
        imageAlt="The founder of Gateway Haunts & Holly"
        backgroundSrc="/images/backgrounds/fallPlaidDesign.jpeg"
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

        <h3>A Little About Me</h3>

        <p>
          Placeholder — this is where you write a couple sentences about
          yourself. Who you are, why the holidays matter to you, what makes your
          perspective on St. Louis worth following.
        </p>
        <p>
          Another placeholder paragraph for the about me portion. Replace with
          your own story.
        </p>
      </SplitSection>

      <TwoUpSection
        bordered
        left={{
          imageSrc: "/images/about/placeholder-future.jpg",
          imageAlt: "",
          heading: "Future Plans",
          body: (
            <p>
              This is still very much a work in progress. The goal is to expand
              coverage across the full metro — more neighborhoods, more hidden
              gems, and a deeper dive into what makes each season worth
              celebrating in St. Louis. Boo Boxes are coming, along with curated
              gift guides and a proper events calendar. Lots more to build.
            </p>
          ),
          order: "textFirst",
        }}
        right={{
          imageSrc: "/images/about/placeholder-person.jpg",
          imageAlt: "",
          heading: "Work Together?",
          body: (
            <p>
              By day I&apos;m a front-end developer and designer — I build
              things for the web and care a lot about how they look and feel.
              This site is where those instincts meet a genuine obsession with
              Halloween and Christmas. If you&apos;re working on a design or
              development project and think we might be a good fit, I&apos;d
              love to hear about it.
            </p>
          ),
          order: "imageFirst",
        }}
      />

      <Garland src="/images/decor/laceTile.svg" height={60} />

      <ConnectBox
        imageSrc="/images/decor/tape.png"
        imageAlt=""
        heading="Let's Connect"
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      >
        <p>
          Have a tip on a hidden gem, a pitch, or a partnership idea? Running a
          holiday pop-up or event worth covering? Or just want to talk shop
          about front-end work or a project you&apos;re building? My inbox is
          open — I&apos;d love to hear from you.
        </p>
      </ConnectBox>

      <GateDivider />
    </div>
  );
}
