import { Geist, Geist_Mono } from "next/font/google";

import { LayoutWithLocale } from "@/components/layout-with-locale";

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

export const metadata: Metadata = {
  title: "Birat Bhattacharjee | Senior Software Engineer",
  description:
    "Birat Bhattacharjee — Senior Software Engineer building real-time web experiences that scale. React, TypeScript, Node.js, Go. Scalable frontend architecture, real-time systems, performance optimisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-w-0 antialiased overflow-x-hidden`}
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
