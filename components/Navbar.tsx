'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F4F6F0]/90 backdrop-blur-md border-b border-[#BAC095]/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* Brand Identity with Logo Icon */}
        <Link href="/" className="font-bold text-xl tracking-tight text-[#3D4127] flex items-center gap-3 group/logo">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image 
              src="/logo-icon.png" 
              alt="SCY Innovation Logo" 
              width={32} 
              height={32}
              className="object-contain transition-transform duration-300 group-hover/logo:scale-105"
              priority
            />
          </div>
          <span>
            SCY <span className="text-[#636B2F] font-light">Innovation</span>
          </span>
        </Link>

        {/* ================= DESKTOP NAVIGATION MENU ITEMS (Hidden on Mobile, block on md screens up) ================= */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3D4127]/80 h-full">
          <Link href="/" className="hover:text-[#636B2F] transition-colors py-7">Home</Link>
          
          {/* COMPANY DROP-DOWN (HOVER TRIGGER) */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-[#636B2F] transition-colors focus:outline-none cursor-pointer py-7">
              Company
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-[80px] left-0 mt-0 w-48 bg-white rounded-xl border border-[#BAC095]/40 p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-left z-50">
              <Link href="/company/about-us" className="block px-4 py-2 text-[#3D4127] hover:bg-[#D4DE95]/30 rounded-md transition-colors">About Us</Link>
              <Link href="/company/team" className="block px-4 py-2 text-[#3D4127] hover:bg-[#D4DE95]/30 rounded-md transition-colors">About Team</Link>
            </div>
          </div>

          {/* EXPANDED SERVICES MEGA MENU (HOVER TRIGGER) */}
          <div className="static group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-[#636B2F] transition-colors focus:outline-none cursor-pointer py-7">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-[80px] left-0 right-0 w-full bg-white border-b border-[#BAC095]/30 p-8 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 max-w-7xl mx-auto rounded-b-2xl border-x">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left Column: Domain Groupings */}
                <div className="space-y-4 border-r border-[#BAC095]/20 pr-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D4127]/40">Core Offerings</h3>
                  <div className="space-y-1">
                    <Link href="/services/custom-web-development" className="block p-2.5 rounded-lg text-sm text-[#3D4127] hover:bg-[#D4DE95]/20 hover:text-[#636B2F] font-bold transition-all">
                      Custom Web App Development
                    </Link>
                    <Link href="/services/headless-commerce" className="block p-2.5 rounded-lg text-sm text-[#3D4127] hover:bg-[#D4DE95]/20 hover:text-[#636B2F] font-bold transition-all">
                      E-Commerce & Headless Commerce
                    </Link>
                    <Link href="/services/mvp-development" className="block p-2.5 rounded-lg text-sm text-[#3D4127] hover:bg-[#D4DE95]/20 hover:text-[#636B2F] font-bold transition-all">
                      MVP Development for Startups
                    </Link>
                  </div>
                </div>

                {/* Center Column: System Support Streams */}
                <div className="space-y-4 border-r border-[#BAC095]/20 pr-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#3D4127]/40">Optimization Tracks</h3>
                  <div className="space-y-1">
                    <Link href="/services/ui-ux-redesign" className="block p-2.5 rounded-lg text-sm text-[#3D4127] hover:bg-[#D4DE95]/20 hover:text-[#636B2F] font-bold transition-all">
                      Premium UI/UX & Redesign
                    </Link>
                    <Link href="/services/maintenance-optimization" className="block p-2.5 rounded-lg text-sm text-[#3D4127] hover:bg-[#D4DE95]/20 hover:text-[#636B2F] font-bold transition-all">
                      Maintenance & Optimization
                    </Link>
                  </div>
                </div>

                {/* Right Column: Premium Showcase Callout */}
                <div className="bg-[#F4F6F0]/50 border border-[#BAC095]/20 p-6 rounded-xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#636B2F] mb-2">Systems Architecture Certification</h4>
                    <p className="text-xs text-[#3D4127]/70 font-medium leading-relaxed">
                      Every production engine deployed by our core architects guarantees WCAG compliance metrics and enterprise threat risk frameworks.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#BAC095]/20 mt-4 flex items-center justify-between text-xs font-bold text-[#636B2F]">
                    <span>OWASP Secure Verified</span>
                    <span>100% Automated Validations</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link href="/tools" className="hover:text-[#636B2F] transition-colors py-7">Tools</Link>
          <Link href="/casestudy" className="hover:text-[#636B2F] transition-colors py-7">Case Study</Link>
          <Link href="/blog" className="hover:text-[#636B2F] transition-colors py-7">Blog</Link>
          <Link href="/pricing" className="hover:text-[#636B2F] transition-colors py-7">Pricing</Link>
          <Link href="/contact" className="hover:text-[#636B2F] transition-colors py-7">Contact</Link>
        </div>

        {/* Desktop Call To Action Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <Link href="/contact" className="bg-[#636B2F] hover:bg-[#3D4127] px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all shadow-md">
            Get Started
          </Link>
        </div>

        {/* ================= MOBILE HAMBURGER BUTTON (Visible only on mobile/tablet) ================= */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#3D4127] focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Responsive Menu"
        >
          <span className="text-2xl font-bold">{isMobileMenuOpen ? '✕' : '≡'}</span>
        </button>
      </div>

      {/* ================= MOBILE EXPANDED NAVIGATION DRAWER ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#BAC095]/20 w-full px-6 py-6 space-y-4 shadow-xl flex flex-col font-medium text-sm text-[#3D4127]/90 max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[#F4F6F0] hover:text-[#636B2F]">Home</Link>
          
          {/* Company Section for Mobile */}
          <div className="space-y-1 py-1">
            <div className="text-xs font-black uppercase tracking-wider text-[#3D4127]/40 mb-1">Company</div>
            <Link href="/company/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">About Us</Link>
            <Link href="/company/team" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">About Team</Link>
          </div>

          {/* Services Section for Mobile */}
          <div className="space-y-1 py-1">
            <div className="text-xs font-black uppercase tracking-wider text-[#3D4127]/40 mb-1">Services</div>
            <Link href="/services/custom-web-development" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">Custom Web App Development</Link>
            <Link href="/services/headless-commerce" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">E-Commerce & Headless Commerce</Link>
            <Link href="/services/mvp-development" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">MVP Development for Startups</Link>
            <Link href="/services/ui-ux-redesign" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">Premium UI/UX & Redesign</Link>
            <Link href="/services/maintenance-optimization" onClick={() => setIsMobileMenuOpen(false)} className="block pl-3 py-1.5 text-sm hover:text-[#636B2F]">Maintenance & Optimization</Link>
          </div>

          {/* Core Routes */}
          <div className="flex flex-col space-y-3 pt-2 border-t border-[#F4F6F0]">
            <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#636B2F]">Tools</Link>
            <Link href="/casestudy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#636B2F]">Case Study</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#636B2F]">Blog</Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#636B2F]">Pricing</Link>
          </div>

          {/* Mobile Action Call to Action Button */}
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-[#636B2F] text-white py-3 rounded-full font-bold text-sm block shadow-md hover:bg-[#3D4127] transition-all"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}