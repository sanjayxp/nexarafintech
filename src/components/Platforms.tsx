import Image from "next/image";
import Link from "next/link";
import { verticals } from "@/lib/verticals";
import { railFor } from "@/lib/services";

const rail = {
  mint: {
    bar: "bg-mint",
    text: "text-mint",
    chip: "bg-mint text-mint-deep",
    duo: "duo-mint",
  },
  saffron: {
    bar: "bg-saffron",
    text: "text-saffron",
    chip: "bg-saffron text-saffron-deep",
    duo: "duo-saffron",
  },
} as const;

export default function Platforms() {
  return (
    <section id="platforms" className="py-14 lg:py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">What we build</p>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2rem,4.4vw,3.5rem)]">
              Two platforms. One integration.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="text-[1rem] text-bone-dim underline decoration-rule-strong underline-offset-4 transition-colors hover:text-bone hover:decoration-bone"
          >
            All products
          </Link>
        </div>

        <div className="mt-14 border-t border-rule">
          {verticals.map((vertical, i) => {
            const capabilities = vertical.groups.flatMap((g) => g.items);
            const tone = rail[railFor(vertical.slug)];
            return (
              <div
                key={vertical.slug}
                className="grid grid-cols-1 gap-8 border-b border-rule py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <span className={`block h-1 w-11 rounded-sm ${tone.bar}`} />
                  <p className="mono mt-5 text-[0.84rem] text-bone-faint">
                    Platform {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display mt-3 text-[clamp(1.7rem,3vw,2.4rem)]">
                    {vertical.name}
                  </h3>
                  <p className={`mt-3 text-[1rem] ${tone.text}`}>
                    {vertical.tagline}
                  </p>

                  <div
                    className={`duo duo-lift ${tone.duo} relative mt-7 aspect-[4/3] w-full`}
                  >
                    <Image
                      src={vertical.photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <p className="max-w-2xl text-[1.08rem] leading-8 text-bone-dim">
                    {vertical.summary}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                    {capabilities.slice(0, 10).map((item) => (
                      <li
                        key={item}
                        className="border-b border-rule py-2.5 text-[0.96rem] text-bone"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/solutions/${vertical.slug}`}
                      className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-opacity hover:opacity-90 ${tone.chip}`}
                    >
                      Explore {vertical.shortName}
                      <span aria-hidden>→</span>
                    </Link>
                    <span className="mono text-[0.84rem] text-bone-faint">
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
