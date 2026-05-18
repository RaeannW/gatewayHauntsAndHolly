import Image from "next/image";
import HeroDivider from "./HeroDivider";
import HeroCarousel, { CarouselSlide } from "./HeroCarousel";
import Countdown from "@/components/ui/Countdown/Countdown";
import { Holiday } from "@/lib/season";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  descriptionParagraphs: [string, string];
  countdownImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  slides: CarouselSlide[];
  countdownTarget?: Holiday;
  countdownVariant?: "compact" | "feature";
}

export default function Hero({
  title,
  subtitle,
  descriptionParagraphs,
  countdownImage,
  slides,
  countdownTarget,
  countdownVariant = "compact",
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.subtitleBlock}>
        <HeroDivider variant="thin" />
        <p className={styles.subtitle}>{subtitle}</p>
        <HeroDivider variant="thin" />
      </div>

      <HeroCarousel slides={slides} />

      <HeroDivider variant="double" />

      <div className={styles.bottom}>
        <div className={styles.column}>
          <p className={styles.paragraph}>{descriptionParagraphs[0]}</p>
        </div>

        <div className={styles.column}>
          <p className={styles.paragraph}>{descriptionParagraphs[1]}</p>
        </div>

        <div className={styles.countdownColumn}>
          {countdownImage && (
            <Image
              src={countdownImage.src}
              alt={countdownImage.alt}
              width={countdownImage.width}
              height={countdownImage.height}
              className={styles.countdownImage}
            />
          )}
          <Countdown target={countdownTarget} variant={countdownVariant} />
        </div>
      </div>
    </section>
  );
}
