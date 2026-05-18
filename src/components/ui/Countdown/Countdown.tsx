"use client";

import { useEffect, useState } from "react";
import { getCountdown, getNextHoliday, Holiday } from "@/lib/season";
import styles from "./Countdown.module.css";

interface CountdownProps {
  target?: Holiday;
  variant?: "compact" | "feature";
}

export default function Countdown({
  target,
  variant = "compact",
}: CountdownProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [holidayName, setHolidayName] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      let targetDate: Date;
      let name: string;

      if (target) {
        const year = now.getFullYear();
        const month = target === "halloween" ? 9 : 11;
        const day = target === "halloween" ? 31 : 25;
        let d = new Date(year, month, day);
        if (d.getTime() < now.getTime()) {
          d = new Date(year + 1, month, day);
        }
        targetDate = d;
        name = target === "halloween" ? "Halloween" : "Christmas";
      } else {
        const next = getNextHoliday(now);
        targetDate = next.date;
        name = next.name;
      }

      setHolidayName(name);
      setTime(getCountdown(targetDate, now));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className={`${styles.countdown} ${styles[variant]}`}>
      <div className={styles.label}>Until {holidayName}</div>
      <div className={styles.units}>
        <Unit value={time.days} label="Days" />
        <Unit value={time.hours} label="Hrs" />
        <Unit value={time.minutes} label="Min" />
        <Unit value={time.seconds} label="Sec" />
      </div>
    </div>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.unit}>
      <span className={styles.value}>{String(value).padStart(2, "0")}</span>
      <span className={styles.unitLabel}>{label}</span>
    </div>
  );
}
