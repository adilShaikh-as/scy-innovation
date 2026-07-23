import type { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Knowledge Desk | Technical Insights & Engineering Logs',
  description: 'Stay updated with advanced software development methodologies, serverless design patterns, and web runtimes researched inside SCY Innovation.',
  keywords: ['SCY Innovation Blog', 'Engineering Logs', 'Next.js Optimization Insights', 'Core Web Vitals Research', 'Web Architecture Logs'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/blog',
    title: 'Knowledge Desk | Technical Insights & Engineering Logs',
    description: 'Stay updated with advanced software development methodologies, serverless design patterns, and web runtimes researched inside SCY Innovation.',
    images: [{ url: 'https://scyinnovation.com/hero-cloud.png', width: 1200, height: 630, alt: 'SCY Innovation Knowledge Desk Hub Logo Asset' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Desk | Technical Insights & Engineering Logs',
    description: 'Stay updated with advanced software development methodologies, serverless design patterns, and web runtimes researched inside SCY Innovation.',
    images: ['https://scyinnovation.com/hero-cloud.png'],
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return <BlogContent />;
}