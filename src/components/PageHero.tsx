import Link from "next/link";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/ssr";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  icon?: PhosphorIcon;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="bg-hero-gradient pointer-events-none absolute inset-0" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" />

      {Icon && (
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="animate-float-card absolute right-[8%] top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20"
          >
            <Icon size={28} weight="duotone" className="text-brand-teal-light" />
          </div>
        </div>
      )}

      <div className="container-page relative py-20 lg:py-24">
        {breadcrumb && (
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumb.map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <CaretRight size={14} />
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
