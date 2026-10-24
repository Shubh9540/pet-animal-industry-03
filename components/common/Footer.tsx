import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterProps } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPaw, FaPhoneAlt, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaTwitter': return <FaTwitter />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaPinterestP': return <FaPinterestP />;
    default: return null;
  }
};

const renderContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    default: return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="overflow-hidden bg-[var(--color-primary-dark)] text-[var(--color-white)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid items-end gap-8 border-b border-[var(--color-white)]/15 pb-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal direction="left" className="max-w-2xl">
            <Link href={data.logoUrl} aria-label={data.logoAlt} className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-accent)] text-[var(--color-accent-light)] transition-all duration-500 group-hover:rotate-12 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-white)]"><FaPaw /></span>
              <span className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{data.brandName}</span>
            </Link>
            <p className="mt-6 max-w-xl text-lg leading-8 tracking-[-0.02em] text-[var(--color-white)]/70 sm:text-xl">{data.description}</p>
          </Reveal>
          <Reveal direction="right" delay={0.12} className="relative hidden h-[190px] overflow-hidden lg:block">
            <Image src={data.footerImage} alt={data.footerImageAlt} fill sizes="36vw" className="object-cover opacity-80 grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:opacity-100 hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-transparent to-transparent" />
          </Reveal>
        </div>

        <div className="grid gap-10 border-b border-[var(--color-white)]/15 py-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">{data.quickLinksTitle}</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {data.quickLinks.map((link) => (
                <li key={link.id}><Link href={link.url} className="group inline-flex items-center gap-2 text-sm text-[var(--color-white)]/65 transition-colors hover:text-[var(--color-white)]"><span className="h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-4" />{link.label}</Link></li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">{data.contactTitle}</h2>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2">
              {data.contactItems.map((item) => (
                <li key={item.id} className="flex items-start gap-3 text-sm text-[var(--color-white)]/75">
                  <span className="mt-1 text-[var(--color-accent-light)]">{renderContactIcon(item.icon)}</span>
                  {item.url ? <a href={item.url} className="transition-colors hover:text-[var(--color-white)]">{item.value}</a> : <span>{item.value}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-[11px] uppercase tracking-[0.1em] text-[var(--color-white)]/45 sm:flex-row sm:text-left">
          <p>{data.copyrightText}</p>
          <div className="flex items-center gap-2">
            {data.socialLinks.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-white)]/20 text-xs text-[var(--color-white)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]">
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

