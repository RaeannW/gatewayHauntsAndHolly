import HeroDivider from "./HeroDivider";
import HeroCarousel, { CarouselSlide } from "./HeroCarousel";
import Countdown from "@/components/Countdown/Countdown";
import { Holiday } from "@/lib/season";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  slides: CarouselSlide[];
  countdownTarget?: Holiday;
  countdownVariant?: "compact" | "feature";
}

export default function Hero({
  title,
  subtitle,
  description,
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
        <p className={styles.description}>{description}</p>
        <div className={styles.countdownWrap}>
          <Countdown target={countdownTarget} variant={countdownVariant} />
        </div>
      </div>
    </section>
  );
}
