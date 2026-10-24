'use client';

import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { ContactProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    default: return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [message, setMessage] = useState('');
  if (!data) return null;
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(data.form.successMessage);
    event.currentTarget.reset();
  };

  return (
    <section className="overflow-hidden bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch lg:grid-cols-[0.92fr_1.08fr] lg:py-4">
          <Reveal direction="left" className="relative z-10 min-h-[430px] overflow-hidden lg:my-8 lg:min-h-[560px] lg:shadow-[0_26px_70px_rgba(13,43,36,0.18)]">
            <Image src={data.visual.image} alt={data.visual.imageAlt} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover transition-transform duration-1000 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-[var(--color-primary-dark)]/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-[var(--color-white)] sm:p-10">
              <div className="mb-5 h-px w-14 bg-[var(--color-accent-light)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-light)]">{data.intro.eyebrow}</p>
              <h2 className="mt-3 max-w-xl font-heading text-4xl font-medium leading-[1.02] sm:text-5xl lg:text-6xl">{data.intro.title} <span className="italic text-[var(--color-accent-light)]">{data.intro.highlightedTitle}</span></h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-white)]/75">{data.intro.description}</p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.12} className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 sm:p-10 lg:pl-16 lg:pr-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{data.intro.eyebrow}</p>
            <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-[var(--color-heading)] sm:text-4xl">{data.form.title}</h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--color-text-light)]">{data.form.description}</p>
            <form onSubmit={submit} className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              <input required aria-label={data.form.namePlaceholder} placeholder={data.form.namePlaceholder} className="h-12 border-0 border-b border-[var(--color-border)] bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              <input required type="email" aria-label={data.form.emailPlaceholder} placeholder={data.form.emailPlaceholder} className="h-12 border-0 border-b border-[var(--color-border)] bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              <input required type="tel" aria-label={data.form.phonePlaceholder} placeholder={data.form.phonePlaceholder} className="h-12 border-0 border-b border-[var(--color-border)] bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              <select required aria-label={data.form.servicePlaceholder} defaultValue="" className="h-12 border-0 border-b border-[var(--color-border)] bg-transparent px-0 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]">
                <option value="" disabled>{data.form.servicePlaceholder}</option>
                {data.form.serviceOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
              </select>
              <textarea required aria-label={data.form.messagePlaceholder} placeholder={data.form.messagePlaceholder} rows={4} className="resize-none border-0 border-b border-[var(--color-border)] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)] sm:col-span-2" />
              <button type="submit" className="group mt-2 flex h-14 items-center justify-between rounded-md bg-[var(--color-primary)] px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-white)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:shadow-lg sm:col-span-2">{data.form.buttonText}<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" /></button>
              {message && <p className="text-sm font-bold text-[var(--color-primary)] sm:col-span-2">{message}</p>}
            </form>
          </Reveal>
        </div>
        <div className="mt-8 grid border-y border-[var(--color-border)] md:grid-cols-3">
          {data.contactItems.map((item) => (
            <Reveal key={item.id} delay={data.contactItems.indexOf(item) * 0.08}>
              <a href={item.url} className="group flex min-h-[138px] items-start gap-4 border-b border-[var(--color-border)] px-2 py-7 transition-colors hover:bg-[var(--color-white)] md:border-b-0 md:border-r md:px-6 md:last:border-r-0">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)] text-sm text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">{renderIcon(item.icon)}</span>
                <span><strong className="block text-base font-semibold tracking-[-0.02em] text-[var(--color-heading)]">{item.title}</strong>{item.lines.map((line) => <span key={line.id} className="mt-2 block text-xs leading-5 text-[var(--color-text-light)]">{line.text}</span>)}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

