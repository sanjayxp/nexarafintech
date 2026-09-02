"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X, CaretDown } from "@phosphor-icons/react/ssr";
import Logo from "./Logo";
import { nav } from "@/lib/content";
import { verticals } from "@/lib/verticals";
import { industries } from "@/lib/industries";

const dropdowns: Record<string, { label: string; href: string }[]> = {
  "/solutions": [
    ...verticals.map((v) => ({ label: v.name, href: `/solutions/${v.slug}` })),
    { label: "All Products", href: "/solutions" },
  ],
  "/industries": [
    ...industries.map((i) => ({ label: i.name, href: `/industries#${i.slug}` })),
    { label: "All Industries", href: "/industries" },
  ],
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between rounded-full border border-brand-border bg-white/95 px-4 shadow-lg shadow-brand-navy/5 backdrop-blur lg:px-6">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const children = dropdowns[item.href];
              if (!children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-brand-slate hover:text-brand-teal transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-brand-slate hover:text-brand-teal transition-colors"
                  >
                    {item.label}
                    <CaretDown
                      size={12}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-brand-border bg-white p-2 shadow-xl">
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-brand-surface transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca] transition-colors"
            >
              Request a Demo
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-brand-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg">
            <div className="flex flex-col gap-1 p-4">
              {nav.map((item) => {
                const children = dropdowns[item.href];
                if (!children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-2.5 text-sm font-medium text-brand-slate hover:bg-brand-surface hover:text-brand-navy"
                    >
                      {item.label}
                    </Link>
                  );
                }
                const isExpanded = expandedMobile === item.href;
                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedMobile(isExpanded ? null : item.href)
                      }
                      className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-sm font-medium text-brand-slate hover:bg-brand-surface hover:text-brand-navy"
                    >
                      {item.label}
                      <CaretDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="ml-2 flex flex-col gap-1 border-l border-brand-border pl-3">
                        {children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-md px-2 py-2 text-sm text-brand-slate hover:bg-brand-surface hover:text-brand-navy"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-teal px-4 py-2.5 text-sm font-semibold text-white"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
