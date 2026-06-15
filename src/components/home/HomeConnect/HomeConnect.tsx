import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import NewsletterSignup from "@/components/ui/NewsletterSignup/NewsletterSignup";
import styles from "./HomeConnect.module.css";

export default function HomeConnect() {
  return (
    <section className={styles.connect} aria-label="Connect with the guide">
      <div className={styles.column}>
        <div className={styles.block}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/decor/girlWriting.png"
              alt="About the Site"
              width={100}
              height={100}
              className={styles.icon}
            />
          </div>
          <div className="ribbon">
            <h3 className={styles.blockTitle}>About the Site</h3>
          </div>
          <p className={styles.blurb}>
            {`Two seasons, endless things to make, bake, decorate, and diy. Discover hidden patches, local makers, and recipes worth repeating.`}
          </p>
          <div className={styles.ctaWrap}>
            <Button as="link" href="/about" variant="outlined" size="sm">
              Read More
            </Button>
          </div>
        </div>

        <hr className={styles.blockDivider} />

        <div className={styles.block}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/decor/writing.png"
              alt="Submit a tip"
              width={100}
              height={100}
              className={styles.icon}
            />
          </div>
          <div className="ribbon">
            <h3 className={styles.blockTitle}>Have a Tip?</h3>
          </div>
          <p className={styles.blurb}>
            {`Know a hidden pumpkin patch, a pop-up market, or a neighborhood tradition worth covering? Send it over. I'm always looking for new ideas!`}
          </p>
          <div className={styles.ctaWrap}>
            <Button as="link" href="/contact" variant="outlined" size="sm">
              Submit an Idea
            </Button>
          </div>
        </div>
      </div>

      <div className={`${styles.column} ${styles.centerCol}`}>
        <div className={styles.centerInner}>
          <h2 className={styles.dispatchTitle}>The Dispatch</h2>
          <p className={styles.centerBlurb}>
            {`Seasonal picks, hidden gems, local events, and more.`}
          </p>
          <NewsletterSignup variant="dark" />
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.block}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/decor/pumpkin.png"
              alt="Boo Boxes"
              width={100}
              height={100}
              className={styles.icon}
            />
          </div>
          <div className="ribbon">
            <h3 className={styles.blockTitle}>Boo Boxes</h3>
          </div>
          <p className={styles.blurb}>
            {`A curated surprise box packed with local goods, seasonal treats, and
            St. Louis-made finds. Limited runs, shipped straight to your door.`}
          </p>
          <div className={styles.ctaWrap}>
            {/* TODO: wire to a real waitlist — /contact is a placeholder for now */}
            <Button as="link" href="/contact" variant="outlined" size="sm">
              Join the Waitlist
            </Button>
          </div>
        </div>

        <hr className={styles.blockDivider} />

        <div className={styles.block}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/decor/partner.png"
              alt="Partner with us"
              width={100}
              height={100}
              className={styles.icon}
            />
          </div>
          <div className="ribbon">
            <h3 className={styles.blockTitle}>Partner With Us</h3>
          </div>
          <p className={styles.blurb}>
            {`Got a product, brand, or business that fits the Halloween or Christmas spirit? If you're a maker, seasonal brand, or regional sponsor, let's talk.`}
          </p>
          <div className={styles.ctaWrap}>
            <Button as="link" href="/contact" variant="outlined" size="sm">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
