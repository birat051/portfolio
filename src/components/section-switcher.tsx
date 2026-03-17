"use client";

import { useEffect, useMemo, useState } from "react";

type Item = Readonly<{ id: string; label: string }>;

type SectionSwitcherProps = Readonly<{
  items: readonly Item[];
  className?: string;
}>;

export function SectionSwitcher({ items, className }: SectionSwitcherProps) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          ratios.set(el.id, entry.intersectionRatio);
        }

        let bestId = activeId;
        let bestRatio = -1;
        for (const id of ids) {
          const r = ratios.get(id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }
        if (bestId && bestId !== activeId) setActiveId(bestId);
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1],
        rootMargin: "-10% 0px -70% 0px",
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  return (
    <nav aria-label="Section navigation" className={className}>
      <ul className="list-none space-y-2">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={[
                  "group flex items-center gap-3 rounded py-1 outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                  "motion-reduce:transition-none transition-colors duration-200",
                  isActive
                    ? "text-tertiary"
                    : "text-secondary-foreground hover:text-primary-foreground",
                ].join(" ")}
              >
                <span
                  aria-hidden
                  className={[
                    "h-px w-10 bg-secondary-foreground/40",
                    "motion-reduce:transition-none transition-all duration-200",
                    isActive ? "w-16 bg-tertiary" : "group-hover:w-14",
                  ].join(" ")}
                />
                <span className={["text-sm", isActive ? "font-medium" : ""].join(" ")}>
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

