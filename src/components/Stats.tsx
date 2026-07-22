import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="border-y border-brand-border bg-brand-surface py-16">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-brand-slate">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
