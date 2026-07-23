import type { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Transparent Pricing Matrices & Engineering Retainers | SCY Innovation',
  description: 'Review itemized development plan matrices. No hourly drifts. Fixed-cost personal portfolios, multi-tier enterprise web systems, and dedicated support retainers.',
  keywords: ['Web Development Cost India', 'Custom Website Pricing', 'Next.js Retainer', 'Maintenance Rates Software', 'Flat Rate Web Engineering'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/pricing',
    title: 'Transparent Pricing Matrices & Engineering Retainers | SCY Innovation',
    description: 'Review itemized development plan matrices. No hourly drifts. Fixed-cost personal portfolios, multi-tier enterprise web systems, and dedicated support retainers.',
    images: [{ url: 'https://scyinnovation.com/pricing.png', width: 1200, height: 630, alt: 'SCY Innovation Development Investment Tier Options' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Pricing Matrices & Engineering Retainers | SCY Innovation',
    description: 'Review itemized development plan matrices. No hourly drifts. Fixed-cost personal portfolios, multi-tier enterprise web systems, and dedicated support retainers.',
    images: ['https://scyinnovation.com/pricing.png'],
  },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return <PricingContent />;
}