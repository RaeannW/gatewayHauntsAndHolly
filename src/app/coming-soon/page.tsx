import type { Metadata } from "next";
import Image from "next/image";
import NewsletterSignup from "@/components/ui/NewsletterSignup/NewsletterSignup";
import styles from "./page.module.css";
import GateDivider from "@/components/ui/GateDivider/GateDivider";

export const metadata: Metadata = {
  title: "Coming Soon | Gateway Haunts & Holly",
  description:
    "St. Louis's guide to Halloween haunts and Christmas magic — launching 2026.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.comingSoon}>Coming Soon</h1>
          <div className={styles.ornament} aria-hidden="true">
            <span className={styles.ornamentLine} />
            <span className={styles.ornamentDot} />
            <span className={styles.ornamentDiamond} />
            <span className={styles.ornamentDot} />
            <span className={styles.ornamentLine} />
          </div>
          <h3 className={styles.brand}>Gateway Haunts & Holly</h3>
          <div className={styles.ornament} aria-hidden="true">
            <span className={styles.ornamentLine} />
            <span className={styles.ornamentDot} />
            <span className={styles.ornamentDiamond} />
            <span className={styles.ornamentDot} />
            <span className={styles.ornamentLine} />
          </div>
          <p className={styles.tagline}>
            {`Gateway Haunts & Holly is a website dedicated to all things
            Halloween and Christmas. Follow along as I post holiday recipes,
            craft ideas, legends, and more. I'll also be sharing holiday events
            and traditions specific to the St. Louis Metro area. See you August
            2026.`}
          </p>
          <div className={styles.signupWrapper}>
            <Image
              src="/images/decor/tape.png"
              alt=""
              width={150}
              height={40}
              className={styles.tape}
              aria-hidden="true"
            />
            <NewsletterSignup showStlCheckbox />
          </div>
        </div>
      </div>
      <GateDivider />
    </>
  );
}
