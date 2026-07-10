"use client";
import { useEffect, useState } from "react";
import styles from "./GateIntro.module.css";
import GateArt from "./gate.svg";

export default function GateIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.documentElement.style.overflow = "";
      setDone(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.sky} />
      <div className={styles.scrim} />
      <GateArt className={styles.gate} />
    </div>
  );
}