"use client";

import { useState, FormEvent } from "react";
import { verticals } from "@/lib/verticals";
import { markets } from "@/lib/markets";

const field =
  "mt-2 w-full border-0 border-b border-rule-strong bg-transparent px-0 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none focus:ring-0";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="label">Get in touch</p>
            <h2 className="display mt-6 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              Tell us what
              <br />
              you&apos;re building.
            </h2>

            <dl className="mt-12 border-t border-rule-strong">
              <div className="border-b border-rule py-4">
                <dt className="label">Email</dt>
                <dd className="mono mt-1.5 text-[0.9rem] text-ink">
                  hello@nexarafintech.com
                </dd>
              </div>
              <div className="border-b border-rule py-4">
                <dt className="label">Phone</dt>
                <dd className="mono mt-1.5 text-[0.9rem] text-ink">
                  +91 9971886999
                </dd>
              </div>
              <div className="border-b border-rule py-4">
                <dt className="label">Office</dt>
                <dd className="mt-1.5 text-[0.9rem] leading-6 text-ink">
                  BKC, Mumbai, India
                  <span className="mt-1 block text-ink-faint">
                    Clients across India, Africa, the Middle East and APAC
                  </span>
                </dd>
              </div>
              <div className="border-b border-rule py-4">
                <dt className="label">Response</dt>
                <dd className="mt-1.5 text-[0.9rem] leading-6 text-ink-soft">
                  Within one business day, IST.
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col justify-center border-t border-rule-strong">
                <p className="display mt-10 text-[2rem]">Thank you.</p>
                <p className="mt-3 text-[0.98rem] text-ink-soft">
                  A solutions engineer will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border-t border-rule-strong pt-10">
                <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={field}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="email">
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={field}
                      placeholder="jane@bank.com"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="org">
                      Organisation
                    </label>
                    <input
                      id="org"
                      type="text"
                      className={field}
                      placeholder="Institution name"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="interest">
                      Area of interest
                    </label>
                    <select id="interest" className={field} defaultValue="">
                      <option value="" disabled>
                        Select
                      </option>
                      {verticals.map((v) => (
                        <option key={v.slug}>{v.shortName}</option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor="market">
                      Market
                    </label>
                    <select id="market" className={field} defaultValue="">
                      <option value="" disabled>
                        Where are you operating?
                      </option>
                      {markets.map((m) => (
                        <option key={m.region}>{m.region}</option>
                      ))}
                      <option>Other / multiple markets</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor="message">
                      What are you building?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={field}
                      placeholder="A short description helps us route this properly."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-10 inline-flex items-center gap-2 text-base font-medium text-ink"
                >
                  <span className="border-b border-ink pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
                    Send message
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
