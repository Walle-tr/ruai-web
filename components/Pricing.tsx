type FeatureItem = {
  text: string;
  type: "included" | "limited" | "disabled" | "exclusive";
  highlight?: string;
};

type Plan = {
  name: string;
  price: string;
  period: string;
  prevPrice?: string;
  equivalent?: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  features: FeatureItem[];
  highlight: boolean;
  accentColor?: string;
  trialNote: string;
};

const plans: Plan[] = [
  {
    name: "Weekly",
    price: "$2.99",
    period: "/week",
    equivalent: "~$12.95/month equivalent",
    description: "Try RuAI Premium risk-free. Perfect for getting started.",
    features: [
      { text: "active goal", type: "limited", highlight: "1" },
      { text: "Ru conversations/day", type: "limited", highlight: "20" },
      { text: "check-in history", type: "limited", highlight: "7-day" },
      { text: "7-day free trial", type: "included" },
      { text: "No goal insights", type: "disabled" },
      { text: "No progress reports", type: "disabled" },
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
      { text: "active goals", type: "included", highlight: "3" },
      { text: "Ru conversations", type: "included", highlight: "Unlimited" },
      { text: "check-in history", type: "included", highlight: "Full" },
      { text: "Goal insights & analytics", type: "included" },
      { text: "7-day free trial", type: "included" },
      { text: "No progress reports", type: "disabled" },
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
    description: "Everything in Monthly plus exclusive perks. Best value.",
    badge: "Save 37%",
    badgeColor: "amber",
    features: [
      { text: "active goals", type: "exclusive", highlight: "Unlimited" },
      { text: "Ru conversations", type: "exclusive", highlight: "Unlimited" },
      { text: "check-in history", type: "exclusive", highlight: "Full" },
      { text: "Goal insights & analytics", type: "included" },
      { text: "Weekly progress reports", type: "exclusive" },
      { text: "Priority AI + early access", type: "exclusive" },
    ],
    highlight: false,
    accentColor: "purple",
    trialNote: "7-day free trial included",
  },
];

function FeatureIcon({ type }: { type: FeatureItem["type"] }) {
  if (type === "disabled") {
    return (
      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#52525b]" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  const colorClass =
    type === "limited"
      ? "text-amber-500"
      : type === "exclusive"
      ? "text-violet-400"
      : "text-primary";

  return (
    <svg className={`mt-0.5 h-5 w-5 flex-shrink-0 ${colorClass}`} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
          <p className="mt-2 text-sm font-semibold text-primary">
            Now with differentiated features per plan
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const isPurple = plan.accentColor === "purple";
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "border-primary bg-surface shadow-xl shadow-primary/10 scale-[1.02]"
                    : isPurple
                    ? "border-violet-500/40 bg-surface hover:border-violet-400/60 hover:shadow-lg hover:shadow-violet-500/10"
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
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm ${
                        feature.type === "disabled"
                          ? "text-[#52525b]"
                          : feature.type === "exclusive"
                          ? "text-violet-300 font-semibold"
                          : "text-text-secondary"
                      }`}
                    >
                      <FeatureIcon type={feature.type} />
                      <span>
                        {feature.highlight && (
                          <strong
                            className={
                              feature.type === "limited"
                                ? "text-amber-500"
                                : feature.type === "exclusive"
                                ? "text-violet-400"
                                : "text-primary"
                            }
                          >
                            {feature.highlight}{" "}
                          </strong>
                        )}
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark"
                      : isPurple
                      ? "border border-violet-500 text-violet-400 bg-[#1a1a1a] hover:bg-violet-500/10"
                      : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
                  }`}
                >
                  Start Free Trial
                </a>
                <p className="mt-3 text-center text-xs text-[#71717a]">{plan.trialNote}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
