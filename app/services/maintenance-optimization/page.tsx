import type { Metadata } from 'next';
import MaintenanceOptimizationContent from './MaintenanceOptimizationContent';

export const metadata: Metadata = {
  title: 'Long-Term Maintenance & Optimization Frameworks | SCY Innovation',
  description: 'Ensure continuous peak system operations with dedicated engineering oversight. We monitor runtime security flaws, audit performance logs, and eliminate layout friction.',
  keywords: ['Website Maintenance', 'Core Web Vitals Optimization', 'Uptime Monitoring', 'Security Patching', 'Codebase Governance', 'Cloud Infrastructure Retention'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/services/maintenance-optimization',
    title: 'Long-Term Maintenance & Optimization Frameworks | SCY Innovation',
    description: 'Ensure continuous peak system operations with dedicated engineering oversight. We monitor runtime security flaws, audit performance logs, and eliminate layout friction.',
    images: [{ url: 'https://scyinnovation.com/service-maintaince.png', width: 1200, height: 630, alt: 'SCY Innovation Long-Term Operations Guard Blueprint' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long-Term Maintenance & Optimization Frameworks | SCY Innovation',
    description: 'Ensure continuous peak system operations with dedicated engineering oversight. We monitor runtime security flaws, audit performance logs, and eliminate layout friction.',
    images: ['https://scyinnovation.com/service-maintaince.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <MaintenanceOptimizationContent />;
}