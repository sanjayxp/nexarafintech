import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";

export default function CtaBanner() {
  return (
    <section className="bg-white pb-24">
      <div className="container-page">
        <div className="flex justify-center rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-2 px-8 py-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#4338ca]"
          >
            Talk to our experts
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
