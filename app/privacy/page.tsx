import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - RuAI",
  description: "RuAI Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-color.png"
              alt="RuAI"
              width={100}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-white"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-4xl font-extrabold text-white">
          Privacy Policy
        </h1>
        <p className="mb-12 text-text-secondary">
          Last updated: February 20, 2026
        </p>

        <div className="prose max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">1. Introduction</h2>
            <p className="leading-relaxed">
              RuAI LLC (&quot;RuAI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the RuAI mobile
              application (the &quot;Service&quot;). This Privacy Policy informs you of our
              policies regarding the collection, use, and disclosure of personal
              information when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              2. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              We collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Account Information:</strong> When you
                create an account, we collect your name, email address, and
                authentication credentials.
              </li>
              <li>
                <strong className="text-white">Financial Data:</strong> Financial goals,
                budget information, income details, and transaction data that you
                voluntarily enter into the app. This data is stored securely and
                never shared with third parties.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> We collect
                information about how you interact with the app, including features
                used, session duration, and in-app actions to improve our Service.
              </li>
              <li>
                <strong className="text-white">Device Information:</strong> Device type,
                operating system version, and unique device identifiers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To provide and maintain the Service</li>
              <li>
                To generate personalized AI financial plans and recommendations
              </li>
              <li>To track your financial goals and progress</li>
              <li>To communicate with you about the Service</li>
              <li>To improve and optimize the app experience</li>
              <li>To process subscription payments through our payment provider</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              4. Data Storage and Security
            </h2>
            <p className="leading-relaxed">
              Your data is stored securely using Supabase, a trusted cloud
              infrastructure provider with enterprise-grade security. We implement
              appropriate technical and organizational measures to protect your
              personal information, including encryption in transit and at rest, and
              Row Level Security policies to ensure data isolation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              5. Third-Party Services
            </h2>
            <p className="mb-4 leading-relaxed">
              We use the following third-party services:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Supabase:</strong> Authentication and
                database hosting
              </li>
              <li>
                <strong className="text-white">RevenueCat:</strong> Subscription
                management and payment processing
              </li>
              <li>
                <strong className="text-white">Anthropic (Claude AI):</strong> AI-powered
                financial coaching and recommendations
              </li>
              <li>
                <strong className="text-white">Google Sign-In:</strong> Optional
                authentication provider
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              6. AI-Generated Content
            </h2>
            <p className="leading-relaxed">
              Our AI financial coaching feature uses Anthropic&apos;s Claude AI to
              provide personalized recommendations. Your financial data may be sent
              to Anthropic&apos;s API to generate these recommendations. Anthropic does
              not store or use this data for training purposes. AI-generated advice
              is for informational purposes only and should not be considered
              professional financial advice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">7. Your Rights</h2>
            <p className="mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data in a standard format</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              8. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              Our Service is not directed to children under 13. We do not knowingly
              collect personal information from children under 13. If you become
              aware that a child has provided us with personal data, please contact
              us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              9. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you
              of any changes by posting the new Privacy Policy on this page and
              updating the &quot;last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:support@ruai.io"
                className="font-medium text-primary hover:text-primary-dark"
              >
                support@ruai.io
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}