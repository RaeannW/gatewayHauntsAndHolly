import Image from "next/image";
import Link from "next/link";
import styles from "./HeroCarousel.module.css";

export interface CarouselSlide {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const slide = slides[0];
  if (!slide) return null;

  return (
    <Link href={slide.href} className={styles.slide}>
      <div className={styles.imageWrap}>
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.caption}>
        <span className={styles.category}>{slide.category}</span>
        <h3 className={styles.title}>{slide.title}</h3>
      </div>
    </Link>
  );
}
