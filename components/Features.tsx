const features = [
  {
    emoji: "\uD83C\uDFAF",
    title: "AI-Powered Goal Planning",
    description:
      "Set any financial goal and let our AI create a step-by-step plan tailored to your income and spending habits.",
  },
  {
    emoji: "\uD83D\uDCCA",
    title: "Smart Financial Insights",
    description:
      "Get real-time analysis of your spending patterns with personalized recommendations to optimize your budget.",
  },
  {
    emoji: "\uD83D\uDD25",
    title: "Daily Action Tracking",
    description:
      "Receive daily micro-actions designed to keep you on track. Small steps every day lead to big financial wins.",
  },
  {
    emoji: "\uD83E\uDD16",
    title: "Personal AI Advisor",
    description:
      "Chat with your AI financial coach anytime. Get advice based on your actual numbers, not generic tips.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            Everything you need to{" "}
            <span className="text-primary">take control</span>
          </h2>
          <p className="text-lg text-text-secondary">
            RuAI combines AI intelligence with beautiful design to make
            managing your finances simple and effective.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light/60 text-3xl transition-transform duration-300 group-hover:scale-110">
                {feature.emoji}
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
