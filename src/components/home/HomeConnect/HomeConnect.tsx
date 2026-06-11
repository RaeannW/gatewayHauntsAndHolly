import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import NewsletterSignup from "@/components/ui/NewsletterSignup/NewsletterSignup";
import styles from "./HomeConnect.module.css";

export default function HomeConnect() {
  return (
    <section className={styles.connect} aria-label="Connect with the guide">
      {/* ── LEFT COLUMN ── */}
      <div className={styles.column}>
        {/* Block 1: About the Guide */}
        <div className={styles.block}>
          <div className={styles.iconCircle}>
            {/* TODO: replace with /images/home/aboutIcon.png */}
            <Image
              src="/images/decor/girlWriting.png"
              alt="About the Guide"
              width={100}
              height={100}
              className={styles.icon}
            />
          </div>
          <div className="ribbon">
            <h3 className={styles.blockTitle}>About the Guide</h3>
          </div>
          <p className={styles.blurb}>
            We&rsquo;re a small team obsessed with making the most of every
            season in St. Louis — from the first carved pumpkin to the last
            strand of holiday lights.
          </p>
          <div className={styles.ctaWrap}>
            <Button as="link" href="/about" variant="outlined" size="sm">
              Read More
            </Button>
          </div>
        </div>

        <hr className={styles.blockDivider} />

        {/* Block 2: Have a Tip? */}
        <div className={styles.block}>
          <div className={styles.iconCircle}>
            {/* TODO: replace with /images/home/tipIcon.png */}
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
            Readers are our best scouts. If you know a hidden pumpkin patch, a
            pop-up market, or a neighbourhood tradition worth covering — we want
            to hear about it.
          </p>
          <div className={styles.ctaWrap}>
            <Button as="link" href="/contact" variant="outlined" size="sm">
              Submit an Idea
            </Button>
          </div>
        </div>
      </div>

      {/* ── CENTER COLUMN ── */}
      <div className={`${styles.column} ${styles.centerCol}`}>
        <div className={styles.centerInner}>
          <div className={styles.ornamentCircle}></div>
          <h2 className={styles.dispatchTitle}>The Dispatch</h2>
          <p className={styles.centerBlurb}>
            Seasonal picks, hidden gems, and local events — delivered straight
            to your inbox before the weekend.
          </p>
          <NewsletterSignup variant="dark" />
        </div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className={styles.column}>
        {/* Block 1: Boo Boxes */}
        <div className={styles.block}>
          <div className={styles.iconCircle}>
            {/* TODO: replace with /images/home/booBoxIcon.png */}
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
            A curated surprise box packed with local goods, seasonal treats, and
            St. Louis-made finds. Limited runs, shipped straight to your door.
          </p>
          <div className={styles.ctaWrap}>
            {/* TODO: wire to a real waitlist — /contact is a placeholder for now */}
            <Button as="link" href="/contact" variant="outlined" size="sm">
              Join the Waitlist
            </Button>
          </div>
        </div>

        <hr className={styles.blockDivider} />

        {/* Block 2: Partner With Us */}
        <div className={styles.block}>
          <div className={styles.iconCircle}>
            {/* TODO: replace with /images/home/partnerIcon.png */}
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
            We work with local makers, seasonal brands, and regional sponsors
            who want to reach an engaged, place-loving audience. Let&rsquo;s
            build something together.
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
