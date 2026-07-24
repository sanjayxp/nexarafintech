import { team } from "@/lib/team";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Leadership
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
              The team behind Nexara
            </p>
            <p className="mt-4 text-lg text-brand-slate">
              Placeholder profiles — real founder photos and bios go here
              shortly.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <div className="rounded-2xl border border-brand-border bg-white p-6 text-center">
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-semibold text-white"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-base font-semibold text-brand-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-slate">
                  {member.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
