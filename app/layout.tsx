import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RuAI — 30 Seconds a Day to Reach Your Financial Goal",
  description:
    "Report what you earned and spent. Ru tells you if you're on track. A daily 30-second check-in that turns any financial goal into a simple habit — no spreadsheets, no budgets.",
  keywords: [
    "daily check-in",
    "financial goal tracker",
    "savings tracker",
    "personal finance app",
    "AI financial agent",
    "no spend day",
    "money tracker",
    "goal progress",
    "earn vs spend",
    "habit tracker finance",
  ],
  authors: [{ name: "RuAI LLC" }],
  openGraph: {
    title: "RuAI — 30 Seconds a Day to Reach Your Financial Goal",
    description:
      "Report your day. Ru tells you if you're on track. The simplest way to reach any financial goal.",
    url: "https://ruai.io",
    siteName: "RuAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuAI — 30 Seconds a Day to Reach Your Financial Goal",
    description:
      "Report your day. Ru tells you if you're on track. The simplest way to reach any financial goal.",
  },
  metadataBase: new URL("https://ruai.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
