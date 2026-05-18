import ShopCard from "@/components/post/ShopCard/ShopCard";
import { RecipeTool } from "@/lib/sample-data";
import styles from "./ShopCardsBlock.module.css";

interface ShopCardsBlockProps {
  heading?: string;
  intro?: string;
  items: RecipeTool[];
}

export default function ShopCardsBlock({
  heading = "Tools & Supplies",
  intro,
  items,
}: ShopCardsBlockProps) {
  return (
    <div className={styles.block}>
      <h2 className={styles.heading}>{heading}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <ShopCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
