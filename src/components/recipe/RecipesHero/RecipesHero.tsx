import Button from "@/components/ui/Button/Button";
import Garland from "@/components/ui/Garland/Garland";
import styles from "./RecipesHero.module.css";

interface RecipesHeroProps {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonHref?: string;
  garlandImage?: string;
  garlandHeight?: number;
}

export default function RecipesHero({
  title,
  subtitle,
  buttonLabel = "View All",
  buttonHref = "/recipes",
  garlandImage,
  garlandHeight,
}: RecipesHeroProps) {
  return (
    <section className={styles.section}>
      {garlandImage && <Garland src={garlandImage} height={garlandHeight} />}

      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <div className={styles.inner}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subtitle}>
              <span className={styles.line} />
              <p>{subtitle}</p>
              <span className={styles.line} />
            </div>
            <div className={styles.button}>
              <Button as="link" href={buttonHref} variant="primary" size="md">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
