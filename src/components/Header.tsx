import { useState } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-bg)]/85 backdrop-blur-md border-b border-[color:var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--color-primary)] text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M7 2v6a5 5 0 0 0 10 0V2" />
              <path d="M12 13v9" />
              <path d="M8 22h8" />
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-[color:var(--color-primary)] text-lg">
            Clearflow Plumbing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[color:var(--color-primary)] text-white text-sm font-medium px-4 py-2 hover:bg-[color:var(--color-primary-soft)] transition-colors"
          >
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[color:var(--color-primary)] hover:bg-black/5"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-[color:var(--color-text)] hover:text-[color:var(--color-primary)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-white text-sm font-medium px-4 py-2.5"
            >
              Get a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
