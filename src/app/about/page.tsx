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
        imageSrc="/images/people/rae.png"
        imageAlt="The founder of Gateway Haunts & Holly"
        backgroundSrc="/images/backgrounds/victorianPatternTan.jpeg"
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
          imageSrc: "/images/decor/readingLeft.png",
          imageAlt: "man reading book",
          heading: "Future Plans",
          body: (
            <p>
              {`This website is a work in progress. Some to-do list items that I think will make fun additions are: a St. Louis area events calendar, site wide search feature, print-friendly recipe previews, and CSS animations. CSS is my ₊˚⊹♡  pASsioN ₊˚⊹♡. I’d love to add a secret dev corner where I post about what I’m working on and share code snippets with other people who are into that sorta stuff. `}
            </p>
          ),
          order: "textFirst",
        }}
        right={{
          imageSrc: "/images/decor/readingRight.png",
          imageAlt: "woman reading book",
          heading: "Work Together?",
          body: (
            <>
              <p>
                {`If you’ve come across my site and had the thought “this is neat”, maybe we should work together ¯\_(ツ)_/¯. Front-end development and design are my fav. Send me a message and we can see if it’s a good fit.`}
              </p>
              <p>
                {`Interested in contributing to the site? I’d love to hear from you, especially if you love writing about spooky legends and sharing the history behind our favorite holidays.`}
              </p>
            </>
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
          {`Have a tip on a hidden gem, a pitch, or a partnership idea? Running a
          holiday pop-up or event worth covering? My inbox is
          open! I'd love to hear from you `}
          .
        </p>
      </ConnectBox>

      <GateDivider />
    </div>
  );
}
