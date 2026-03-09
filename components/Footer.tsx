import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-white.png"
              alt="RuAI"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-text-secondary transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-secondary transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-text-secondary transition-colors hover:text-white"
            >
              Support
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm text-text-secondary">
            <a
              href="mailto:support@ruai.io"
              className="transition-colors hover:text-primary"
            >
              support@ruai.io
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
