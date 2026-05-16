import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carson Smith",
  description: "Computer Engineering student at SJSU. Building iOS apps and systems software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#F7F8FA" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0A0F" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
