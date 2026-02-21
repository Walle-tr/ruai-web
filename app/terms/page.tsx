import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - RuAI",
  description: "RuAI Terms of Service. Read about the terms and conditions for using our app.",
};

export default function TermsOfService() {
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
        <h1 className="mb-2 text-4xl font-extrabold text-dark">
          Terms of Service
        </h1>
        <p className="mb-12 text-text-secondary">
          Last updated: February 20, 2026
        </p>

        <div className="prose max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By downloading, installing, or using the RuAI mobile application
              (&quot;Service&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
              Service. The Service is operated by RuAI LLC (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              2. Description of Service
            </h2>
            <p className="leading-relaxed">
              RuAI is an AI-powered personal finance application that helps users
              set financial goals, create budgets, track spending, and receive
              AI-generated financial coaching. The Service is provided on a
              subscription basis with various pricing tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              3. User Accounts
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You must provide accurate and complete information when creating an
                account.
              </li>
              <li>
                You are responsible for maintaining the security of your account
                credentials.
              </li>
              <li>
                You must be at least 13 years old to use the Service.
              </li>
              <li>
                You are responsible for all activity that occurs under your account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              4. Subscriptions and Payments
            </h2>
            <p className="mb-4 leading-relaxed">
              RuAI offers the following subscription plans:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Weekly: $2.99/week</li>
              <li>Monthly: $7.99/month</li>
              <li>Yearly: $39.99/year</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              All subscriptions include a free trial period. Subscriptions
              automatically renew unless cancelled at least 24 hours before the end
              of the current period. Payment is charged to your Apple ID account at
              confirmation of purchase. You can manage and cancel subscriptions in
              your App Store account settings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              5. AI-Generated Content Disclaimer
            </h2>
            <p className="leading-relaxed">
              The AI financial coaching and recommendations provided by RuAI are for
              informational and educational purposes only. They do not constitute
              professional financial, investment, tax, or legal advice. You should
              consult with qualified professionals before making any financial
              decisions. We are not responsible for any financial losses resulting
              from actions taken based on AI-generated recommendations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              6. User Data and Content
            </h2>
            <p className="leading-relaxed">
              You retain ownership of all financial data and content you enter into
              the app. By using the Service, you grant us a limited license to
              process this data solely for the purpose of providing the Service,
              including generating AI-powered recommendations. We will never sell
              your personal financial data to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              7. Prohibited Conduct
            </h2>
            <p className="mb-4 leading-relaxed">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use the Service for any illegal purpose</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble any part of
                the Service
              </li>
              <li>
                Interfere with or disrupt the Service or its servers
              </li>
              <li>
                Create multiple accounts for fraudulent purposes
              </li>
              <li>
                Share your account credentials with others
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              8. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, RuAI LLC shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible
              losses resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              9. Modifications to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              provide notice of any material changes by updating the &quot;last updated&quot;
              date. Your continued use of the Service after any changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              10. Termination
            </h2>
            <p className="leading-relaxed">
              We may terminate or suspend your account at any time for violation of
              these Terms. Upon termination, your right to use the Service will
              immediately cease. You may cancel your account at any time by
              contacting us at{" "}
              <a
                href="mailto:support@ruai.app"
                className="font-medium text-primary hover:text-primary-dark"
              >
                support@ruai.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">
              11. Governing Law
            </h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the
              laws of the United States, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-dark">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@ruai.app"
                className="font-medium text-primary hover:text-primary-dark"
              >
                support@ruai.app
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
