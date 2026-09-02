export default function Logo({ onDark = false }: { onDark?: boolean }) {
  const ink = onDark ? "#faf8f4" : "#16171b";
  const accent = onDark ? "#7fbfa1" : "#14563c";

  return (
    <span className="inline-flex items-baseline gap-2.5">
      <svg
        viewBox="0 0 40 40"
        width="17"
        height="17"
        aria-hidden
        className="translate-y-[1px]"
      >
        <polyline
          points="9,7 21,20 9,33"
          stroke={ink}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="22,7 34,20 22,33"
          stroke={accent}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="display text-[1.4rem] leading-none" style={{ color: ink }}>
        Nexara
      </span>
    </span>
  );
}
