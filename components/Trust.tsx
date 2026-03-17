const signals = [
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Bank-level encryption",
    description: "Your data is encrypted in transit and at rest. Row Level Security ensures only you can access your information.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "No data selling. Ever.",
    description: "We never sell, share, or monetize your financial data. Your numbers are yours alone.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "No bank connection required",
    description: "RuAI never asks for your bank login. You manually report your day — simple, private, and secure.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cancel anytime",
    description: "No contracts, no commitments. Cancel your subscription with one tap in the App Store.",
  },
];

export default function Trust() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Your data. Your control.
          </h2>
          <p className="text-text-secondary">
            Built with privacy and simplicity as core principles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal) => (
            <div key={signal.title} className="text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {signal.icon}
              </div>
              <h3 className="mb-1 text-sm font-bold text-white">{signal.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
