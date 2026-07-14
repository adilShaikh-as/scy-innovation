'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UIUXRedesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const capabilities = [
    { title: "Frictionless Conversion Optimization", desc: "We map out user drop-off points, clunky form architectures, and ambiguous navigation blocks to realign user journeys into a layout engineered for clean, measurable business actions.", icon: "🎯" },
    { title: "Deep Accessibility Mapping (WCAG)", desc: "Every component, typographic hierarchy, and contrast ratio we engineer undergoes systematic validation against rigorous WCAG accessibility compliance guidelines.", icon: "🎨" },
    { title: "Fluid Interactive Component Libraries", desc: "We construct custom, reusable visual component tokens using Tailwind CSS and Framer Motion, enabling micro-interactions that feel responsive without bloating page load weights.", icon: "✨" },
    { title: "Data-Backed Layout Remodeling", desc: "We run comprehensive layout audits tracking real user scroll mechanics and viewport heatmaps to make design choices that back up your technical engineering maturity.", icon: "📊" }
  ];

  const executionSteps = [
    { num: "01", title: "Friction Auditing & User Tracking", desc: "We track your legacy interface data to isolate hidden bottleneck parameters, mismatched layout scales, and navigation roadblocks." },
    { num: "02", title: "Information Architecture Refactoring", desc: "Re-engineering user flows and content structures collaboratively to guarantee clear semantic context for both users and search engine spiders." },
    { num: "03", title: "High-Fidelity Component Prototyping", desc: "Crafting modern interactive interface mockups that present your digital brand with absolute premium pixel precision." },
    { num: "04", title: "Accessibility & Contrast Gateways", desc: "Running the interface layout through rigorous accessibility validation tests to meet standard compliance rules across device targets." },
    { num: "05", title: "Next.js Interface Integration", desc: "Translating verified layout systems smoothly into live component logic, optimized perfectly to retain hyper-fast runtime matrix speeds." }
  ];

  const subTechs = [
    { title: "Visual Blueprinting", tools: "Figma Asset Mapping, High-Fidelity Interactive Wireframes" },
    { title: "Component Systems", tools: "Next.js Components, React Client Logic, Tailwind CSS Tokens" },
    { title: "Fluid Interactions", tools: "Framer Motion Libraries, Hardware-Accelerated CSS Triggers" },
    { title: "Compliance Audits", tools: "WCAG Validation Validators, Lighthouse Vital Check Trackers" }
  ];

  const serviceFaqs = [
    { q: "How does a premium website redesign directly improve our core business conversion rates?", a: "By running extensive audits on consumer behavior matrices, we strip away structural bottlenecks—such as confusing form layouts, slow loading visual weight blocks, and complex navigation structures. Aligning your interface cleanly with clear user actions directly reduces conversion path drop-offs." },
    { q: "Will a full visual redesign slow down our web application load performance?", a: "Not with our engineering stack. While template-based redesigns add bulk, we build modular, lightweight frontend codebases using Next.js static rendering. Your website gains premium layout transformations while scoring green across Core Web Vital matrices." },
    { q: "Can you implement the new user interface systems while retaining our existing backend APIs?", a: "Absolutely. Because we prioritize decoupled application layouts, our team can construct a premium frontend interface layer that connects directly into your legacy server endpoints and database schemas via secure API handshakes." }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE ADVANCED SEO METATAG SYSTEM FOR REDESIGN ================= */}
      <title>Premium UI/UX & Website Redesign Architectures | SCY Innovation</title>
      <meta name="description" content="Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points." />
      <meta name="keywords" content="Premium UI/UX Design, Website Redesign, Conversion Rate Optimization, WCAG Compliance, Tailwind CSS Design Tokens, Frontend Overhaul" />
      <link rel="canonical" href="https://scyinnovation.com/services/ui-ux-redesign" />
      
      {/* Open Graph Profile Framework */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com/services/ui-ux-redesign" />
      <meta property="og:title" content="Premium UI/UX & Website Redesign Architectures | SCY Innovation" />
      <meta property="og:description" content="Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Design Transformation Capabilities" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com/services/ui-ux-redesign" />
      <meta name="twitter:title" content="Premium UI/UX & Website Redesign Architectures | SCY Innovation" />
      <meta name="twitter:description" content="Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />

      {/* ================= HERO SECTION ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6 mb-24" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Service Domain 04
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Premium UI/UX & Website <br />
            <span className="text-[#636B2F]">Redesign Architectures</span>
          </h1>
          <p className="text-base md:text-lg text-[#3D4127]/80 font-medium leading-relaxed max-w-3xl">
            Transform your digital appearance using high-fidelity user research. We realign legacy interfaces into clean, responsive asset structures that remove consumer checkout friction points, optimize interface interactions, and naturally reflect your engineering maturity.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-extrabold px-8 py-4 rounded-xl transition-all text-xs tracking-wide shadow-md inline-block cursor-pointer">
              Scope This Service Now
            </Link>
          </div>
        </div>

        {/* ================= CORE CAPABILITIES ================= */}
        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto space-y-12 mb-28 shadow-sm" data-aos="zoom-in">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Engineered Structural Capabilities</h2>
            <p className="text-[#636B2F] text-xs font-bold uppercase tracking-wide">The software standards applied across your product line.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#F4F6F0]/40 border border-[#BAC095]/20 p-6 rounded-2xl space-y-3 transition-colors hover:bg-[#F4F6F0]/10"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-2xl">{item.icon}</div>
                <h4 className="text-lg font-black tracking-tight">{item.title}</h4>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= THE STEP-BY-STEP PROCESS ================= */}
        <div className="max-w-6xl mx-auto mb-28 space-y-16">
          <div className="text-center space-y-2" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/40 px-4 py-1.5 rounded-full inline-block">
              Operational Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-black">The Execution Framework</h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium max-w-md mx-auto">How we transition your complex digital business parameters from brief into production deployment code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {executionSteps.map((step, i) => (
              <div 
                key={i} 
                className="bg-white border border-[#BAC095]/30 p-6 rounded-2xl space-y-4 relative shadow-sm flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="space-y-2">
                  <div className="text-2xl font-mono font-black text-[#BAC095]/50">{step.num}</div>
                  <h4 className="text-sm font-black tracking-tight leading-snug">{step.title}</h4>
                  <p className="text-[11px] text-[#3D4127]/70 font-medium leading-relaxed">{step.desc}</p>
                </div>
                <div className="w-full bg-[#F4F6F0] h-1 rounded-full overflow-hidden mt-4">
                  <div className="bg-[#636B2F] h-full" style={{ width: `${(i + 1) * 20}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SPECIALIZED TECHNOLOGY DNA ================= */}
        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto space-y-8 mb-28 shadow-sm" data-aos="zoom-in">
          <div className="max-w-xl space-y-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Our Platform Ecosystem</h2>
            <p className="text-[#636B2F] text-xs font-bold uppercase tracking-wide">The interface libraries we actively configure for high-fidelity rendering.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subTechs.map((tech, idx) => (
              <div 
                key={idx} 
                className="bg-[#F4F6F0]/50 border border-[#BAC095]/10 p-5 rounded-xl space-y-2"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <span className="text-[10px] font-black uppercase text-[#636B2F] tracking-wider block border-b border-[#BAC095]/20 pb-1">{tech.title}</span>
                <p className="text-xs font-bold text-[#3D4127]/90 leading-normal tracking-tight">{tech.tools}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SERVICE FAQ ACCORDION ================= */}
        <div className="max-w-4xl mx-auto mb-28 space-y-8">
          <div className="text-center space-y-2" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/40 px-4 py-1.5 rounded-full inline-block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black">Service Deep-Dive Questions</h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium">Quick tactical answers regarding conversion optimization, interaction models, and performance targets.</p>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#BAC095]/30 rounded-2xl shadow-sm overflow-hidden transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button onClick={() => toggleFaq(index)} className="w-full text-left p-5 font-bold text-sm md:text-base text-[#3D4127] flex justify-between items-center bg-white hover:bg-[#F4F6F0]/20 focus:outline-none transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-[#636B2F]">ℹ️</span> {item.q}
                  </span>
                  <span className="text-lg text-[#3D4127]/40 font-mono transition-transform duration-200" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed border-t border-[#F4F6F0]/60 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= INTUITIVE CONVERSION CONTAINER ================= */}
        <div 
          className="max-w-5xl mx-auto bg-[#636B2F] rounded-3xl p-8 md:p-12 text-center text-white space-y-4 shadow-xl relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-black">Ready to overhaul your digital interface?</h3>
            <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">
              Sync up with our web engineering architecture desk to prioritize your design systems, record visual bottlenecks, and map out your interface scaling parameters.
            </p>
            <div className="pt-2">
              <span className="bg-[#F4F6F0] text-[#3D4127] hover:bg-white font-black px-6 py-3.5 rounded-xl text-xs transition-all shadow-md inline-block cursor-pointer">
                <Link href="/contact">Initiate Premium Redesign Brief</Link>
              </span>
            </div>
          </div>
        </div>

      </main>

      {/* ================= SYNCHRONIZED COMPLIANT FOOTER COMPONENT ================= */}
      <footer className="bg-[#3D4127] text-[#F4F6F0]/80 border-t border-[#BAC095]/20 pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#BAC095]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-black text-white tracking-tight">SCY INNOVATION</h3>
            <p className="text-xs font-medium leading-relaxed text-[#F4F6F0]/60 max-w-sm">
              Premium website development and system architecture services. Delivering end-to-end engineered software solutions for forward-thinking industries.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold text-white/70">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">💼 LinkedIn</a>
              <a href="https://x.com/scyinnovation" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">𝕏 Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">👥 Facebook</a>
              <a href="https://www.instagram.com/scyinnovationofficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">📸 Instagram</a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px]">Core Services</h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/services/custom-web-development" className="hover:text-white transition-colors">
                  Custom Web App Development
                </Link>
              </li>
              <li>
                <Link href="/services/headless-commerce" className="hover:text-white transition-colors">
                  E-Commerce & Headless Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/mvp-development" className="hover:text-white transition-colors">
                  MVP Development for Startups
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-redesign" className="hover:text-white transition-colors">
                  Premium UI/UX & Redesign
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance-optimization" className="hover:text-white transition-colors">
                  Maintenance & Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/company/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company/team" className="hover:text-white transition-colors">About Team</Link></li>
            </ul>
          </div>

          {/* Contact Node Column */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px]">Digital Intake Desk</h4>
            <ul className="space-y-2 font-medium text-[#F4F6F0]/70">
              <li className="flex items-center gap-1.5">
                <span>✉️</span>
                <a href="mailto:contact@scyinnovation.com?subject=Inquiry" className="hover:text-white hover:underline transition-all">
                  contact@scyinnovation.com
                </a>
              </li>
              <li className="flex items-center gap-1.5 mt-1">
                <span>📞</span>
                <a href="tel:+918169896469" className="hover:text-white hover:underline transition-all">
                  (+91) 816-989-6469
                </a>
              </li>
              <li><span className="text-[10px] uppercase font-black text-[#BAC095] mt-2 block">💻 Remote Hub Active Worldwide</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Matrix */}
        <div className="max-w-6xl mx-auto pt-8 flex flex-wrap justify-between items-center text-xs font-semibold text-[#F4F6F0]/40 gap-4">
          <div>&copy; 2026 SCY Innovation — All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}