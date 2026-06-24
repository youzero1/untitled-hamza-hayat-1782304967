export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background treatment */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 60% at 80% 0%, rgba(30,136,229,0.10) 0%, rgba(247,247,245,0) 60%), radial-gradient(50% 50% at 0% 100%, rgba(11,31,58,0.06) 0%, rgba(247,247,245,0) 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--color-muted)] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            Available today — Greater Springfield & surrounds
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[color:var(--color-primary)] leading-[1.05]">
            Reliable plumbing, done right the first time.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
            From leaking taps to burst pipes and full bathroom fit‑outs — a licensed local plumber who turns up on time and quotes upfront, with no surprises.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-white text-base font-medium px-6 py-3 hover:bg-[color:var(--color-primary-soft)] transition-colors shadow-sm"
            >
              Request a callout
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-primary)] text-base font-medium px-6 py-3 hover:border-[color:var(--color-primary)] transition-colors"
            >
              See what we fix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
