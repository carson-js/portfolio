import type { Metadata } from "next";
import Script from "next/script";
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
        <meta name="theme-color" content="#F7F8FA" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="theme-color-init" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:`(function(){var m=document.querySelector('meta[name="theme-color"]'),q=window.matchMedia('(prefers-color-scheme: dark)');function u(e){m.content=e.matches?'#0A0A0F':'#F7F8FA'}u(q);q.addEventListener('change',u)})()`}} />
      </body>
    </html>
  );
}
