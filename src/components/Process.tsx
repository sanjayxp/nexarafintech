import Reveal from "./Reveal";

const steps = [
  {
    title: "Discovery",
    description:
      "We map your existing core, the regulatory obligations in your market, and the segments you're trying to reach. You get a written scope, not a sales deck.",
    duration: "1–2 weeks",
  },
  {
    title: "Solution design",
    description:
      "Architecture, integration plan, and commercial model — including which modules you actually need and which you don't. Priced before anyone writes code.",
    duration: "2–3 weeks",
  },
  {
    title: "Build & integrate",
    description:
      "Core and API integration, agent app configuration, UAT, and any certification your regulator or network requires. Run in parallel with your own release cycle.",
    duration: "6–12 weeks",
  },
  {
    title: "Launch & scale",
    description:
      "Controlled pilot in one territory, then staged rollout. Monitoring, reconciliation, and support handed over to your team with documentation.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              How we engage
            </h2>
            <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
              From first call to live network
            </p>
            <p className="mt-4 text-lg text-brand-slate">
              A predictable path with defined checkpoints, so you know what
              happens next and who owns it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brand-border bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-4xl font-extrabold tabular-nums text-brand-teal-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-slate">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <p className="mt-6 text-sm text-brand-slate-light">
            Timelines are typical ranges for a mid-size institution and vary
            with core system, market, and regulatory scope.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
