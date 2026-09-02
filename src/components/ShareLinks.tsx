function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.16 8.25h4.31v2.01h.06c.6-1.13 2.08-2.33 4.28-2.33 4.58 0 5.42 3.02 5.42 6.94V23h-4.5v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.78-2.62 3.6V23h-4.5V8.25z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 1.75h3.68l-8.04 9.19L24 22.25h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.75h7.59l5.24 6.93 6.07-6.93Zm-1.29 18.38h2.04L6.5 3.75H4.3l13.31 16.38Z" />
    </svg>
  );
}

export default function ShareLinks({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedinIcon,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-[0.95rem] font-medium text-bone-dim">Share</span>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rule text-bone hover:border-mint hover:text-mint transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
