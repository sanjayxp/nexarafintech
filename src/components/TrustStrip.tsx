import { industries } from "@/lib/industries";

export default function TrustStrip() {
  const items = [...industries, ...industries];

  return (
    <section className="border-b border-brand-border bg-white py-8">
      <div className="container-page">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-brand-slate-light">
          Built for every tier of India&apos;s financial system
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-10">
          {items.map(({ slug, icon: Icon, name }, i) => (
            <div
              key={`${slug}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap text-brand-slate-light"
            >
              <Icon size={18} className="shrink-0" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
