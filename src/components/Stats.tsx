import { stats } from "@/lib/content";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20">
      <div className="bg-glow-teal pointer-events-none absolute -right-20 -top-20 h-[26rem] w-[26rem]" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          <Reveal className="lg:col-span-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Nexara in numbers
              </h2>
              <p className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                One platform for every financial need
              </p>
              <p className="mt-4 leading-7 text-stone-300">
                Built for institutions serving urban, semi-urban, and rural
                customers — where reliability matters more than novelty.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
