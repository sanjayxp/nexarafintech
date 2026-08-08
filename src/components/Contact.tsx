"use client";

import { useState, FormEvent } from "react";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/ssr";
import { verticals } from "@/lib/verticals";
import Reveal from "./Reveal";

export default function Contact({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-brand-surface">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          {!compact && (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Contact
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy">
                Let&apos;s build your banking rail
              </p>
            </>
          )}
          {!compact && (
            <p className="mt-4 text-brand-slate leading-7">
              Whether you&apos;re scoping a new agency banking network or
              upgrading a payment switch, our solutions team can walk you
              through architecture, compliance, and timelines.
            </p>
          )}

          <div className="mt-8 flex flex-col gap-4 first:mt-0">
            <div className="flex items-center gap-3 text-sm text-brand-navy">
              <EnvelopeSimple size={18} weight="duotone" className="text-brand-teal" />
              hello@nexarafintech.com
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-navy">
              <Phone size={18} weight="duotone" className="text-brand-teal" />
              +91 9971886999
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-navy">
              <MapPin size={18} weight="duotone" className="text-brand-teal" />
              BKC, Mumbai, Maharashtra, India
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-brand-border bg-white p-10 text-center">
              <p className="text-xl font-semibold text-brand-navy">
                Thanks — we&apos;ve got it.
              </p>
              <p className="mt-2 text-brand-slate">
                A solutions engineer will reach out within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-brand-border bg-white p-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-brand-navy">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-brand-border px-3 py-2.5 text-sm text-brand-navy placeholder:text-brand-slate-light focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-brand-border px-3 py-2.5 text-sm text-brand-navy placeholder:text-brand-slate-light focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    placeholder="jane@bank.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-md border border-brand-border px-3 py-2.5 text-sm text-brand-navy placeholder:text-brand-slate-light focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    placeholder="Organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy">
                    Area of interest
                  </label>
                  <select
                    className="mt-2 w-full rounded-md border border-brand-border px-3 py-2.5 text-sm text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a solution area
                    </option>
                    {verticals.map((vertical) => (
                      <option key={vertical.slug}>{vertical.shortName}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brand-navy">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-md border border-brand-border px-3 py-2.5 text-sm text-brand-navy placeholder:text-brand-slate-light focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
                    placeholder="What are you looking to build?"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy-2 transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
