import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-base font-bold text-white">R</span>
            </div>
            <span className="text-lg font-bold text-dark">RuAI</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-text-secondary transition-colors hover:text-dark"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-secondary transition-colors hover:text-dark"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-text-secondary transition-colors hover:text-dark"
            >
              Support
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm text-text-secondary">
            <a
              href="mailto:support@ruai.app"
              className="transition-colors hover:text-primary"
            >
              support@ruai.app
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-text-secondary">
            &copy; {currentYear} RuAI LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
