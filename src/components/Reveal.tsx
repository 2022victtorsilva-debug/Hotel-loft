import type { PropsWithChildren } from "react";

import { useReveal } from "@/hooks/useReveal";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
