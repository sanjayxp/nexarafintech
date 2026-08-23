import { CheckCircle } from "@phosphor-icons/react/ssr";
import Reveal from "./Reveal";

const mission = [
  "Enable seamless digital payment ecosystems.",
  "Accelerate financial inclusion using technology.",
  "Build AI-driven financial service platforms.",
  "Simplify banking operations through automation.",
  "Strengthen governance and compliance for banks and fintechs.",
  "Empower businesses with secure API-based financial infrastructure.",
  "Create scalable digital ecosystems connecting banks, fintechs, enterprises, and customers.",
];

export default function About({ compact = false }: { compact?: boolean }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
        <Reveal>
          {!compact && (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Our Objective
              </h2>
              <p className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
                Trusted digital financial infrastructure
              </p>
            </>
          )}
          <p className="mt-6 text-lg leading-8 text-brand-slate first:mt-0">
            To build trusted digital financial infrastructure by enabling
            banks, financial institutions, fintech companies, and enterprises
            with secure, compliant, and technology-driven solutions that
            accelerate digital payments, financial inclusion, operational
            excellence, and customer acquisition.
          </p>
          <p className="mt-4 text-lg leading-8 text-brand-slate">
            Our objective is to bridge the gap between financial institutions
            and the last-mile customer through intelligent technology
            platforms, AI-powered solutions, digital banking infrastructure,
            payment orchestration, and strategic consulting services. We build
            from India and deploy across Africa, the Middle East, and Asia
            Pacific — adapting to each market&apos;s regulators and rails
            rather than exporting a single template.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-8">
          <div className="rounded-2xl border-l-4 border-brand-teal bg-brand-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Vision
            </h3>
            <p className="mt-2 text-brand-navy leading-7">
              To become the most trusted FinTech infrastructure and advisory
              partner across emerging markets, empowering financial
              institutions through innovation, technology, governance, and
              last-mile digital distribution.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Mission
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {mission.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-brand-slate leading-6">
                  <CheckCircle size={16} weight="duotone" className="mt-0.5 shrink-0 text-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
