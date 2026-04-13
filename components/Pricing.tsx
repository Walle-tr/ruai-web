const plans = [
  {
    name: "Weekly",
    price: "$2.99",
    period: "/week",
    equivalent: "~$12.95/month equivalent",
    description: "Try RuAI Premium risk-free. Perfect for getting started.",
    features: [
      "1 active goal",
      "20 Ru conversations per day",
      "7-day check-in history",
      "7-day free trial",
    ],
    highlight: false,
    trialNote: "No commitment \u2014 cancel anytime",
  },
  {
    name: "Monthly",
    price: "$7.99",
    period: "/month",
    description: "The full RuAI experience. Most popular for committed goal-setters.",
    badge: "Most Popular",
    features: [
      "3 active goals",
      "Unlimited Ru conversations",
      "Full check-in history",
      "7-day free trial",
    ],
    highlight: true,
    trialNote: "Most users choose this plan",
  },
  {
    name: "Annual",
    price: "$59.99",
    period: "/year",
    prevPrice: "$39.99",
    equivalent: "Just $5.00/month \u2014 save 37% vs monthly",
    description: "Everything in Monthly plus best value. Save 37%.",
    badge: "Save 37%",
    badgeColor: "amber",
    features: [
      "Unlimited active goals",
      "Unlimited Ru conversations",
      "Full check-in history",
      "Smarter AI responses",
      "7-day free trial",
    ],
    highlight: false,
    trialNote: "7-day free trial included",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-text-secondary">
            All plans include a free trial. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary bg-surface shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-surface hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-bold text-white shadow-md ${
                      plan.badgeColor === "amber"
                        ? "bg-amber-500 shadow-amber-500/25"
                        : "bg-primary shadow-primary/25"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-lg font-bold text-white">{plan.name}</h3>
                <p className="min-h-[2.5rem] text-sm text-text-secondary">{plan.description}</p>
              </div>

              <div className="mb-1">
                {plan.prevPrice && (
                  <p className="mb-1 text-sm text-[#52525b] line-through">was {plan.prevPrice}</p>
                )}
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>
              <p className="mb-6 min-h-[1.25rem] text-xs text-[#71717a]">
                {plan.equivalent || "\u00A0"}
              </p>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark"
                    : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
                }`}
              >
                Start Free Trial
              </a>
              <p className="mt-3 text-center text-xs text-[#71717a]">{plan.trialNote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

