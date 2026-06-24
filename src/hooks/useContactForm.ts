import { useState } from 'react';
import type {
  ContactFormData,
  ContactFormErrors,
  ContactStatus,
} from '@/types/contact';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const empty: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function validate(values: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'That doesn’t look like a valid email.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please let us know what you need help with.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail helps us quote accurately.';
  }
  return errors;
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormData>(empty);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [status, setStatus] = useState<ContactStatus>('idle');

  const setField = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (touched[key]) {
        setErrors(validate(next));
      }
      return next;
    });
  };

  const blurField = (key: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    try {
      // Simulated submit — replace with a real backend or email service later.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
    } catch (e: any) {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  return {
    values,
    errors,
    touched,
    status,
    setField,
    blurField,
    handleSubmit,
    reset,
  };
}
