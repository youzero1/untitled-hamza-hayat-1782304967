const items = [
  {
    label: 'Licensed & insured',
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    ),
  },
  {
    label: '24/7 emergency callouts',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    label: 'Upfront pricing',
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 6H9.5a3.5 3.5 0 1 0 0 7H14a3.5 3.5 0 1 1 0 7H6" />
      </>
    ),
  },
  {
    label: 'Local family business',
    icon: (
      <>
        <path d="M3 12 12 3l9 9" />
        <path d="M5 10v10h14V10" />
      </>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-[color:var(--color-accent)] flex-shrink-0"
            >
              {item.icon}
            </svg>
            <span className="text-sm font-medium text-[color:var(--color-text)]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
