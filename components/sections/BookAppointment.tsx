'use client';

import React, { FormEvent, useState } from 'react';
import { FaArrowRight, FaChevronDown, FaPaw } from 'react-icons/fa';
import { AppointmentFieldProps, BookAppointmentProps } from '@/types/templates.types';

const AppointmentField = ({ field }: AppointmentFieldProps) => (
  <label className={`block ${field.width === 'full' ? 'sm:col-span-2' : ''}`}>
    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-primary)]">{field.label}</span>
    <span className="relative block">
      {field.type === 'select' ? (
        <>
          <select name={field.name} required={field.required} defaultValue="" className="h-14 w-full appearance-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 pr-10 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary)]">
            <option value="" disabled>{field.placeholder}</option>
            {field.options?.map((option) => <option key={option.id} value={option.value}>{option.title}</option>)}
          </select>
          <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-accent)]" />
        </>
      ) : field.type === 'textarea' ? (
        <textarea name={field.name} required={field.required} rows={4} placeholder={field.placeholder} className="w-full resize-y rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 text-sm outline-none transition-colors focus:border-[var(--color-primary)]" />
      ) : (
        <input name={field.name} type={field.type} required={field.required} placeholder={field.placeholder} className="h-14 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 text-sm outline-none transition-colors focus:border-[var(--color-primary)]" />
      )}
    </span>
  </label>
);

export const BookAppointment = ({ data }: BookAppointmentProps) => {
  const [submitted, setSubmitted] = useState(false);
  if (!data) return null;
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[var(--color-secondary)]/70 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[var(--color-accent-light)]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_1.35fr]">
        <div className="rounded-[34px] bg-[var(--color-primary)] p-7 text-[var(--color-white)] sm:p-9">
          <FaPaw className="text-4xl text-[var(--color-accent-light)]" />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">{data.intro.eyebrow}</p>
          <h2 className="mt-4 font-heading text-5xl font-semibold leading-[0.95]">{data.intro.title} <span className="italic text-[var(--color-accent-light)]">{data.intro.highlightedTitle}</span></h2>
        </div>
        <form onSubmit={submit} onChange={() => setSubmitted(false)} className="grid gap-4 rounded-[34px] bg-[var(--color-white)] p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-9">
          {data.form.fields.map((field) => <AppointmentField key={field.id} field={field} />)}
          <button type="submit" className="flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 text-sm font-bold text-[var(--color-white)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent)] sm:col-span-2">{data.form.buttonText}<FaArrowRight /></button>
          {submitted && <p role="status" className="text-center text-sm font-bold text-[var(--color-primary)] sm:col-span-2">{data.form.successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

