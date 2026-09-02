export default function Logo({ tone = "bone" }: { tone?: "bone" | "deep" }) {
  const word = tone === "deep" ? "#08201c" : "#eef5f0";
  const mark = tone === "deep" ? "#08201c" : "#2ae0a4";

  return (
    <span className="inline-flex items-baseline gap-2.5">
      <svg
        viewBox="0 0 40 40"
        width="18"
        height="18"
        aria-hidden
        className="translate-y-[1px]"
      >
        <polyline
          points="9,7 21,20 9,33"
          stroke={word}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="22,7 34,20 22,33"
          stroke={mark}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="display text-[1.45rem] leading-none"
        style={{ color: word }}
      >
        Nexara
      </span>
    </span>
  );
}
