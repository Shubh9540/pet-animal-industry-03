'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TestimonialProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa';

export const Testimonial = ({ data }: TestimonialProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!data || data.testimonials.length === 0) return null;
  const active = data.testimonials[activeIndex];
  const previous = () => setActiveIndex((activeIndex - 1 + data.testimonials.length) % data.testimonials.length);
  const next = () => setActiveIndex((activeIndex + 1) % data.testimonials.length);

  return (
    <section className="overflow-hidden bg-[var(--color-bg-alt)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <Reveal direction="left">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">{data.subtitle}</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.title1} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span></h2>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{data.description}</p>
          <Link href={data.buttonUrl} className="mt-7 inline-flex items-center gap-2 border-b border-[var(--color-primary)] pb-1 text-sm font-bold text-[var(--color-primary)]">{data.buttonText}<FaArrowRight /></Link>
        </Reveal>
        <Reveal direction="right" delay={0.1} className="rounded-xl border-t-2 border-[var(--color-accent)] bg-[var(--color-white)] p-6 shadow-[0_15px_40px_rgba(13,43,36,0.08)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(13,43,36,0.14)] sm:p-9">
          <div className="flex items-start justify-between">
            <FaQuoteLeft className="text-4xl text-[var(--color-secondary)] transition-transform duration-500 hover:scale-105 sm:text-5xl" />
            <div className="flex gap-1 text-sm text-[var(--color-accent)]">
              {Array.from({ length: active.rating }).map((_, index) => <FaStar key={`${active.id}-star-${index}`} />)}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.blockquote key={active.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="mt-7 font-heading text-2xl font-medium leading-relaxed text-[var(--color-heading)] sm:text-3xl">{active.quote}</motion.blockquote>
          </AnimatePresence>
          <motion.div key={`${active.id}-person`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.08 }} className="mt-8 flex flex-col gap-5 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Image src={active.avatar} alt={active.avatarAlt} width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--color-accent)]/20 transition-all duration-300 hover:ring-4 hover:ring-[var(--color-accent)]" />
              <div><p className="font-bold text-[var(--color-heading)]">{active.name}</p><p className="text-xs text-[var(--color-text-light)]">{active.location}</p></div>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={previous} aria-label={data.slideLabel} className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-all duration-300 hover:scale-105 hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] active:scale-95"><FaArrowLeft /></button>
              <button type="button" onClick={next} aria-label={data.slideLabel} className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-white)] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[var(--color-accent)] hover:shadow-lg active:scale-95"><FaArrowRight /></button>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

