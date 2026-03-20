"use client";

import { motion, useReducedMotion } from "@/lib/motion";

type ScrollRevealProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

/**
 * In-view reveal using Framer Motion. Respects `prefers-reduced-motion` (no animation).
 *
 * Task 12.2 — `whileInView` uses the viewport as root; sections in the right-hand main
 * column still intersect the window while scrolling, so reveals work with the split layout.
 */
export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
