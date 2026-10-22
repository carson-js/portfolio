import type { Viewport } from "next";
import CurbPreview from "./CurbPreview";

export const metadata = {
  title: "Curb — Your Garage, Digitized.",
  description: "A clean, private way to track maintenance, fuel, and efficiency. No ads, no tracking, just utility.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1715" },
  ],
};

export default function Curb() {
  return <CurbPreview />;
}
