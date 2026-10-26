import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const templateData: PetTemplateData = rawData;

export const metadata: Metadata = {
  title: templateData.common.metadata.title,
  description: templateData.common.metadata.description,
  icons: {
    icon: [
      { url: '/main logo/favicon.webp' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/main logo/favicon.webp',
    apple: '/main logo/favicon.webp',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
