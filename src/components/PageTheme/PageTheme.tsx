"use client";

import { useEffect } from "react";

interface PageThemeProps {
  theme: "halloween" | "christmas";
}

export default function PageTheme({ theme }: PageThemeProps) {
  useEffect(() => {
    const className = `theme-${theme}`;
    document.body.classList.add(className);
    return () => document.body.classList.remove(className);
  }, [theme]);

  return null;
}
