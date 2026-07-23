import type { Metadata } from 'next';
import ToolsContent from './ToolsContent';

export const metadata: Metadata = {
  title: 'Our Technology DNA & Engineering Stack | SCY Innovation',
  description: 'Explore our production infrastructure parameters. From optimized frontend architectures to serverless cloud hosting and airtight cryptographic frameworks.',
  keywords: ['Next.js Core', 'AWS Infrastructure', 'AES-256 Cryptography', 'Digital Forensics Tools', 'Headless CMS Architecture', 'Enterprise Tech Stack'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/tools',
    title: 'Our Technology DNA & Engineering Stack | SCY Innovation',
    description: 'Explore our production infrastructure parameters. From optimized frontend architectures to serverless cloud hosting and airtight cryptographic frameworks.',
    images: [{ url: 'https://scyinnovation.com/tools.png', width: 1200, height: 630, alt: 'SCY Innovation Production Technical Ecosystem Grid' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Technology DNA & Engineering Stack | SCY Innovation',
    description: 'Explore our production infrastructure parameters. From optimized frontend architectures to serverless cloud hosting and airtight cryptographic frameworks.',
    images: ['https://scyinnovation.com/tools.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ToolsContent />;
}