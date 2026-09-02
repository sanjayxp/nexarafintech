import { team } from "@/lib/team";

export default function Team() {
  return (
    <section className="border-b border-rule py-24 lg:py-32">
      <div className="container-page">
        <p className="label">Leadership</p>

        <div className="mt-10 border-t border-rule-strong">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-rule py-6"
            >
              <span className="mono col-span-2 text-[0.85rem] text-ink-faint sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display col-span-10 text-[1.6rem] leading-none sm:col-span-5">
                {member.name}
              </h3>
              <p className="col-span-12 text-[0.98rem] text-ink-soft sm:col-span-6">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <p className="mono mt-6 text-[0.82rem] text-ink-faint">
          Founder bios and photography to follow.
        </p>
      </div>
    </section>
  );
}
