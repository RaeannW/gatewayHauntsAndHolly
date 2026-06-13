import Link from "next/link";
import Image from "next/image";
import styles from "./HomeSections.module.css";

interface HomeSection {
  href: string;
  iconSrc: string;
  iconAlt: string;
  kicker: string;
  title: string;
  description: string;
}

const SECTIONS: HomeSection[] = [
  {
    href: "/halloween",
    iconSrc: "/images/decor/witchBroom.png",
    iconAlt: "Flying Witch",
    kicker: "The Spooky Season",
    title: "Halloween",
    description:
      "Pop-up bars, pumpkin patches, haunted history and more. Everything for a spooky season worth remembering.",
  },
  {
    href: "/christmas",
    iconSrc: "/images/decor/wreath.png",
    iconAlt: "Christmas Wreath",
    kicker: "The Merry Season",
    title: "Christmas",
    description:
      "Light displays, holiday markets, cookie swaps, and family traditions. Your Christmas spirit guide.",
  },
  {
    href: "/stl",
    iconSrc: "/images/decor/arch.png",
    iconAlt: "St. Louis Arch",
    kicker: "The Gateway City",
    title: "St. Louis",
    description:
      "Local events, neighborhood guides, and the seasonal happenings. Check out the latest in the Lou.",
  },
];

export default function HomeSections() {
  return (
    <section className={styles.sections} aria-label="Explore by category">
      {SECTIONS.map((section) => (
        <Link key={section.href} href={section.href} className={styles.section}>
          <div className={styles.iconWrap}>
            <Image
              src={section.iconSrc}
              alt={section.iconAlt}
              width={80}
              height={80}
              className={styles.icon}
            />
          </div>
          <span className={styles.kicker}>{section.kicker}</span>
          <div className="ribbon">
            <h2 className={styles.title}>{section.title}</h2>
          </div>
          <p className={styles.description}>{section.description}</p>
        </Link>
      ))}
    </section>
  );
}
