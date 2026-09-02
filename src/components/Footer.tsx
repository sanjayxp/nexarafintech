import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Products",
    links: [
      {
        label: "Connected Banking Platform",
        href: "/solutions/connected-banking-platform",
      },
      {
        label: "Agency Banking Solutions",
        href: "/solutions/agency-banking-solutions",
      },
      { label: "All products", href: "/solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banks", href: "/industries#banks" },
      { label: "NBFCs", href: "/industries#nbfcs" },
      { label: "Microfinance", href: "/industries#mfis" },
      { label: "Fintechs", href: "/industries#fintech-startups" },
      { label: "Government & PSU", href: "/industries#government-psu" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule-strong bg-paper-2">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-xs text-[0.96rem] leading-7 text-ink-soft">
              Agency banking and connected banking infrastructure for regulated
              financial institutions across India, Africa, the Middle East and
              Asia Pacific.
            </p>
            <p className="mono mt-6 text-[0.85rem] leading-6 text-ink-faint">
              hello@nexarafintech.com
              <br />
              +91 9971886999
              <br />
              BKC, Mumbai, India
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="label">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.96rem] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <p className="label">Social</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-[0.96rem] text-ink-soft transition-colors hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[0.96rem] text-ink-soft transition-colors hover:text-ink"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[0.8rem] text-ink-faint">
            © {new Date().getFullYear()} Nexara Fintech
          </p>
          <div className="flex gap-6">
            <a href="#" className="mono text-[0.8rem] text-ink-faint hover:text-ink">
              Privacy
            </a>
            <a href="#" className="mono text-[0.8rem] text-ink-faint hover:text-ink">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
