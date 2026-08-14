import Link from "next/link";
import Logo from "./Logo";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.16 8.25h4.31v2.01h.06c.6-1.13 2.08-2.33 4.28-2.33 4.58 0 5.42 3.02 5.42 6.94V23h-4.5v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.78-2.62 3.6V23h-4.5V8.25z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 1.75h3.68l-8.04 9.19L24 22.25h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.75h7.59l5.24 6.93 6.07-6.93Zm-1.29 18.38h2.04L6.5 3.75H4.3l13.31 16.38Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Business Units",
    links: [
      { label: "Connected Banking Platform", href: "/solutions/connected-banking-platform" },
      { label: "Agency Banking Solutions", href: "/solutions/agency-banking-solutions" },
      { label: "Consulting & Advisory", href: "/solutions/consulting-advisory" },
      { label: "All business units", href: "/solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banks", href: "/industries#banks" },
      { label: "NBFCs", href: "/industries#nbfcs" },
      { label: "Microfinance Institutions", href: "/industries#mfis" },
      { label: "Fintech Startups", href: "/industries#fintech-startups" },
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
    <footer className="bg-brand-navy text-stone-300">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-6 text-stone-400">
              Agency banking, payments, and connected banking infrastructure
              for regulated financial institutions across India.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} Nexara Fintech. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-stone-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-stone-400 hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
