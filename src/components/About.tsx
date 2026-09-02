const mission = [
  "Enable seamless digital payment ecosystems.",
  "Accelerate financial inclusion using technology.",
  "Build AI-driven financial service platforms.",
  "Simplify banking operations through automation.",
  "Strengthen governance and compliance for banks and fintechs.",
  "Empower businesses with secure API-based financial infrastructure.",
  "Connect banks, fintechs, enterprises and customers at scale.",
];

export default function About() {
  return (
    <section id="about" className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="label">Objective</p>
            <p className="display mt-7 text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.22]">
              To bridge the gap between financial institutions and the last-mile
              customer — with infrastructure that is secure, compliant and
              genuinely operable.
            </p>
            <p className="mt-8 max-w-2xl text-[1.06rem] leading-8 text-bone-dim">
              We build from India and deploy across Africa, the Middle East and
              Asia Pacific, adapting to each market&apos;s regulators and rails
              rather than exporting a single template. Digital payments,
              financial inclusion, operational excellence and customer
              acquisition are the outcomes we are measured on.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-rule-strong pt-7">
              <p className="label">Vision</p>
              <p className="mt-4 text-[1.1rem] leading-8 text-bone">
                To become the most trusted fintech infrastructure partner across
                emerging markets — through innovation, technology, governance
                and last-mile distribution.
              </p>
            </div>

            <div className="mt-12">
              <p className="label">Mission</p>
              <ul className="mt-5 border-t border-rule">
                {mission.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-rule py-3.5 text-[0.98rem] leading-6 text-bone-dim"
                  >
                    <span className="mono shrink-0 text-[0.8rem] text-bone-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
