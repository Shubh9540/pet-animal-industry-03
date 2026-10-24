import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSectionProps } from '@/types/templates.types';
import { FaArrowRight, FaHeart, FaPaw } from 'react-icons/fa';

export const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)]">
      {/* Subtle ambient luxury light blob */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[var(--color-secondary)]/40 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

      <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-stretch lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex items-center px-4 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-20">
          <div className="max-w-xl animate-fade-in-up">
            <div className="mb-7 inline-flex max-w-full items-start gap-2 border-l-2 border-[var(--color-accent)] bg-[var(--color-white)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] shadow-sm transition-all duration-300 hover:shadow-md sm:text-[11px] sm:tracking-[0.18em]">
              <FaHeart className="text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110" />
              <span className="min-w-0 leading-5">{data.trustLead}</span>
            </div>
            <h1 className="break-words font-heading text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-[var(--color-heading)] sm:text-6xl lg:text-7xl xl:text-[82px]">
              {data.titleLine1}{' '}<span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span>{' '}{data.titleLine2}
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[var(--color-text)] sm:text-lg">{data.trustHighlight}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={data.ctaUrl} className="group inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[var(--color-primary)] px-7 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-white)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-accent)] hover:shadow-[0_12px_24px_rgba(227,111,79,0.35)] active:translate-y-0">
                {data.ctaText}<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <span className="group flex items-center justify-center gap-3 text-sm font-bold text-[var(--color-primary)] sm:justify-start">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-secondary)] transition-all duration-500 group-hover:rotate-12 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-white)]"><FaPaw /></span>
                {data.ctaIconLabel}
              </span>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-tl-[70px] sm:rounded-tl-[110px] lg:min-h-full">
          <Image src={data.image} alt={data.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="animate-ken-burns object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 animate-float-medium border border-[var(--color-white)]/40 bg-[var(--color-white)]/90 p-5 shadow-[0_20px_40px_rgba(13,43,36,0.15)] backdrop-blur-md transition-all duration-300 hover:bg-[var(--color-white)] sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="text-lg font-medium leading-tight tracking-[-0.025em] text-[var(--color-heading)]">{data.trustHighlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

