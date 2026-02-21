import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RuAI - Smart Budget & Goals | AI-Powered Personal Finance",
  description:
    "Take control of your finances with RuAI. Set any financial goal and let AI build your personalized plan with smart budgeting, goal tracking, and daily action steps.",
  keywords: [
    "budget",
    "budgeting",
    "finance",
    "money",
    "savings",
    "goals",
    "AI",
    "coach",
    "tracker",
    "expense",
  ],
  authors: [{ name: "RuAI LLC" }],
  openGraph: {
    title: "RuAI - Smart Budget & Goals",
    description:
      "Your AI-Powered Financial Roadmap. Set any financial goal and let AI build your personalized plan.",
    url: "https://ruai.app",
    siteName: "RuAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuAI - Smart Budget & Goals",
    description:
      "Your AI-Powered Financial Roadmap. Set any financial goal and let AI build your personalized plan.",
  },
  metadataBase: new URL("https://ruai.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
