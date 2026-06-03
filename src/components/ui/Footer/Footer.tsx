import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const NAV_COLUMNS = [
  {
    heading: "Holidays",
    links: [
      { label: "Halloween", href: "/halloween" },
      { label: "Christmas", href: "/christmas" },
    ],
  },
  {
    heading: "St. Louis",
    links: [
      { label: "St. Louis", href: "/stl" },
      { label: "Events Calendar", href: "/stl/events", comingSoon: true },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/gatewayhauntsandholly",
    icon: "/images/social/instagram.svg",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/gatewayhauntsandholly",
    icon: "/images/social/pinterest.svg",
  },
  {
    label: "Threads",
    href: "https://threads.net/@gatewayhauntsandholly",
    icon: "/images/social/threads.svg",
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclosure", href: "/disclosure" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Gateway Haunts and Holly home"
          >
            <Image
              src="/images/logos/gatewayhhLogo.svg"
              alt="Gateway Haunts and Holly"
              width={180}
              height={72}
            />
          </Link>

          <div className={styles.socialColumn}>
            <h3 className={styles.navHeading}>Follow Us</h3>
            <ul className={styles.socials}>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={`Gateway Haunts & Holly on ${social.label}`}
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.navColumns} aria-label="Footer navigation">
            {NAV_COLUMNS.map((column) => (
              <div key={column.heading} className={styles.navColumn}>
                <h3 className={styles.navHeading}>{column.heading}</h3>
                <ul className={styles.navList}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.navLink}>
                        {link.label}
                        {link.comingSoon && (
                          <span className={styles.comingSoon}> (soon)</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {`© ${year} Gateway Haunts & Holly · Site design & development by Raeann
            Hoelker`}
          </p>
          <p className={styles.disclosure}>
            This blog may contain affiliate links. Specific posts with affiliate
            relationships include their own disclosures.
          </p>
          <ul className={styles.legalLinks}>
            {LEGAL_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
                {i < LEGAL_LINKS.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
