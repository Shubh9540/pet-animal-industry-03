import React from 'react';
import Link from 'next/link';
import { TopBarProps } from '@/types/templates.types';
import { FaChartLine, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChartLine': return <FaChartLine />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const TopBar = ({ data }: TopBarProps) => {
  if (!data) return null;

  return (
    <div className="hidden bg-[var(--color-primary-dark)] text-[var(--color-white)] lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
          <span className="text-[var(--color-accent-light)]">{renderIcon(data.taglineIcon)}</span>
          <span>{data.tagline}</span>
        </div>
        <div className="flex items-center gap-5 text-[11px] font-medium">
          <a href={`tel:${data.phoneValue.replace(/\s+/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent-light)]"><FiPhone />{data.phoneValue}</a>
          <a href={`mailto:${data.emailValue}`} className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent-light)]"><FiMail />{data.emailValue}</a>
          <span className="flex items-center gap-2"><FiMapPin />{data.locationValue}</span>
          <div className="flex items-center gap-3">
            {data.socialLinks?.map((social) => (
              <Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.icon} className="transition-colors hover:text-[var(--color-accent-light)]">
                {renderIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

