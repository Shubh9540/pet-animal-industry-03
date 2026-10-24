import React from 'react';
import Image from 'next/image';
import { FaCheck, FaPaw } from 'react-icons/fa';
import { ServiceDetailProps } from '@/types/templates.types';

export const ServiceDetail = ({ data }: ServiceDetailProps) => {
  if (!data) return null;
  const service = data.services.find((item) => item.id === data.canonicalServiceId);
  if (!service) return null;

  return (
    <section className="bg-[var(--color-bg-main)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-12">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[40px_40px_140px_40px] shadow-[var(--shadow-card)]">
          <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]"><FaPaw />{service.subtitle}</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold leading-[0.95] text-[var(--color-heading)] sm:text-6xl">{service.heading} {service.highlightedHeading && <span className="italic text-[var(--color-accent)]">{service.highlightedHeading}</span>}</h1>
          <p className="mt-6 text-base leading-8 text-[var(--color-text)]">{service.description}</p>
          <div className="mt-7 space-y-3">
            {service.highlights.map((highlight) => (
              <div key={highlight.id} className="rounded-[22px] bg-[var(--color-white)] p-5">
                <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)] text-xs text-[var(--color-primary)]"><FaCheck /></span><h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">{highlight.title}</h2></div>
                {highlight.description && <p className="mt-2 pl-11 text-sm leading-6 text-[var(--color-text-light)]">{highlight.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {service.steps?.length && service.processBadge && service.processTitle && service.processHighlightedTitle ? (
        <div className="bg-[var(--color-primary-dark)] px-4 py-10 text-[var(--color-white)] sm:px-6 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">{service.processBadge}</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center font-heading text-4xl font-semibold leading-none sm:text-5xl">{service.processTitle} <span className="italic text-[var(--color-accent-light)]">{service.processHighlightedTitle}</span></h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {service.steps.map((step) => (
                <article key={step.id} className="overflow-hidden rounded-[28px] border border-[var(--color-white)]/15 bg-[var(--color-white)]/[0.06]">
                  <div className="relative aspect-[4/3]"><Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
                  <div className="p-6"><span className="text-xs font-bold text-[var(--color-accent-light)]">{step.number}</span><h3 className="mt-2 font-heading text-2xl font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--color-white)]/65">{step.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {service.advantages?.length && service.advantageBadge && service.advantageTitle && service.advantageHighlightedTitle ? (
        <div className="px-4 py-10 sm:px-6 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{service.advantageBadge}</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl">{service.advantageTitle} <span className="italic text-[var(--color-accent)]">{service.advantageHighlightedTitle}</span></h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.advantages.map((advantage) => (
                <article key={advantage.id} className="overflow-hidden rounded-[26px] bg-[var(--color-white)] shadow-sm">
                  <div className="relative aspect-square"><Image src={advantage.image} alt={advantage.imageAlt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" /></div>
                  <div className="p-5"><h3 className="font-heading text-xl font-semibold text-[var(--color-heading)]">{advantage.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">{advantage.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

