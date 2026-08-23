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
    color: "#d2491f",
  },
  {
    icon: ShieldCheck,
    title: "Operate inside the compliance line",
    description:
      "Audit trails, reporting, and KYC/AML checks are native to the platform, not bolted on after a regulator asks — configured to your market's central bank and scheme rules, from RBI and NPCI in India to their equivalents elsewhere.",
    href: "/solutions/agency-banking-solutions",
    linkLabel: "See risk management tooling",
    color: "#9a3412",
  },
  {
    icon: TrendUp,
    title: "Scale without re-platforming",
    description:
      "From a single-district agent network to a national payment switch, the same architecture carries the volume. No forced migration when your institution outgrows the pilot.",
    href: "/solutions/connected-banking-platform",
    linkLabel: "See the platform",
    color: "#d97706",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-brand-surface py-24">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Why Nexara
            </h2>
            <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
              Built to move fast without breaking compliance
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 100}>
                <div
                  className="group grid grid-cols-1 gap-8 rounded-2xl border border-brand-border border-l-4 bg-white p-8 transition-shadow hover:shadow-lg lg:grid-cols-3 lg:items-center lg:p-10"
                  style={{ borderLeftColor: cap.color }}
                >
                  <div className="lg:col-span-2">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${cap.color}1A`,
                        color: cap.color,
                      }}
                    >
                      <Icon size={22} weight="duotone" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-brand-navy">
                      {cap.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-brand-slate">
                      {cap.description}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <Link
                      href={cap.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
                      style={{ color: cap.color }}
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
            <div className="mt-5 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-navy p-8 text-center sm:flex-row sm:text-left lg:p-10">
              <div>
                <p className="text-xl font-semibold text-white">
                  Ready to take the next step?
                </p>
                <p className="mt-1 text-stone-300">
                  Talk to us about the network, product, or migration you&apos;re planning.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b23d19]"
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
