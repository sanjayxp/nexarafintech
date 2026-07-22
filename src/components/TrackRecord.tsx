import { deployments } from "@/lib/content";

export default function TrackRecord() {
  return (
    <section id="track-record" className="py-24 bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
            Track Record
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            {deployments.length} representative deployments
          </p>
          <p className="mt-4 text-lg text-brand-slate">
            A sample of the programs we&apos;ve built and shipped, spanning
            every solution area and every tier of financial institution.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {deployments.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 border-t border-brand-border py-5"
            >
              <span className="text-sm font-semibold text-brand-teal tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-brand-slate">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
