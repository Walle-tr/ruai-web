export default function CTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-dark py-20 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Take Control of Your{" "}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Financial Future
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
          Join thousands of smart savers using AI to reach their financial
          goals faster. Start your free trial today.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* App Store badge */}
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-dark transition-all hover:bg-gray-100"
          >
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium uppercase leading-tight opacity-60">
                Coming Soon on the
              </div>
              <div className="text-lg font-semibold leading-tight">
                App Store
              </div>
            </div>
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Free trial included with all plans. No credit card required.
        </p>
      </div>
    </section>
  );
}
