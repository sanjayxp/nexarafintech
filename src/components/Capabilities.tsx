import {
  Lightning,
  ShieldCheck,
  StackSimple,
  PlugsConnected,
} from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";

const capabilities = [
  {
    icon: Lightning,
    title: "Live in weeks, not quarters",
    description:
      "Configure and ship a new territory, rail, or program instead of waiting on a core release cycle.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in, per market",
    description:
      "Audit trails, monitoring, and KYC/AML checks are native — configured to your regulator, not bolted on later.",
  },
  {
    icon: PlugsConnected,
    title: "Sits on your existing core",
    description:
      "Every module integrates through APIs, so you add channels and reach without a core migration.",
  },
  {
    icon: StackSimple,
    title: "Scales without re-platforming",
    description:
      "From one district to a national switch, the same architecture carries the volume as you grow.",
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-light text-brand-teal">
                    <Icon size={22} weight="duotone" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold leading-6 text-brand-navy">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
