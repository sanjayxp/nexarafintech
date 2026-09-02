import { testimonial } from "@/lib/content";

export default function Quote() {
  return (
    <section className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <figure className="mx-auto max-w-4xl">
          <blockquote className="display text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.24]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule pt-6">
            <span className="text-[0.95rem] text-ink">{testimonial.name}</span>
            <span aria-hidden className="text-ink-faint">
              /
            </span>
            <span className="mono text-[0.78rem] text-ink-faint">
              {testimonial.title}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
