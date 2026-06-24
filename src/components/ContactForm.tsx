import { useContactForm } from '@/hooks/useContactForm';
import type { ContactFormData } from '@/types/contact';

type FieldProps = {
  id: keyof ContactFormData;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  optional?: boolean;
};

export default function ContactForm() {
  const { values, errors, touched, status, setField, blurField, handleSubmit, reset } =
    useContactForm();

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-8 md:p-10 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] mb-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[color:var(--color-primary)]">
          Thanks — we'll be in touch within 1 business day.
        </h3>
        <p className="mt-3 text-[color:var(--color-muted)]">
          For anything urgent (burst pipe, no hot water, flooding), please mention "urgent" in your follow‑up so we can prioritise.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm font-medium text-[color:var(--color-accent)] hover:text-[color:var(--color-accent-hover)] underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const renderField = ({ id, label, type = 'text', placeholder, multiline, optional }: FieldProps) => {
    const value = values[id];
    const error = touched[id] ? errors[id] : undefined;
    const baseClasses =
      'w-full rounded-xl border bg-white px-4 py-3 text-[color:var(--color-text)] placeholder:text-[color:var(--color-muted)]/70 outline-none transition-colors focus:border-[color:var(--color-accent)] focus:ring-4 focus:ring-[color:var(--color-accent)]/15';
    const borderClass = error
      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
      : 'border-[color:var(--color-border)]';

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-[color:var(--color-primary)] mb-2">
          {label}
          {optional && <span className="ml-1 text-[color:var(--color-muted)] font-normal">(optional)</span>}
        </label>
        {multiline ? (
          <textarea
            id={id}
            name={id}
            rows={5}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setField(id, e.target.value)}
            onBlur={() => blurField(id)}
            className={`${baseClasses} ${borderClass} resize-y min-h-32`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setField(id, e.target.value)}
            onBlur={() => blurField(id)}
            className={`${baseClasses} ${borderClass}`}
          />
        )}
        {error && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 md:p-8 space-y-5"
    >
      {renderField({ id: 'name', label: 'Full name', placeholder: 'Jane Smith' })}
      {renderField({ id: 'email', label: 'Email', type: 'email', placeholder: 'jane@example.com' })}
      {renderField({
        id: 'phone',
        label: 'Phone',
        type: 'tel',
        placeholder: '0400 000 000',
        optional: true,
      })}
      {renderField({
        id: 'message',
        label: 'How can we help?',
        placeholder: 'Briefly describe the problem, the address suburb, and a good time to call.',
        multiline: true,
      })}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-[color:var(--color-primary)] text-white text-base font-medium px-7 py-3.5 hover:bg-[color:var(--color-primary-soft)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
              <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </button>

      <p className="text-xs text-[color:var(--color-muted)]">
        By sending, you agree to be contacted about your enquiry. We won't share your details.
      </p>
    </form>
  );
}
