import React from 'react';
import Link from 'next/link';
import { OurServiceProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaArrowRight, FaBone, FaHeart, FaHome, FaPaw, FaShieldAlt, FaStethoscope } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaStethoscope': return <FaStethoscope />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaBone': return <FaBone />;
    case 'FaHome': return <FaHome />;
    case 'FaHeart': return <FaHeart />;
    default: return <FaPaw />;
  }
};

export const OurService = ({ data, limit }: OurServiceProps) => {
  if (!data) return null;
  const services = typeof limit === 'number' ? data.services.slice(0, limit) : data.services;

  return (
    <section className="bg-[var(--color-primary-dark)] px-4 py-10 text-[var(--color-white)] sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[var(--color-white)]/15 pb-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal direction="left">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-light)]">{data.subtitle}</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-none sm:text-5xl lg:text-6xl">{data.titleLine1} {data.titleLine2} <span className="italic text-[var(--color-accent-light)]">{data.highlightedTitle}</span></h2>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="lg:pl-12">
            <p className="max-w-xl text-sm leading-7 text-[var(--color-white)]/70">{data.description}</p>
            <Link href={data.linkUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent-light)] transition-all hover:gap-4">{data.linkText}<FaArrowRight /></Link>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.07} className="h-full">
            <Link href={service.url} className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[var(--color-white)]/15 bg-[var(--color-white)]/[0.06] p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-accent-light)] hover:bg-[var(--color-white)]/[0.12] hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              {/* Subtle top-edge accent highlight line on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div>
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-lg shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-accent-light)] group-hover:text-[var(--color-primary-dark)] group-hover:shadow-[0_8px_20px_rgba(227,111,79,0.4)]">{renderIcon(service.icon)}</span>
                  <span className="font-heading text-3xl text-[var(--color-white)]/20 transition-colors duration-500 group-hover:text-[var(--color-accent-light)]/40">{service.number}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] transition-colors duration-300 group-hover:text-[var(--color-accent-light)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-white)]/65">{service.description}</p>
              </div>
              <div className="pt-6">
                <FaArrowRight className="text-[var(--color-accent-light)] transition-all duration-300 group-hover:translate-x-2.5 group-hover:text-[var(--color-white)]" />
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

