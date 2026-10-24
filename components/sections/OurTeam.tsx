import React from 'react';
import Image from 'next/image';
import { OurTeamProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

export const OurTeam = ({ data }: OurTeamProps) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal direction="left">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">{data.eyebrow}</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-none text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.title} <span className="italic text-[var(--color-accent)]">{data.highlightedTitle}</span></h2>
            <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{data.description}</p>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-[var(--shadow-card)]">
            <Image src={data.bannerImage} alt={data.bannerImageAlt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </Reveal>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.members.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.07}>
            <article className="group overflow-hidden rounded-xl bg-[var(--color-white)] shadow-sm transition-transform duration-500 hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-secondary)]">
                <Image src={member.image} alt={member.imageAlt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent)]">{member.role}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[var(--color-heading)]">{member.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">{member.description}</p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

