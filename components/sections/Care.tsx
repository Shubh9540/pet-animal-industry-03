import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CareProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaArrowRight, FaPaw } from 'react-icons/fa';

export const Care = ({ data }: CareProps) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <Reveal className="relative mx-auto min-h-[500px] max-w-7xl overflow-hidden rounded-xl bg-[var(--color-primary)]">
        <Image src={data.image} alt={data.imageAlt} fill sizes="100vw" className="object-cover object-center transition-transform duration-1000 hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary-dark)]/80 to-transparent" />
        <div className="relative flex min-h-[500px] items-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="max-w-xl text-[var(--color-white)]">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]"><FaPaw />{data.eyebrow}</p>
            <h2 className="mt-5 font-heading text-5xl font-semibold leading-[0.95] sm:text-6xl">{data.title} <span className="italic text-[var(--color-accent-light)]">{data.highlightedTitle}</span></h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-white)]/75">{data.description}</p>
            <Link href={data.buttonUrl} aria-label={data.arrowLabel} className="group mt-8 inline-flex h-14 items-center gap-3 rounded-md bg-[var(--color-accent)] px-7 text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-1 hover:bg-[var(--color-white)] hover:text-[var(--color-primary)]">
              {data.arrowLabel}<FaArrowRight />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

