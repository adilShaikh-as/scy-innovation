import type { Metadata } from 'next';
import HeadlessCommerceContent from './HeadlessCommerceContent';

export const metadata: Metadata = {
  title: 'E-Commerce & Headless Commerce Architecture | SCY Innovation',
  description: 'Decouple your public storefront rendering layer away from complex inventory data. We deliver fast sub-second loading headless e-commerce frameworks.',
  keywords: ['Headless Commerce', 'Next.js Commerce', 'Shopify API Developers', 'Stripe Integration', 'Omnichannel Retail Software', 'Core Web Vitals Ecom'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/services/headless-commerce',
    title: 'E-Commerce & Headless Commerce Architecture | SCY Innovation',
    description: 'Decouple your public storefront rendering layer away from complex inventory data. We deliver fast sub-second loading headless e-commerce frameworks.',
    images: [{ url: 'https://scyinnovation.com/service-ecommerce.png', width: 1200, height: 630, alt: 'SCY Innovation Headless Commerce Architectural Framework' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce & Headless Commerce Architecture | SCY Innovation',
    description: 'Decouple your public storefront rendering layer away from complex inventory data. We deliver fast sub-second loading headless e-commerce frameworks.',
    images: ['https://scyinnovation.com/service-ecommerce.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <HeadlessCommerceContent />;
}