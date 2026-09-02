import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  meta,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  meta?: { term: string; value: string }[];
}) {
  return (
    <section className="border-b border-rule">
      <div className="container-page">
        {breadcrumb && (
          <nav className="flex flex-wrap items-center gap-2 pt-8">
            <Link
              href="/"
              className="mono text-[0.8rem] text-bone-faint transition-colors hover:text-bone"
            >
              Home
            </Link>
            {breadcrumb.map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <span aria-hidden className="text-bone-faint">
                  /
                </span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mono text-[0.8rem] text-bone-faint transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="mono text-[0.8rem] text-bone">
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 gap-10 pb-16 pt-12 lg:grid-cols-12 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-8">
            <p className="label">{eyebrow}</p>
            <h1 className="display mt-6 text-[clamp(2.4rem,5.5vw,4.4rem)]">
              {title}
            </h1>
          </div>
          {description && (
            <div className="lg:col-span-4 lg:pt-16">
              <p className="text-[1.06rem] leading-8 text-bone-dim">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>

      {meta && meta.length > 0 && (
        <div className="border-t border-rule">
          <div className="container-page">
            <dl className="grid grid-cols-1 divide-y divide-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {meta.map((m) => (
                <div
                  key={m.term}
                  className="py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0"
                >
                  <dt className="label">{m.term}</dt>
                  <dd className="mt-2 text-[1rem] text-bone">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </section>
  );
}
