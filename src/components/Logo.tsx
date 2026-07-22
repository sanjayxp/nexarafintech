export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-lg">
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${
          dark ? "bg-white" : "bg-brand-navy"
        }`}
      >
        <span
          className={`h-3.5 w-3.5 rounded-[3px] ${
            dark ? "bg-brand-navy" : "bg-brand-teal"
          }`}
        />
      </span>
      <span className={dark ? "text-white" : "text-brand-navy"}>
        NecNexara<span className="text-brand-teal">Fintech</span>
      </span>
    </span>
  );
}
