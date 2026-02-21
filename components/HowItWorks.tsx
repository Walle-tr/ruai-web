const steps = [
  {
    number: "01",
    title: "Set Your Goal",
    description:
      "Tell RuAI what you want to achieve. Emergency fund, vacation, new car, or paying off debt. Any financial goal works.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Your AI Plan",
    description:
      "Our AI analyzes your income, expenses, and timeline to create a realistic, personalized roadmap to your goal.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Track Daily Progress",
    description:
      "Follow your daily action steps, track spending, and watch your savings grow. Your AI coach keeps you motivated.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            How it works
          </h2>
          <p className="text-lg text-text-secondary">
            Get started in minutes. RuAI does the heavy lifting so you can
            focus on building your future.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-10 hidden h-0.5 w-[calc(100%-80px)] bg-gradient-to-r from-primary/30 to-primary/10 md:block" />
              )}

              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-light/60">
                {step.icon}
              </div>

              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                Step {step.number}
              </div>

              <h3 className="mb-3 text-xl font-bold text-dark">
                {step.title}
              </h3>

              <p className="leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
