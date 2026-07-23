import type { Metadata } from 'next';
import MVPDevelopmentContent from './MVPDevelopmentContent';

export const metadata: Metadata = {
  title: 'MVP Development for High-Growth Startups | SCY Innovation',
  description: 'Accelerate market delivery parameters without technical debt. We engineer clean, highly cohesive codebases optimized for rapid feature pivots and rapid validation.',
  keywords: ['Startup MVP Development', 'Minimum Viable Product', 'Next.js MVP Build', 'Agile Software Sprint', 'Product Prototype Launch', 'Scalable Architecture Startup'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/services/mvp-development',
    title: 'MVP Development for High-Growth Startups | SCY Innovation',
    description: 'Accelerate market delivery parameters without technical debt. We engineer clean, highly cohesive codebases optimized for rapid feature pivots and rapid validation.',
    images: [{ url: 'https://scyinnovation.com/service-mvp.png', width: 1200, height: 630, alt: 'SCY Innovation Startup MVP Engineering Roadmap' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development for High-Growth Startups | SCY Innovation',
    description: 'Accelerate market delivery parameters without technical debt. We engineer clean, highly cohesive codebases optimized for rapid feature pivots and rapid validation.',
    images: ['https://scyinnovation.com/service-mvp.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <MVPDevelopmentContent />;
}