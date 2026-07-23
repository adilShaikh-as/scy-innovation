import type { Metadata } from 'next';
import UIUXRedesignContent from './UIUXRedesignContent';

export const metadata: Metadata = {
  title: 'Premium UI/UX & Website Redesign Architectures | SCY Innovation',
  description: 'Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points.',
  keywords: ['Premium UI/UX Design', 'Website Redesign', 'Conversion Rate Optimization', 'WCAG Compliance', 'Tailwind CSS Design Tokens', 'Frontend Overhaul'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/services/ui-ux-redesign',
    title: 'Premium UI/UX & Website Redesign Architectures | SCY Innovation',
    description: 'Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points.',
    images: [{ url: 'https://scyinnovation.com/service-ui-ux.png', width: 1200, height: 630, alt: 'SCY Innovation Design Transformation Capabilities' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium UI/UX & Website Redesign Architectures | SCY Innovation',
    description: 'Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points.',
    images: ['https://scyinnovation.com/service-ui-ux.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <UIUXRedesignContent />;
}