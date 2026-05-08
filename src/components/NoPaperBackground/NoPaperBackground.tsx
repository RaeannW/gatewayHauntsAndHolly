"use client";

import { useEffect } from "react";

export default function NoPaperBackground() {
  useEffect(() => {
    document.body.classList.add("no-paper-bg");
    return () => document.body.classList.remove("no-paper-bg");
  }, []);

  return null;
}
