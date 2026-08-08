import Link from "next/link";
import { Lightning, ShieldCheck, TrendUp, ArrowRight } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";

const capabilities = [
  {
    icon: Lightning,
    title: "Move at agent speed",
    description:
      "Launch a new agency banking territory, payment rail, or card program in weeks. Modular services mean you configure and ship instead of waiting on a core release cycle.",
    href: "/solutions",
    linkLabel: "Explore our solutions",
    gradient: "linear-gradient(120deg, #0f2444 0%, #0ea5a3 140%)",
  },
  {
    icon: ShieldCheck,
    title: "Operate inside the compliance line",
    description:
      "Every module is built against RBI and NPCI frameworks from day one — audit trails, reporting, and KYC/AML checks are native to the platform, not bolted on after a regulator asks.",
    href: "/solutions/agency-banking-solutions",
    linkLabel: "See risk management tooling",
    gradient: "linear-gradient(120deg, #0f2444 0%, #1c4ed8 140%)",
  },
  {
    icon: TrendUp,
    title: "Scale without re-platforming",
    description:
      "From a single-district agent network to a national payment switch, the same architecture carries the volume. No forced migration when your institution outgrows the pilot.",
    href: "/insights/payment-switch-design-for-upi-scale",
    linkLabel: "Read how we design for scale",
    gradient: "linear-gradient(120deg, #0f2444 0%, #334155 140%)",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-brand-navy py-24">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Why Nexara
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built to move fast without breaking compliance
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 100}>
                <div
                  className="grid grid-cols-1 gap-8 rounded-2xl p-8 lg:grid-cols-3 lg:items-center lg:p-10"
                  style={{ background: cap.gradient }}
                >
                  <div className="lg:col-span-2">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {cap.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-slate-300 leading-7">
                      {cap.description}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <Link
                      href={cap.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-2.5 transition-all"
                    >
                      {cap.linkLabel}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={capabilities.length * 100}>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 p-8 text-center sm:flex-row sm:text-left lg:p-10">
              <div>
                <p className="text-xl font-semibold text-white">
                  Ready to take the next step?
                </p>
                <p className="mt-1 text-slate-300">
                  Talk to us about the network, product, or migration you&apos;re planning.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-teal-300 transition-colors"
              >
                Book a demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
