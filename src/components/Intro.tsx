import { useEffect, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Intro = () => {
  const [visible, setVisible] = useState(!prefersReduced());

  useEffect(() => {
    if (prefersReduced()) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand"
      aria-hidden="true"
    >
      <div className="intro-mark text-center text-brand-foreground">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.42em] sm:text-xs">
          Barreiras
        </span>
        <strong className="mt-3 block font-display text-5xl font-semibold tracking-tight sm:text-7xl">
          LOFT
        </strong>
        <span className="mt-5 block text-[0.64rem] uppercase tracking-[0.34em] text-brand-foreground/65 sm:text-[0.7rem]">
          Conforto em cada detalhe
        </span>
      </div>
    </div>
  );
};
