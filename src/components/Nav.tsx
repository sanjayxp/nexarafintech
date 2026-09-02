"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { nav } from "@/lib/content";
import { verticals } from "@/lib/verticals";

const productLinks = verticals.map((v) => ({
  label: v.name,
  href: `/solutions/${v.slug}`,
}));

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ground/90 backdrop-blur">
      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="Nexara Fintech — home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 text-[0.96rem] text-bone-dim transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-mint after:transition-all after:duration-200 hover:text-bone hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[0.96rem] font-medium text-bone"
            >
              <span className="border-b border-bone pb-0.5 transition-colors group-hover:border-mint group-hover:text-mint">
                Talk to us
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="label text-bone lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-rule bg-ground lg:hidden">
          <div className="container-page py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule py-3.5 text-base text-bone"
              >
                {item.label}
              </Link>
            ))}
            {productLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule py-3 pl-4 text-[0.95rem] text-bone-dim"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center gap-2 text-base font-medium text-bone"
            >
              <span className="border-b border-bone pb-0.5">Talk to us</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
