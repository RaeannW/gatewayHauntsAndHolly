import styles from "./HeroDivider.module.css";

interface HeroDividerProps {
  variant?: "thick" | "thin" | "double";
}

export default function HeroDivider({ variant = "thin" }: HeroDividerProps) {
  return (
    <div
      className={`${styles.divider} ${styles[variant]}`}
      aria-hidden="true"
    />
  );
}
