import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support - RuAI",
  description: "Get help with RuAI. Contact our support team for assistance with your account, billing, or technical issues.",
};

export default function Support() {
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
        <h1 className="mb-4 text-4xl font-extrabold text-white">Support</h1>
        <p className="mb-12 text-lg text-text-secondary">
          We&apos;re here to help. Choose the best way to reach us.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email Support */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
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
            <h3 className="mb-2 text-lg font-bold text-white">Email Support</h3>
            <p className="mb-4 text-text-secondary">
              Send us an email and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="mailto:support@ruai.io"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
            >
              support@ruai.io
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
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
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
            <h3 className="mb-2 text-lg font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-text-secondary">
              Find answers to common questions below.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-white">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                How do I cancel my subscription?
              </h3>
              <p className="text-text-secondary">
                You can cancel your subscription anytime from your App Store settings.
                Go to Settings &gt; Apple ID &gt; Subscriptions &gt; RuAI and tap
                &quot;Cancel Subscription.&quot; Your access will continue until the end of
                your current billing period.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                Is my financial data secure?
              </h3>
              <p className="text-text-secondary">
                Yes. Your data is encrypted in transit and at rest using enterprise-grade
                security provided by Supabase. We use Row Level Security policies to ensure
                your data is isolated and only accessible by you. We never sell your
                personal financial data.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                What does Ru actually do?
              </h3>
              <p className="text-text-secondary">
                Ru is your personal financial agent. After each daily check-in, Ru tells
                you whether you got closer to or further from your goal — and how your
                streak is going. Ru doesn&apos;t give investment advice or manage your money.
                It simply reflects on your daily numbers so you stay aware and on track.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                How do I delete my account?
              </h3>
              <p className="text-text-secondary">
                To delete your account and all associated data, send us an email at{" "}
                <a
                  href="mailto:support@ruai.io"
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  support@ruai.io
                </a>{" "}
                with the subject &quot;Account Deletion Request.&quot; We&apos;ll process
                your request within 30 days.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 font-bold text-white">
                What happens during the free trial?
              </h3>
              <p className="text-text-secondary">
                During your free trial, you have full access to all RuAI premium features
                including multiple goals, full check-in history, and unlimited conversations
                with Ru. You won&apos;t be charged until the trial period ends. You can cancel
                anytime before the trial ends to avoid charges.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
