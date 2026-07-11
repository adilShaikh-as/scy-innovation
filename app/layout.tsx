'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize animations with customized global configurations
    AOS.init({
      duration: 800,      // Animation speed (800ms)
      once: true,         // Only animate once when scrolling down
      easing: 'ease-out', // Smooth transition curve
    });
  }, []);

  return (
    <html lang="en">
      <body className="antialiased bg-[#F4F6F0]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}