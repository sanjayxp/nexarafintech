import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-white">
      <div className="container-page">
        <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-2 px-8 py-14 text-center sm:px-16">
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to talk about your banking infrastructure?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-brand-slate-light text-slate-300">
            Tell us what you&apos;re building and we&apos;ll connect you with
            a solutions engineer within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-6 py-3.5 text-sm font-semibold text-brand-navy hover:bg-teal-300 transition-colors"
          >
            Talk to our experts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
