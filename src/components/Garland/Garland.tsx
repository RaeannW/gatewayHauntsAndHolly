import styles from "./Garland.module.css";

interface GarlandProps {
  src: string;
  alt?: string;
  height?: number;
}

export default function Garland({ src, alt = "", height = 60 }: GarlandProps) {
  return (
    <div
      className={styles.garland}
      style={{
        height: `${height}px`,
        backgroundImage: `url(${src})`,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
