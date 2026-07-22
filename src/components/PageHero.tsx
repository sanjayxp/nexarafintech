import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-brand-navy text-white">
      <div className="container-page py-16 lg:py-20">
        {breadcrumb && (
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumb.map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <ChevronRight size={14} />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-200">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
