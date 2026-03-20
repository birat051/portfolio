import { ImageResponse } from "next/og";

import { SiteMarkIconImage } from "@/lib/site-mark-icon-image";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Browser tab favicon — initial mark (replaces default Next.js icon). */
export default function Icon() {
  return new ImageResponse(
    <SiteMarkIconImage width={size.width} height={size.height} />,
    { ...size },
  );
}
