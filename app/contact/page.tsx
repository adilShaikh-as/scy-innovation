import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Project Discovery & Technical Intake Desk | SCY Innovation',
  description: 'Connect with our remote web engineering team to launch fast, secure, and modern custom web applications. Submit your web requirements or book a video slot.',
  keywords: ['Contact SCY Innovation', 'Custom Web Intake Form', 'Hire Next.js Developers', 'Web Consultancy India', 'Remote Engineering Solutions Desk'],
  openGraph: {
    type: 'website',
    url: 'https://scyinnovation.com/contact',
    title: 'Project Discovery & Technical Intake Desk | SCY Innovation',
    description: 'Connect with our remote web engineering team to launch fast, secure, and modern custom web applications. Submit your web requirements or book a video slot.',
    images: [{ url: 'https://scyinnovation.com/contact-us.png', width: 1200, height: 630, alt: 'SCY Innovation Project Discovery Portal' }],
    siteName: 'SCY Innovation',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Discovery & Technical Intake Desk | SCY Innovation',
    description: 'Connect with our remote web engineering team to launch fast, secure, and modern custom web applications. Submit your web requirements or book a video slot.',
    images: ['https://scyinnovation.com/contact-us.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ContactContent />;
}