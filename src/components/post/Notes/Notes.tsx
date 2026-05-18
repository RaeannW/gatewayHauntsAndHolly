import Image from "next/image";
import styles from "./Notes.module.css";

interface NotesProps {
  children: React.ReactNode;
}

export default function Notes({ children }: NotesProps) {
  return (
    <div className={styles.notes}>
      <Image
        src="/images/decor/tape.png"
        alt=""
        width={120}
        height={40}
        className={styles.tape}
        aria-hidden="true"
      />
      <h2 className={styles.heading}>Notes</h2>
      {children}
    </div>
  );
}
