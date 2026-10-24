import React from 'react';
import Image from 'next/image';
import { WhyChooseUsProps } from '@/types/templates.types';
import { FaCheck } from 'react-icons/fa';

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">{data.badge || data.subtitle}</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.title} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span></h2>
          {data.description && <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{data.description}</p>}
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {data.features.map((feature, index) => (
            <article key={feature.id} className="group grid min-h-[220px] overflow-hidden rounded-[30px] bg-[var(--color-white)] shadow-sm sm:grid-cols-[0.9fr_1.1fr]">
              {feature.image && (
                <div className="relative min-h-[220px] overflow-hidden">
                  <Image src={feature.image} alt={feature.imageAlt || feature.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              <div className="flex flex-col justify-center p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-secondary)] text-sm font-bold text-[var(--color-primary)]">{feature.number || String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-[var(--color-heading)]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">{feature.description}</p>
                <FaCheck className="mt-4 text-[var(--color-accent)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

