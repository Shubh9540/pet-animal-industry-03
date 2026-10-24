'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaqProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const Faq = ({ data }: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>(data?.items[0]?.id ?? null);
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal direction="left">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">{data.subtitle}</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl">{data.title1} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span></h2>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{data.description}</p>
          <div className="relative mt-7 aspect-[4/3] overflow-hidden rounded-[32px]">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.1} className="space-y-3">
          {data.items.map((item) => {
            const open = activeId === item.id;
            return (
              <article key={item.id} className={`overflow-hidden border-b transition-colors duration-300 ${open ? 'border-[var(--color-primary)] bg-[var(--color-white)]' : 'border-[var(--color-border)] bg-transparent'}`}>
                <button type="button" aria-expanded={open} aria-label={open ? data.collapseLabel : data.expandLabel} onClick={() => setActiveId(open ? null : item.id)} className="flex w-full items-center gap-4 p-5 text-left sm:p-6">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{item.number}</span>
                  <span className="flex-1 text-lg font-semibold tracking-[-0.02em] text-[var(--color-heading)] sm:text-xl">{item.question}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${open ? 'bg-[var(--color-primary)] text-[var(--color-white)]' : 'bg-[var(--color-secondary)] text-[var(--color-primary)]'}`}>{open ? <FaMinus /> : <FaPlus />}</span>
                </button>
                {open && <p className="px-5 pb-6 pl-[68px] text-sm leading-7 text-[var(--color-text)] sm:px-6 sm:pl-[76px]">{item.answer}</p>}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

