import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RuAI - Your AI Financial Coach | Smart Goals & Budgeting",
  description:
    "Take control of your finances with RuAI. Set any financial goal and let AI build your personalized plan with smart budgeting, goal tracking, and daily action steps.",
  keywords: [
    "budget",
    "personal finance",
    "savings",
    "financial goals",
    "AI",
    "financial coach",
    "expenses",
    "money management",
    "goal tracking",
    "smart budgeting",
  ],
  authors: [{ name: "RuAI LLC" }],
  openGraph: {
    title: "RuAI - Your AI Financial Coach",
    description:
      "Your AI-powered financial roadmap. Set any goal and let AI build your personalized plan.",
    url: "https://ruai.io",
    siteName: "RuAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuAI - Your AI Financial Coach",
    description:
      "Your AI-powered financial roadmap. Set any goal and let AI build your personalized plan.",
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
