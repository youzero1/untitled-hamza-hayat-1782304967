const stats = [
  { value: '15+', label: 'years on the tools' },
  { value: '2,000+', label: 'jobs completed' },
  { value: 'Same‑day', label: 'response on most callouts' },
];

export default function About() {
  return (
    <section id="about" className="bg-white border-y border-[color:var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-accent)] mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--color-primary)] leading-tight">
            A local plumber you can actually get on the phone.
          </h2>
          <div className="mt-6 space-y-4 text-[color:var(--color-muted)] text-lg leading-relaxed">
            <p>
              Clearflow Plumbing is a family‑run trade business serving Greater Springfield and the surrounding suburbs. Every job, from a wobbly toilet seat to a full bathroom refit, is handled personally — no call centres, no subcontractors you've never met.
            </p>
            <p>
              We quote before we start, explain what we're doing as we go, and leave the place cleaner than we found it. That's it. That's the trick.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-6 flex items-baseline justify-between gap-6"
            >
              <span className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--color-primary)]">
                {s.value}
              </span>
              <span className="text-sm md:text-base text-[color:var(--color-muted)] text-right">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
