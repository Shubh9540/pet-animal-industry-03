import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServicesPageContentProps } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesPageContent = ({ data }: ServicesPageContentProps) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">{data.eyebrow}</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.title} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span></h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text)] lg:pl-10">{data.description}</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {data.cards.map((card, index) => (
            <Link key={card.id} href={card.url} className={`group relative min-h-[390px] overflow-hidden rounded-[34px] ${index % 3 === 0 ? 'md:col-span-2' : ''}`}>
              <Image src={card.image} alt={card.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] via-[var(--color-primary-dark)]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--color-white)] sm:p-8">
                <span className="text-xs font-bold text-[var(--color-accent-light)]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-heading text-3xl font-semibold">{card.title}</h3>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <p className="max-w-xl text-sm leading-6 text-[var(--color-white)]/75">{card.description}</p>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]"><FaArrowRight /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

