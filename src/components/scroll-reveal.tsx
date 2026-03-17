"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform transition duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

