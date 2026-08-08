"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/ssr";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-brand-navy/95 px-4 shadow-lg shadow-brand-navy/10 backdrop-blur lg:px-6">
          <Link href="/" className="shrink-0">
            <Logo dark />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 hover:text-brand-teal-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-teal-300 transition-colors"
            >
              Request a Demo
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg">
            <div className="flex flex-col gap-1 p-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-brand-slate hover:bg-brand-surface hover:text-brand-navy"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white"
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
