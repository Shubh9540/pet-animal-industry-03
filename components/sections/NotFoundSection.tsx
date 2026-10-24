import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaPaw } from 'react-icons/fa';
import { NotFoundSectionProps } from '@/types/templates.types';

export const NotFoundSection = ({ data }: NotFoundSectionProps) => {
  if (!data) return null;

  return (
    <section className="flex flex-grow items-center justify-center bg-[var(--color-bg-main)] px-4 py-16 text-center">
      <div className="max-w-xl">
        <FaPaw className="mx-auto text-5xl text-[var(--color-accent)]" />
        <h1 className="mt-4 font-heading text-8xl font-semibold leading-none text-[var(--color-primary)] sm:text-9xl">{data.code}</h1>
        <h2 className="mt-4 font-heading text-4xl font-semibold text-[var(--color-heading)]">{data.title}</h2>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{data.description}</p>
        <Link href={data.buttonUrl} className="mt-7 inline-flex h-14 items-center gap-3 rounded-full bg-[var(--color-primary)] px-7 text-sm font-bold text-[var(--color-white)] transition-colors hover:bg-[var(--color-accent)]"><FaArrowLeft />{data.buttonText}</Link>
      </div>
    </section>
  );
};

