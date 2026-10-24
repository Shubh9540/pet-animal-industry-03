import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const Breadcrumb = ({ data, ui }: BreadcrumbProps) => {
  if (!data || !ui) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${ui.breadcrumbImage}')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary-dark)]/90 to-[var(--color-primary)]/60" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-white)]/70">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {index > 0 && <FaArrowRight className="text-[10px] text-[var(--color-accent-light)]" />}
              {path.url ? <Link href={path.url} className="transition-colors hover:text-[var(--color-accent-light)]">{path.label}</Link> : <span>{path.label}</span>}
            </React.Fragment>
          ))}
        </div>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-none text-[var(--color-white)] sm:text-5xl lg:text-6xl">{data.title}</h1>
      </div>
    </section>
  );
};

