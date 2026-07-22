import { testimonial } from "@/lib/content";

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-border bg-brand-surface p-10 text-center lg:p-14">
          <svg
            width="36"
            height="28"
            viewBox="0 0 36 28"
            fill="none"
            className="mx-auto text-brand-teal"
          >
            <path
              d="M10.5 0C4.7 0 0 4.7 0 10.5c0 5.6 4.4 10.1 9.9 10.5-.3 3.3-2.6 6-5.9 6.8v.2h2.2c7.1-1.1 11.8-6.9 11.8-15C18 4.7 16.3 0 10.5 0Zm18 0c-5.8 0-10.5 4.7-10.5 10.5 0 5.6 4.4 10.1 9.9 10.5-.3 3.3-2.6 6-5.9 6.8v.2h2.2c7.1-1.1 11.8-6.9 11.8-15C36 4.7 34.3 0 28.5 0Z"
              fill="currentColor"
            />
          </svg>
          <p className="mt-6 text-xl font-medium leading-9 text-brand-navy lg:text-2xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-11 w-11 rounded-full bg-brand-navy/10" />
            <div className="text-left">
              <p className="text-sm font-semibold text-brand-navy">
                {testimonial.name}
              </p>
              <p className="text-sm text-brand-slate">{testimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
