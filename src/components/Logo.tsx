export default function Logo({ dark = false }: { dark?: boolean }) {
  const mainColor = dark ? "#0b1b3a" : "#ffffff";
  const accentColor = dark ? "#4f46e5" : "#a5b4fc";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          dark ? "bg-white" : "bg-brand-navy"
        }`}
      >
        <svg viewBox="0 0 40 40" width="22" height="22" aria-hidden>
          <polyline points="8,8 19,20 8,32" stroke={mainColor} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="20,8 31,20 20,32" stroke={accentColor} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-semibold tracking-tight text-lg ${
            dark ? "text-white" : "text-brand-navy"
          }`}
        >
          Nexara<span className="text-brand-teal">Fintech</span>
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-wider ${
            dark ? "text-slate-400" : "text-brand-slate-light"
          }`}
        >
          Technology. Payments. Inclusion.
        </span>
      </span>
    </span>
  );
}
