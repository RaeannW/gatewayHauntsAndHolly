import Image from "next/image";
import styles from "./GateDivider.module.css";

interface GateDividerProps {
  src?: string;
}

export default function GateDivider({
  src = "/images/decor/gate.svg",
}: GateDividerProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={src}
        alt=""
        width={900}
        height={180}
        className={styles.image}
        aria-hidden="true"
      />
    </div>
  );
}
