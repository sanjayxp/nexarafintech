import Image from "next/image";
import { testimonial } from "@/lib/content";
import Reveal from "./Reveal";

const storyStats = [
  { value: "3", label: "States live" },
  { value: "4mo", label: "Time to launch" },
  { value: "Zero", label: "Downtime during rollout" },
];

export default function Testimonial() {
  return (
    <section className="bg-brand-surface py-24">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
                <Image
                  src="/images/testimonial-portrait-v2.jpg"
                  alt="Head of Digital Banking, regional cooperative bank partner"
                  fill
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                className="text-brand-teal"
              >
                <path
                  d="M10.5 0C4.7 0 0 4.7 0 10.5c0 5.6 4.4 10.1 9.9 10.5-.3 3.3-2.6 6-5.9 6.8v.2h2.2c7.1-1.1 11.8-6.9 11.8-15C18 4.7 16.3 0 10.5 0Zm18 0c-5.8 0-10.5 4.7-10.5 10.5 0 5.6 4.4 10.1 9.9 10.5-.3 3.3-2.6 6-5.9 6.8v.2h2.2c7.1-1.1 11.8-6.9 11.8-15C36 4.7 34.3 0 28.5 0Z"
                  fill="currentColor"
                />
              </svg>
              <p className="mt-5 text-xl font-medium leading-9 text-brand-navy lg:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-brand-navy">
                  {testimonial.name}
                </p>
                <p className="text-sm text-brand-slate">{testimonial.title}</p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-brand-border pt-8">
                {storyStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-brand-navy sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-brand-slate leading-5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
