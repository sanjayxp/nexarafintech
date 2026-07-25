export default function Logo({ dark = false }: { dark?: boolean }) {
  const lineColor = dark ? "rgba(7,18,36,0.35)" : "rgba(255,255,255,0.55)";
  const nodeColor = dark ? "#0d9488" : "#5eead4";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          dark ? "bg-white" : "bg-brand-navy"
        }`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
          <line x1="6" y1="5" x2="6" y2="19" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="5" x2="18" y2="19" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="5" x2="18" y2="19" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="6" cy="5" r="2.4" fill={nodeColor} />
          <circle cx="6" cy="19" r="2.4" fill={nodeColor} />
          <circle cx="18" cy="5" r="2.4" fill={nodeColor} />
          <circle cx="18" cy="19" r="2.4" fill={nodeColor} />
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
          Banking, connected.
        </span>
      </span>
    </span>
  );
}
