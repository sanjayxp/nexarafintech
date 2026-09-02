import Link from "next/link";
import { verticals } from "@/lib/verticals";

export default function Platforms() {
  return (
    <section id="platforms" className="border-b border-rule bg-paper-2">
      <div className="container-page py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">What we build</p>
            <h2 className="display mt-6 max-w-2xl text-[clamp(2.1rem,4.4vw,3.4rem)]">
              Two platforms. One integration.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="text-[0.95rem] text-ink-soft underline decoration-rule-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            All products
          </Link>
        </div>

        <div className="mt-16 border-t border-rule-strong">
          {verticals.map((vertical, i) => {
            const capabilities = vertical.groups.flatMap((g) => g.items);
            return (
              <div
                key={vertical.slug}
                className="grid grid-cols-1 gap-8 border-b border-rule py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <p className="mono text-[0.78rem] text-ink-faint">
                    Platform {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
                    {vertical.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] italic text-accent">
                    {vertical.tagline}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <p className="max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
                    {vertical.summary}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
                    {capabilities.slice(0, 10).map((item) => (
                      <li
                        key={item}
                        className="border-b border-rule py-2.5 text-[0.9rem] text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-6">
                    <Link
                      href={`/solutions/${vertical.slug}`}
                      className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink"
                    >
                      <span className="border-b border-ink pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                        Explore {vertical.shortName}
                      </span>
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                    <span className="mono text-[0.78rem] text-ink-faint">
                      {capabilities.length} capabilities
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
