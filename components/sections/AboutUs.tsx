import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AboutUsProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaArrowRight, FaCheck, FaPaw } from 'react-icons/fa';

export const AboutUs = ({ data, showButton = true }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section className="overflow-hidden bg-[var(--color-white)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -left-5 -top-5 h-28 w-28 animate-breathe rounded-full bg-[var(--color-secondary)]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px_40px_160px_40px] bg-[var(--color-bg-alt)] shadow-[var(--shadow-card)]">
            <Image src={data.imageMain} alt={data.imageMainAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 right-2 flex h-24 w-24 rotate-6 items-center justify-center rounded-[30px] border-8 border-[var(--color-white)] bg-[var(--color-accent)] text-3xl text-[var(--color-white)] shadow-xl sm:h-28 sm:w-28">
            <FaPaw />
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.12} className="lg:pr-8">
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            <span className="h-px w-8 bg-[var(--color-accent)]" />{data.eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-semibold leading-[0.98] tracking-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
            {data.titleLine1} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span> {data.titleLine2}
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-text)]">{data.description}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[data.titleLine1, data.highlightedTitle].map((item) => (
              <div key={item} className="flex items-center gap-3 border-l-2 border-[var(--color-accent)] bg-[var(--color-surface-soft)] px-4 py-3 text-sm font-semibold text-[var(--color-primary)] transition-transform duration-300 hover:translate-x-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs text-[var(--color-white)]"><FaCheck /></span>{item}
              </div>
            ))}
          </div>
          {showButton && (
            <Link href={data.buttonUrl} className="group mt-8 inline-flex h-14 items-center gap-3 rounded-md border border-[var(--color-primary)] px-6 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
              {data.buttonText}<FaArrowRight />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
};

