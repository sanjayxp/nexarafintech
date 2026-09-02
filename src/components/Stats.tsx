import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="border-b border-rule">
      <div className="container-page">
        <dl className="grid grid-cols-1 divide-y divide-rule sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-12 sm:px-10 sm:first:pl-0 lg:last:pr-0"
            >
              <dt className="display text-[clamp(2.6rem,4.5vw,3.6rem)] leading-none text-ink">
                {stat.value}
              </dt>
              <dd className="mt-4 max-w-[15rem] text-[0.94rem] leading-6 text-ink-soft">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
