export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[color:var(--color-primary)] text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M7 2v6a5 5 0 0 0 10 0V2" />
              <path d="M12 13v9" />
              <path d="M8 22h8" />
            </svg>
          </span>
          <span className="font-semibold text-[color:var(--color-primary)]">Clearflow Plumbing</span>
        </div>
        <p className="text-sm text-[color:var(--color-muted)]">
          Servicing Greater Springfield and surrounds
        </p>
        <p className="text-sm text-[color:var(--color-muted)]">
          © {year} Clearflow Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
