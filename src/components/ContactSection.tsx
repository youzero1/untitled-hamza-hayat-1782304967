import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 50% at 100% 0%, rgba(11,31,58,0.06) 0%, rgba(247,247,245,0) 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:pt-4">
          <p className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-accent)] mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--color-primary)] leading-tight">
            Get in touch.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--color-muted)] leading-relaxed">
            Tell us a little about the job and we'll get back to you within one business day with next steps or a quote.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--color-primary)]/5 text-[color:var(--color-primary)] flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">Service area</p>
                <p className="text-sm text-[color:var(--color-muted)]">Servicing Greater Springfield and surrounds</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--color-primary)]/5 text-[color:var(--color-primary)] flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-[color:var(--color-primary)]">Hours</p>
                <p className="text-sm text-[color:var(--color-muted)]">Mon–Sat 7am–6pm · 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
