import {
  SITE_ICON_BG,
  SITE_ICON_FOREGROUND,
  SITE_ICON_INITIAL,
} from "@/data/site";

type SiteMarkIconImageProps = Readonly<{
  width: number;
  height: number;
}>;

/**
 * Markup for **`next/og`** **`ImageResponse`** (favicon + apple-icon routes).
 * Sizing is relative to the canvas so one component serves 32×32 and 180×180.
 */
export function SiteMarkIconImage({ width, height }: SiteMarkIconImageProps) {
  const edge = Math.min(width, height);
  const fontSize = Math.round(edge * 0.58);
  const borderRadius = Math.round(edge * 0.2);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: SITE_ICON_BG,
        color: SITE_ICON_FOREGROUND,
        fontSize,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        borderRadius,
      }}
    >
      {SITE_ICON_INITIAL}
    </div>
  );
}
