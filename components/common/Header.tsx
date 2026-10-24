'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaPaw, FaPhoneAlt, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  if (!data) return null;

  const navLinks = [...data.navLinksLeft, ...data.navLinksRight];
  const isActive = (url: string) => url === '/' ? pathname === '/' : pathname === url || pathname.startsWith(`${url}/`);

  return (
    <header className={`sticky top-0 z-50 w-screen max-w-full border-b transition-all duration-300 ${scrolled ? 'border-gray-100 bg-white shadow-md' : 'border-transparent bg-white'}`}>
      <div className={`mx-auto flex w-screen min-w-0 max-w-full items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:max-w-7xl ${scrolled ? 'h-16 lg:h-[70px]' : 'h-[72px] lg:h-[86px]'}`}>
        <Link href={data.logoUrl} aria-label={data.logoAlt} className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-white)] transition-all duration-500 group-hover:rotate-12 group-hover:bg-transparent group-hover:text-[var(--color-accent)]"><FaPaw /></span>
          <span className="flex flex-col">
            <span className="text-[26px] font-semibold leading-6 tracking-[-0.045em] text-[var(--color-heading)]">{data.brandName}</span>
            <span className="mt-1 hidden text-[7px] font-semibold uppercase tracking-[0.28em] text-[var(--color-text-light)] sm:block">{data.brandTagline}</span>
          </span>
        </Link>

        <nav aria-label={data.logoAlt} className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.url);
            return (
              <Link key={link.id} href={link.url} aria-current={active ? 'page' : undefined} className={`relative py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[var(--color-accent)] after:transition-all after:duration-300 ${active ? 'text-[var(--color-primary)] after:w-full' : 'text-[var(--color-text)] after:w-0 hover:text-[var(--color-primary)] hover:after:w-full'}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={data.phoneUrl} aria-label={data.phoneCaption} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-sm text-[var(--color-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"><FaPhoneAlt /></a>
          <Link href={data.contactButton.url} className="group flex h-11 items-center gap-3 rounded-md bg-[var(--color-primary)] px-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-white)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:shadow-lg">
            {data.contactButton.text}<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button type="button" aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary)] text-[var(--color-white)] transition-transform active:scale-95 lg:hidden">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-3 top-[72px] max-h-[calc(100vh-6rem)] animate-fade-in-up overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-5 shadow-[var(--shadow-mobile-menu)] lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url} onClick={() => setMobileMenuOpen(false)} aria-current={isActive(link.url) ? 'page' : undefined} className={`border-b border-[var(--color-border)] px-2 py-4 text-base font-bold ${isActive(link.url) ? 'text-[var(--color-accent)]' : 'text-[var(--color-heading)]'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={data.phoneUrl} className="mt-5 flex items-center gap-3 border-l-2 border-[var(--color-accent)] bg-[var(--color-surface-soft)] p-4 text-sm font-semibold text-[var(--color-primary)]"><FaPhoneAlt />{data.phoneNumber}</a>
          <Link href={data.contactButton.url} className="mt-3 flex h-12 items-center justify-center gap-3 rounded-md bg-[var(--color-primary)] px-5 text-sm font-semibold text-[var(--color-white)]">
            {data.contactButton.text}<FaArrowRight />
          </Link>
        </div>
      )}
    </header>
  );
};

