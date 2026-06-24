type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: 'Leak repairs',
    description: 'Dripping taps, pinhole pipe leaks and slab leaks tracked down and fixed.',
    icon: (
      <>
        <path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
      </>
    ),
  },
  {
    title: 'Blocked drains',
    description: 'High‑pressure jetting and CCTV inspection to clear stubborn blockages fast.',
    icon: (
      <>
        <path d="M3 7h18" />
        <path d="M6 7v13" />
        <path d="M18 7v13" />
        <path d="M3 20h18" />
      </>
    ),
  },
  {
    title: 'Hot water systems',
    description: 'Repairs and replacements for gas, electric and heat‑pump units.',
    icon: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="4" y="6" width="16" height="16" rx="3" />
        <path d="M9 14a3 3 0 0 0 6 0c0-2-3-5-3-5s-3 3-3 5Z" />
      </>
    ),
  },
  {
    title: 'Tap & toilet repairs',
    description: 'Washers, cartridges, cisterns and full replacements — neat and quick.',
    icon: (
      <>
        <path d="M9 3h6v4H9z" />
        <path d="M12 7v3" />
        <path d="M6 13h12l-1 8H7Z" />
      </>
    ),
  },
  {
    title: 'Bathroom renovations',
    description: 'Full bathroom rough‑ins and fit‑offs, working with your builder or solo.',
    icon: (
      <>
        <path d="M4 12V6a2 2 0 0 1 2-2h2" />
        <path d="M2 12h20" />
        <path d="M5 12v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4" />
        <path d="M8 8h.01" />
      </>
    ),
  },
  {
    title: 'Emergency callouts',
    description: 'Burst pipes and after‑hours flooding — fast response, day or night.',
    icon: (
      <>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-accent)] mb-3">
          What we fix
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--color-primary)]">
          Everyday plumbing, handled properly.
        </h2>
        <p className="mt-4 text-[color:var(--color-muted)] text-lg">
          If it carries water or waste, chances are we can sort it. Not sure? Just ask.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-[color:var(--color-border)] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(11,31,58,0.18)] hover:border-[color:var(--color-primary)]/30"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-primary)]/5 text-[color:var(--color-primary)] mb-5 group-hover:bg-[color:var(--color-accent)]/10 group-hover:text-[color:var(--color-accent)] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                {s.icon}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[color:var(--color-primary)] mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
