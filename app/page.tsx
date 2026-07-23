import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'SCY Innovation | Web Development & Software Solutions',
  description: 'SCY Innovation is a web development and software solutions company.',
  keywords: ['Website Development', 'Custom Web Applications', 'Next.js Developer', 'Frontend Engineering', 'System Architecture', 'Headless Commerce', 'MVP Development'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com',
    title: 'SCY Innovation | Web Development & Software Solutions',
    description: 'SCY Innovation is a web development and software solutions company.',
    images: [{ url: 'https://scyinnovation.com/scy-homePage.png', width: 1200, height: 630, alt: 'SCY Innovation Systems Operations Dashboard Architecture' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCY Innovation | Web Development & Software Solutions',
    description: 'SCY Innovation is a web development and software solutions company.',
    images: ['https://scyinnovation.com/scy-homePage.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <HomeContent />;
}