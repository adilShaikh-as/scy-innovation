import type { Metadata } from 'next';
import CustomWebDevContent from './CustomWebDevContent';

export const metadata: Metadata = {
  title: 'Custom Web Application Development & Architecture | SCY Innovation',
  description: 'We engineer high-performance, resilient corporate dashboard platforms, multi-tenant software systems, and data-intensive workflows built to handle intense operations seamlessly.',
  keywords: ['Custom Web Applications', 'Corporate Dashboards', 'Serverless Architecture', 'TypeScript Systems', 'API Hardening', 'Next.js Development'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/services/custom-web-development',
    title: 'Custom Web Application Development & Architecture | SCY Innovation',
    description: 'We engineer high-performance, resilient corporate dashboard platforms, multi-tenant software systems, and data-intensive workflows built to handle intense operations seamlessly.',
    images: [{ url: 'https://scyinnovation.com/service-custom-web-dev.png', width: 1200, height: 630, alt: 'SCY Innovation Custom Software Engineering Matrix' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Application Development & Architecture | SCY Innovation',
    description: 'We engineer high-performance, resilient corporate dashboard platforms, multi-tenant software systems, and data-intensive workflows built to handle intense operations seamlessly.',
    images: ['https://scyinnovation.com/service-custom-web-dev.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CustomWebDevContent />;
}