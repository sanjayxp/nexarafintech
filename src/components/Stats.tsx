import { stats } from "@/lib/content";

const blocks = [
  { bg: "bg-mint", fg: "text-mint-deep" },
  { bg: "bg-saffron", fg: "text-saffron-deep" },
  { bg: "bg-coral", fg: "text-coral-deep" },
  { bg: "bg-sky", fg: "text-sky-deep" },
];

export default function Stats() {
  return (
    <section className="container-page my-14 lg:my-20">
      <dl className="grid grid-cols-2 gap-0.5 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const b = blocks[i % blocks.length];
          return (
            <div
              key={stat.label}
              className={`flex min-h-[210px] flex-col justify-between p-7 lg:p-8 ${b.bg} ${b.fg}`}
            >
              <dt className="display text-[clamp(2.4rem,4.6vw,3.6rem)] font-extrabold leading-none tracking-[-0.035em]">
                {stat.value}
              </dt>
              <dd className="mt-4 text-[0.95rem] leading-[1.45]">
                {stat.label}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
