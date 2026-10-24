'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GalleryProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

export const Gallery = ({ data }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activeIndex]);
  if (!data) return null;

  const previous = () => setActiveIndex((activeIndex === null ? 0 : activeIndex - 1 + data.images.length) % data.images.length);
  const next = () => setActiveIndex((activeIndex === null ? 0 : activeIndex + 1) % data.images.length);

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">{data.subtitle}</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.title} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span></h2>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{data.description}</p>
        </Reveal>
        <div className="mt-9 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.images.map((item, index) => (
            <Reveal key={item.id} delay={(index % 4) * 0.06} className={index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''}>
            <button type="button" aria-label={data.openLabel} onClick={() => setActiveIndex(index)} className="group relative h-full w-full overflow-hidden rounded-xl text-left">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-[var(--color-white)]/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-primary)]">{item.category}</span>
            </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-primary-dark)]/95 p-4">
          <button type="button" aria-label={data.closeLabel} onClick={() => setActiveIndex(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-primary)]"><FaTimes /></button>
          <button type="button" aria-label={data.previousLabel} onClick={previous} className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-primary)] sm:left-6"><FaArrowLeft /></button>
          <div className="relative h-[75vh] w-full max-w-5xl overflow-hidden rounded-[28px]">
            <Image src={data.images[activeIndex].image} alt={data.images[activeIndex].imageAlt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" aria-label={data.nextLabel} onClick={next} className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-white)] text-[var(--color-primary)] sm:right-6"><FaArrowRight /></button>
        </div>
      )}
    </section>
  );
};

