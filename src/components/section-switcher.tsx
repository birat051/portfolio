"use client";

import { useEffect, useMemo, useState } from "react";

import { motion, useReducedMotion } from "@/lib/motion";

import type { SectionSwitcherItem } from "@/components/types";

type SectionSwitcherProps = Readonly<{
  items: readonly SectionSwitcherItem[];
  /** Task **2.2** — accessible name for the in-page section `<nav>`. */
  navAriaLabel: string;
  className?: string;
}>;

/**
 * Task **14.3** — Highlights which in-page section is in view; **does not** hide or swap section markup.
 * Links are real `<a href="#section-id">` anchors so crawlers and no-JS users can reach each section.
 *
 * Task **27.4** — Hash URL (`#section-id`) syncs highlight on **`hashchange`** and after mount (rAF) so
 * direct links / back-forward match the target section once the browser scrolls. Short viewports use a
 * slightly wider intersection band via **`rootMargin`** + reconnect on **`resize`** / **`visualViewport`**.
 * **`prefers-reduced-motion`:** hover/tap motion on links is disabled; **active state** follows IO/hash only.
 */
export function SectionSwitcher({
  items,
  navAriaLabel,
  className,
}: SectionSwitcherProps) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const reduceMotion = useReducedMotion();
  const hoverOff = reduceMotion === true;

  /** Task **27.4** — Align highlight with **`location.hash`** when it names a known section (incl. back/forward). */
  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const syncFromHash = () => {
      const id = window.location.hash.slice(1);
      if (id && ids.includes(id)) {
        setActiveId(id);
      }
    };

    window.addEventListener("hashchange", syncFromHash);

    let cancelled = false;
    const rafOuter = requestAnimationFrame(() => {
      if (cancelled) {
        return;
      }
      requestAnimationFrame(() => {
        if (!cancelled) {
          syncFromHash();
        }
      });
    });

    return () => {
      cancelled = true;
      window.removeEventListener("hashchange", syncFromHash);
      cancelAnimationFrame(rafOuter);
    };
  }, [ids]);

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    const ratios = new Map<string, number>();

    /** Narrower vertical crop on very short viewports so the “focus” band stays usable (~40% vs ~20% of height). */
    const rootMarginForViewport = () =>
      window.innerHeight < 480 ? "-8% 0px -52% 0px" : "-10% 0px -70% 0px";

    /* Task 12.2 — Observes real `section[id]` nodes in the scrollable document (main column). */
    /** Task **27.3** — Functional `setActiveId` avoids a stale `activeId` closure. */
    let observer: IntersectionObserver | null = null;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        ratios.set(el.id, entry.intersectionRatio);
      }

      let bestId = ids[0] ?? "";
      let bestRatio = -1;
      for (const id of ids) {
        const r = ratios.get(id) ?? 0;
        if (r > bestRatio) {
          bestRatio = r;
          bestId = id;
        }
      }
      if (bestId) {
        setActiveId((prev) => (prev === bestId ? prev : bestId));
      }
    };

    const connect = () => {
      observer?.disconnect();
      ratios.clear();
      observer = new IntersectionObserver(onIntersect, {
        threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1],
        rootMargin: rootMarginForViewport(),
      });
      for (const el of elements) {
        observer.observe(el);
      }
    };

    connect();

    let resizeRaf = 0;
    const scheduleReconnect = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(connect);
    };

    window.addEventListener("resize", scheduleReconnect);
    window.visualViewport?.addEventListener("resize", scheduleReconnect);

    return () => {
      window.removeEventListener("resize", scheduleReconnect);
      window.visualViewport?.removeEventListener("resize", scheduleReconnect);
      cancelAnimationFrame(resizeRaf);
      observer?.disconnect();
    };
  }, [ids]);

  return (
    <nav aria-label={navAriaLabel} className={className}>
      <ul className="list-none space-y-2">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={[
                  "group flex items-center gap-3 rounded py-1 outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                  "motion-reduce:transition-none transition-colors duration-200",
                  isActive
                    ? "text-tertiary"
                    : "text-secondary-foreground hover:text-primary-foreground",
                ].join(" ")}
                whileHover={hoverOff ? undefined : { x: 4 }}
                whileTap={hoverOff ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
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
              </motion.a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

