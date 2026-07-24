import { stats } from "@/lib/content";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="border-y border-brand-border bg-white py-20">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center lg:text-left"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-brand-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
