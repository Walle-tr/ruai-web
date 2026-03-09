const features = [
  {
    emoji: "📋",
    title: "30-second check-in",
    description:
      "Every day Ru asks you two questions: how much did you earn? How much did you spend? Green if you earn, red if you spend. No categories, no budgets, no complications.",
  },
  {
    emoji: "📍",
    title: "Ru tells you where you stand",
    description:
      'After each report, Ru calculates if you\'re getting closer or further from your goal. Not just a number — a clear message: "Today you got $75 closer. You\'re on an 8-day streak."',
  },
  {
    emoji: "✨",
    title: "Clean day = day won",
    description:
      "Didn't spend anything today? That counts too. Ru celebrates every no-spend day as direct progress toward your goal. Not spending is just as powerful as earning.",
  },
  {
    emoji: "🎯",
    title: "Your goal, visualized",
    description:
      "A progress bar that moves with every report. See in real time how far or close you are — and how many days are left if you keep this pace.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Simple by design.{" "}
            <span className="text-primary">Powerful inside.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            No complicated dashboards. No spreadsheets. Just your day,
            your goal, and Ru telling you how you&#39;re doing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                {feature.emoji}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
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
