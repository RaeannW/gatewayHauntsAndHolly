export type Holiday = "halloween" | "christmas";

export interface HolidayInfo {
  name: string;
  date: Date;
  holiday: Holiday;
}

const getHolidayDates = (year: number): HolidayInfo[] => [
  { name: "Halloween", date: new Date(year, 9, 31), holiday: "halloween" },
  { name: "Christmas", date: new Date(year, 11, 25), holiday: "christmas" },
];

export function getNextHoliday(now: Date = new Date()): HolidayInfo {
  const year = now.getFullYear();
  const holidays = [...getHolidayDates(year), ...getHolidayDates(year + 1)];
  return holidays.find((h) => h.date.getTime() > now.getTime())!;
}

export function getCountdown(target: Date, now: Date = new Date()) {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}
