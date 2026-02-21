export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/50 px-4 py-1.5">
              <span className="text-sm font-medium text-primary-darkest">
                AI-Powered Personal Finance
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl">
              Your AI-Powered{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Financial Roadmap
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
              Set any financial goal and let AI build your personalized plan.
              Smart budgeting, daily action steps, and real-time coaching to
              help you reach your goals faster.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              {/* App Store badge placeholder */}
              <a
                href="#download"
                className="inline-flex items-center gap-3 rounded-xl bg-dark px-6 py-3.5 text-white transition-all hover:bg-gray-800"
              >
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium uppercase leading-tight opacity-80">
                    Coming Soon on the
                  </div>
                  <div className="text-lg font-semibold leading-tight">
                    App Store
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free trial included
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex-shrink-0">
            <div className="relative mx-auto h-[580px] w-[280px] rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl">
              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
              {/* Screen */}
              <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2.3rem] bg-background p-6">
                {/* Mini app preview */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-dark">RuAI</h3>
                <p className="mb-6 text-xs text-text-secondary">
                  AI Financial Coach
                </p>

                {/* Mock dashboard cards */}
                <div className="w-full space-y-3">
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <div className="mb-1 text-[10px] font-medium text-text-secondary">
                      Monthly Budget
                    </div>
                    <div className="text-lg font-bold text-dark">$2,450</div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[65%] rounded-full bg-primary" />
                    </div>
                    <div className="mt-1 text-[10px] text-text-secondary">
                      65% used
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <div className="mb-1 text-[10px] font-medium text-text-secondary">
                      Savings Goal
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-lg font-bold text-dark">
                        $8,200
                      </div>
                      <div className="text-xs font-medium text-primary">
                        82%
                      </div>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-primary to-primary-dark" />
                    </div>
                  </div>

                  <div className="rounded-xl bg-primary/10 p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-sm">🤖</span>
                      <div>
                        <div className="text-[10px] font-semibold text-primary-darkest">
                          AI Coach
                        </div>
                        <div className="text-[10px] leading-relaxed text-primary-dark">
                          You&apos;re on track! Save $50 more this week to hit
                          your goal early.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -bottom-10 left-1/2 h-20 w-60 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
