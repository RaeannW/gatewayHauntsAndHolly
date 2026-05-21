"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroCarousel.module.css";

export interface CarouselSlide {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt?: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (slides.length <= 1 || paused || reducedMotion) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length, paused, reducedMotion]);

  if (!slides.length) return null;

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Link
          key={slide.href}
          href={slide.href}
          className={styles.slide}
          aria-hidden={i !== current ? true : undefined}
          tabIndex={i !== current ? -1 : undefined}
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className={styles.image}
            priority={i === 0}
          />
          <div className={styles.scrim} aria-hidden="true" />
          <div className={styles.textBlock}>
            <span className={styles.category}>{slide.category}</span>
            <h3 className={styles.title}>{slide.title}</h3>
            {slide.excerpt && (
              <p className={styles.excerpt}>{slide.excerpt}</p>
            )}
          </div>
        </Link>
      ))}

      {slides.length > 1 && (
        <div className={styles.dots} role="group" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`${styles.dot}${i === current ? ` ${styles.dotActive}` : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
