import { ShieldCheck, Zap, Layers3 } from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "One integration, full stack",
    description:
      "Agency banking, payments, cards and compliance run on a single API layer instead of a patchwork of vendors.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-native",
    description:
      "Built around RBI and NPCI frameworks from day one, with audit trails and reporting your compliance team can rely on.",
  },
  {
    icon: Zap,
    title: "Fast to deploy",
    description:
      "Modular architecture and pre-built connectors get most institutions live in weeks, not the industry-standard quarters.",
  },
];

export default function About({ compact = false }: { compact?: boolean }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          {!compact && (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                About Nexara
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
                Infrastructure for the next billion banking relationships
              </p>
            </>
          )}
          <p className="mt-6 text-lg leading-8 text-brand-slate first:mt-0">
            Nexara Fintech builds the connective tissue between core
            banking systems and the last mile — agents, merchants,
            wallets, and payment rails. We work exclusively with regulated
            financial institutions, which means every product on our
            platform is designed around compliance, auditability, and
            uptime first, features second.
          </p>
          <p className="mt-4 text-lg leading-8 text-brand-slate">
            Our teams sit alongside client technology and compliance
            functions from scoping through go-live, and stay on for ongoing
            operations, monitoring, and regulatory updates.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-5">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-brand-slate">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
