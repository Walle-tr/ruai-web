const plans = [
  {
    name: "Weekly",
    price: "$2.99",
    period: "/week",
    description: "Perfect to try RuAI risk-free",
    features: [
      "Full AI financial coaching",
      "Unlimited goal tracking",
      "Daily action steps",
      "Smart insights",
    ],
    highlight: false,
  },
  {
    name: "Monthly",
    price: "$7.99",
    period: "/month",
    description: "Most popular for committed savers",
    badge: "Most Popular",
    features: [
      "Everything in Weekly",
      "Priority AI responses",
      "Advanced analytics",
      "Export financial reports",
    ],
    highlight: true,
  },
  {
    name: "Yearly",
    price: "$39.99",
    period: "/year",
    description: "Best value for long-term goals",
    badge: "Save 58%",
    features: [
      "Everything in Monthly",
      "Exclusive yearly insights",
      "Early access to new features",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-text-secondary">
            All plans include a free trial. Cancel anytime, no questions asked.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary bg-white shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-white hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-md shadow-primary/25">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-lg font-bold text-dark">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-dark">
                  {plan.price}
                </span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
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
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark"
                    : "bg-gray-100 text-dark hover:bg-gray-200"
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
