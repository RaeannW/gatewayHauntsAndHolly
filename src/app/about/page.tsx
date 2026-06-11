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
    "The story behind Gateway Haunts & Holly. A St. Louis guide to Halloween and Christmas, built by a front-end developer who takes the holidays seriously.",
};

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <PageHeader
        title="About"
        tagline="The Story Behind the Site"
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
          {`Gateway Haunts & Holly was first created as a portfolio piece to help me with my job search. I thought creating a blog from scratch would be a fun way to sharpen my development skills and showcase what I’ve been learning to recruiters. As a holiday lover, I decided to design and develop a project around Halloween and Christmas to help keep the momentum going, instead of bouncing from one idea to the next. Becoming a new mom also changed how I thought about my free time. In the evenings, I actually looked forward to building out a new page or component. It never felt like a chore.`}
        </p>
        <p>
          {`When I’m not staring at a computer, I love crafting, baking, decorating, and finding ways to be creative. The holidays are when I feel most inspired to do all of it. The further along this blog got, the more it started to feel like something bigger than a portfolio piece. My goal was to push myself by learning more about web development, but also to build a website that just feels fun.   I’m nostalgic for the old days, when "getting on the internet" was an activity in itself (I’m probably showing my age here, and I’ve accepted the fact that I’m getting old). I hope that you stop by here whenever you want to feel inspired, learn something new, or are just feeling bored.`}
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
