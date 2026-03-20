import { ImageResponse } from "next/og";

import { SiteMarkIconImage } from "@/lib/site-mark-icon-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon / PWA-style home-screen tile. */
export default function AppleIcon() {
  return new ImageResponse(
    <SiteMarkIconImage width={size.width} height={size.height} />,
    { ...size },
  );
}
