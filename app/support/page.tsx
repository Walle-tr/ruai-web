import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - RuAI",
  description: "Get help with RuAI. Contact our support team for assistance with your account, billing, or technical issues.",
};

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-base font-bold text-white">R</span>
            </div>
            <span className="text-lg font-bold text-dark">RuAI</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-dark"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-extrabold text-dark">Support</h1>
        <p className="mb-12 text-lg text-text-secondary">
          We&apos;re here to help. Choose the best way to get in touch with us.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email Support */}
          <div className="rounded-2xl border border-border bg-white p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light/60">
              <svg
                className="h-7 w-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-dark">Email Support</h3>
            <p className="mb-4 text-text-secondary">
              Send us an email and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="mailto:support@ruai.app"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
            >
              support@ruai.app
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-border bg-white p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light/60">
              <svg
                className="h-7 w-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-dark">
              Frequently Asked Questions
            </h3>
            <p className="text-text-secondary">
              Find answers to common questions below.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-dark">FAQ</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-dark">
                How do I cancel my subscription?
              </h3>
              <p className="text-text-secondary">
                You can cancel your subscription anytime through your App Store
                account settings. Go to Settings &gt; Apple ID &gt; Subscriptions
                &gt; RuAI and tap &quot;Cancel Subscription.&quot; Your access will
                continue until the end of the current billing period.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-dark">
                Is my financial data secure?
              </h3>
              <p className="text-text-secondary">
                Yes. Your data is encrypted in transit and at rest using
                enterprise-grade security provided by Supabase. We implement Row
                Level Security policies to ensure your data is isolated and only
                accessible by you. We never sell your personal financial data.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-dark">
                Can I trust the AI financial advice?
              </h3>
              <p className="text-text-secondary">
                RuAI&apos;s AI coach provides personalized recommendations based on
                your actual financial data. However, this should be used as a
                guidance tool and not a replacement for professional financial
                advice. Always consult with a qualified financial advisor for major
                financial decisions.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-dark">
                How do I delete my account?
              </h3>
              <p className="text-text-secondary">
                To delete your account and all associated data, please email us at{" "}
                <a
                  href="mailto:support@ruai.app"
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  support@ruai.app
                </a>{" "}
                with the subject line &quot;Account Deletion Request.&quot; We will process
                your request within 30 days.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-dark">
                What happens during the free trial?
              </h3>
              <p className="text-text-secondary">
                During your free trial, you have full access to all RuAI features.
                You won&apos;t be charged until the trial period ends. You can cancel
                at any time before the trial ends to avoid being charged.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
