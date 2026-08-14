import Image from "next/image";
import Link from "next/link";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/ssr";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  icon: Icon,
  photo,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  icon?: PhosphorIcon;
  photo?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white text-brand-navy">
      <div className="bg-hero-gradient pointer-events-none absolute inset-0" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />

      {photo && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <div className="relative h-full w-full">
            <Image
              src={photo}
              alt=""
              fill
              sizes="42vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(42,23,16,0.18) 0%, rgba(210,73,31,0.12) 55%, transparent 100%)",
                mixBlendMode: "multiply",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, #fff8f3 0%, transparent 18%)",
              }}
            />
          </div>
        </div>
      )}

      {Icon && !photo && (
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="animate-float-card absolute right-[8%] top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl bg-brand-teal-light ring-1 ring-brand-teal/20"
          >
            <Icon size={28} weight="duotone" className="text-brand-teal" />
          </div>
        </div>
      )}

      <div className="container-page relative py-20 lg:py-24">
        <div className={photo ? "max-w-2xl lg:max-w-xl" : ""}>
          {breadcrumb && (
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-brand-slate-light">
              <Link href="/" className="hover:text-brand-navy transition-colors">
                Home
              </Link>
              {breadcrumb.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <CaretRight size={14} />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-brand-navy transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-brand-navy">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
            {eyebrow}
          </p>
          <h1
            className={`mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
              photo ? "" : "max-w-3xl"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-5 text-lg leading-8 text-brand-slate ${
                photo ? "" : "max-w-2xl"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
