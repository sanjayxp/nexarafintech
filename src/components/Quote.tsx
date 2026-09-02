import Image from "next/image";
import { testimonial } from "@/lib/content";

export default function Quote() {
  return (
    <section className="relative my-24 flex min-h-[520px] items-end overflow-hidden lg:my-32">
      <div className="absolute inset-0">
        <div className="duo duo-cool duo-deep h-full w-full">
          <Image
            src="/images/merchant-counter.jpg"
            alt="A merchant and a customer at a shop counter completing a card payment"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,32,28,.97) 4%, rgba(8,32,28,.82) 46%, rgba(8,32,28,.58) 100%)",
        }}
      />

      <div className="container-page relative z-[3] py-20">
        <p className="label">Proof</p>
        <blockquote className="display mt-6 max-w-[20em] text-[clamp(1.5rem,3vw,2.35rem)] font-medium leading-[1.28]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-7 flex flex-wrap items-center gap-3 text-[0.98rem] text-bone-dim">
          <span>{testimonial.name}</span>
          <span aria-hidden className="text-saffron">
            /
          </span>
          <span className="mono text-[0.86rem]">{testimonial.title}</span>
        </div>
      </div>
    </section>
  );
}
