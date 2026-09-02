import Image from "next/image";
import Link from "next/link";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="container-page">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="label">Banking &amp; payments infrastructure</p>

            <h1 className="display mt-7 text-[clamp(2.7rem,6.2vw,4.9rem)] font-extrabold">
              Money that gets
              <br />
              all the way{" "}
              <span className="underline-saffron">there</span>.
            </h1>

            <p className="mt-7 max-w-xl text-[1.18rem] leading-[1.65] text-bone-dim">
              We build the payout rails, collection accounts and agent networks
              that banks, NBFCs and fintechs use to reach customers far past the
              branch — across India, Africa, the Middle East and Asia Pacific.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-mint px-7 py-3.5 text-[1rem] font-semibold text-mint-deep transition-colors hover:bg-[#4aeeb6]"
              >
                Talk to our team
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border border-rule-strong px-7 py-3.5 text-[1rem] text-bone transition-colors hover:border-bone"
              >
                See what we build
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="duo relative aspect-[4/4.9] w-full">
              <Image
                src="/images/agent-market-payment.jpg"
                alt="A shopkeeper and a customer completing a payment on a handheld terminal at a market stall"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <span className="mono absolute bottom-0 left-0 z-[2] bg-saffron px-3.5 py-2 text-[0.75rem] uppercase tracking-[0.1em] text-saffron-deep">
                Agent-assisted payment
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <Ticker />
      </div>
    </section>
  );
}
