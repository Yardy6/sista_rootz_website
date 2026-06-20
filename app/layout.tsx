import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { CSSProperties } from "react";
import { AgeGate } from "./components/AgeGate";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollProgress } from "./components/ScrollProgress";
import { assetPath } from "./lib/asset-path";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Sista Rootz | Coming Soon",
  description:
    "Sista Rootz / M.Q LLC is a coming-soon spiritual and wellness-centered cannabis dispensary for adults 21+."
};

const assetStyles = {
  "--asset-about-hero": `url("${assetPath("/images/sista-rootz-about-legacy.webp")}")`,
  "--asset-buyers-hero": `url("${assetPath("/images/sista-rootz-buyers-learning.webp")}")`,
  "--asset-greenhouse-hero": `url("${assetPath("/images/cannabis-greenhouse-hero.jpg")}")`,
  "--asset-home-hero": `url("${assetPath("/images/sista-rootz-rastafarian-hero.webp")}")`,
  "--asset-menu-preview": `url("${assetPath("/images/sista-rootz-menu-preview.webp")}")`,
  "--asset-nav-vine": `url("${assetPath("/images/rasta-vine-divider-nav.png")}")`
} as CSSProperties;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`} style={assetStyles}>
        <AgeGate />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
