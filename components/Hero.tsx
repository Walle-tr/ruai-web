export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">
                Ru · Your daily financial agent
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Report your day.{" "}
              <span className="bg-gradient-to-r from-primary to-[#00D4AA] bg-clip-text text-transparent">
                Ru tells you if you&#39;re on track.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
              Every day, Ru asks how much you earned and how much you spent.
              In 30 seconds you know if you&#39;re getting closer or further from your
              goal — no spreadsheets, no complicated budgets.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href="#download"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-black transition-all hover:bg-gray-200"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium uppercase leading-tight opacity-60">Coming soon on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </a>

              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free trial — no card required
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex-shrink-0">
            <div className="relative mx-auto h-[580px] w-[280px] rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl shadow-primary/10">
              <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.3rem] bg-[#0a0a0a]">
                <div className="flex items-center justify-between px-5 pt-8 pb-2">
                  <span className="text-[11px] font-bold text-white">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="h-[7px] w-[3px] rounded-sm bg-white opacity-40" />
                    <div className="h-[9px] w-[3px] rounded-sm bg-white opacity-60" />
                    <div className="h-[11px] w-[3px] rounded-sm bg-white opacity-80" />
                    <div className="h-[13px] w-[3px] rounded-sm bg-white" />
                    <span className="ml-1 text-[9px] text-white opacity-70">▲</span>
                    <div className="ml-1 flex h-[9px] w-[16px] items-center rounded-[2px] border border-white/50 p-px">
                      <div className="h-full w-[70%] rounded-[1px] bg-[#30d158]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 pb-3 pt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="text-[8px] font-black text-white">Ru</span>
                  </div>
                  <span className="text-[10px] font-semibold text-primary">Daily Check-in</span>
                </div>
                <div className="px-4 pb-3">
                  <p className="text-[15px] font-extrabold leading-snug text-white">How was<br />your day?</p>
                </div>
                <div className="px-4 pb-2">
                  <p className="mb-1 text-[8px] font-bold uppercase tracking-widest text-gray-500">How much did you earn today?</p>
                  <div className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">💵</span>
                      <div>
                        <p className="text-[8px] text-gray-400">Today&#39;s income</p>
                        <p className="text-[13px] font-black text-primary">+ $120.00</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">✓</span>
                  </div>
                </div>
                <div className="px-4 pb-2">
                  <p className="mb-1 text-[8px] font-bold uppercase tracking-widest text-gray-500">How much did you spend today?</p>
                  <div className="flex items-center justify-between rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">💸</span>
                      <div>
                        <p className="text-[8px] text-gray-400">Today&#39;s spending</p>
                        <p className="text-[13px] font-black text-red-400">− $45.00</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-red-400">✓</span>
                  </div>
                </div>
                <div className="px-4 pb-3">
                  <div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2">
                    <span className="text-sm">✨</span>
                    <div>
                      <p className="text-[9px] font-bold text-primary">I didn&#39;t spend anything today</p>
                      <p className="text-[8px] text-gray-500">Clean day — gets you closer to your goal</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-3">
                  <div className="rounded-xl bg-primary py-2.5 text-center">
                    <p className="text-[11px] font-black text-white">View my progress →</p>
                  </div>
                </div>
                <div className="mx-4 rounded-xl bg-[#141414] p-2.5">
                  <div className="flex items-start gap-2">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <span className="text-[6px] font-black text-white">Ru</span>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-primary">Ru</p>
                      <p className="text-[9px] leading-relaxed text-gray-300">
                        Today you got{" "}
                        <span className="font-bold text-primary">$75</span> closer to your goal.
                        You&#39;re on an 8-day streak 🔥
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 left-1/2 h-20 w-60 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
