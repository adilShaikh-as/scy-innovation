import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

// Global SEO Metadata Engine
export const metadata: Metadata = {
  metadataBase: new URL('https://scyinnovation.com'),
  title: {
    default: 'SCY Innovation | Engineering Resilient Digital Infrastructure',
    template: '%s | SCY Innovation'
  },
  description: 'Premium custom web application development, headless commerce architectures, and long-term system optimization frameworks built for modern enterprise scale.',
  keywords: ['Custom Web Development', 'Headless Commerce', 'Next.js Architecture', 'MVP Development', 'System Optimization'],
  authors: [{ name: 'Adil Shaikh' }],
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'SCY Innovation | Engineering Resilient Digital Infrastructure',
    description: 'We engineer high-performance, decoupled software systems and airtight security frameworks tailored for enterprise scaling.',
    url: 'https://scyinnovation.com',
    siteName: 'SCY Innovation',
    images: [{ url: '/scy-homePage.png', width: 1200, height: 630, alt: 'SCY Innovation Architecture Preview' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCY Innovation',
    description: 'Engineering resilient, serverless web applications with sub-second delivery.',
    images: ['/scy-homePage.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://scyinnovation.com/#organization",
        "name": "SCY Innovation",
        "url": "https://scyinnovation.com",
        "logo": "https://scyinnovation.com/logo-icon.png",
        "sameAs": ["https://linkedin.com", "https://twitter.com"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918169896469",
          "contactType": "customer support",
          "email": "contact@scyinnovation.com",
          "availableLanguage": ["en"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://scyinnovation.com/#website",
        "url": "https://scyinnovation.com",
        "name": "SCY Innovation",
        "description": "Premium custom web application development and system architecture services.",
        "publisher": { "@id": "https://scyinnovation.com/#organization" }
      }
    ]
  };

  return (
    <html lang="en">
      <body className="antialiased bg-[#F4F6F0]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-XYZ" />
      </body>
    </html>
  );
}