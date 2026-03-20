import {
  Geist,
  Geist_Mono,
  Noto_Sans_Bengali,
  Noto_Sans_Devanagari,
} from "next/font/google";

import { LayoutWithLocale } from "@/components/layout-with-locale";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/data/site";

import "./globals.css";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Task 22.7 — Hindi (Devanagari); subset keeps payload small vs full Noto Sans. */
const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600"],
  display: "swap",
});

/** Task 22.7 — Bengali + Assamese (Bengali script); paired with Devanagari for hero CLI. */
const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Birat Bhattacharjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansDevanagari.variable} ${notoSansBengali.variable} min-w-0 antialiased overflow-x-hidden`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.classList.add(t);}})();`,
          }}
        />
        <LayoutWithLocale>{children}</LayoutWithLocale>
      </body>
    </html>
  );
}
