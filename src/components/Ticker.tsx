const events: { tone: string; text: string }[] = [
  { tone: "var(--mint)", text: "PAYOUT · ₹25,000 · IMPS · settled 8s" },
  { tone: "var(--saffron)", text: "AePS · cash-out · Nashik · approved" },
  { tone: "var(--sky)", text: "COLLECTION · virtual a/c · reconciled" },
  { tone: "var(--coral)", text: "REMITTANCE · KES 12,400 · Nairobi" },
  { tone: "var(--mint)", text: "QR · merchant settle · T+0" },
  { tone: "var(--saffron)", text: "PENNY-DROP · beneficiary verified" },
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-rule py-3.5"
      aria-label="Illustrative sample of transaction types the platform handles"
    >
      <div className="animate-ticker flex w-max gap-11 whitespace-nowrap">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex gap-11" aria-hidden={pass === 1}>
            {events.map((e) => (
              <span
                key={e.text}
                className="mono flex items-center gap-3 text-[0.84rem] text-bone-dim"
              >
                <i
                  className="inline-block h-[7px] w-[7px] rounded-full"
                  style={{ background: e.tone }}
                />
                {e.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
