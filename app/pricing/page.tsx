'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  // State to manage showing technical breakdowns for each tier
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<number>(0);

  const websiteTiers = [
    {
      title: "One-Time Portfolio / Landing",
      subtitle: "Engineered for clean, hyper-fast personal branding and high-conversion layers",
      type: "FIXED INVESTMENT",
      priceUSD: "$600",
      priceINR: "₹50,000",
      period: "per project deployment",
      features: [
        "Single-Page Fluid High-Fidelity Layout",
        "Next.js Statically Optimized Architecture",
        "Tailwind CSS Responsive Visual System",
        "Web3Forms Secure Interactive Inquiry Matrix",
        "Clean Semantic Structure for Natural SEO",
        "Complete Source Code Handoff via GitHub"
      ],
      btnText: "Build My Portfolio Storefront"
    },
    {
      title: "Full Business Web Platform",
      subtitle: "Tailored specifically for full-scale startups, corporate branding, & modern products",
      type: "FIXED INVESTMENT",
      priceUSD: "$1,800",
      priceINR: "₹1,50,000",
      period: "per system deployment",
      features: [
        "Multi-Page Decoupled Web Applications",
        "Headless CMS Integration (Sanity / Strapi)",
        "Advanced Custom Admin Dashboards",
        "Comprehensive Core Web Vitals 100% Performance Tuning",
        "Form Sanitization under OWASP Security Frameworks",
        "Complete Technical Setup & Deployment Documentation"
      ],
      btnText: "Launch Business Platform"
    },
    {
      title: "Long-Term System Maintenance",
      subtitle: "For ongoing optimization, code updates, monitoring, & scaling parameters",
      type: "MONTHLY ENGAGEMENT",
      priceUSD: "$120",
      priceINR: "₹10,000",
      period: "per month rolling framework",
      features: [
        "24/7 Remote Cloud Uptime Monitoring & Status Alerts",
        "Continuous Dependency Security Patch Deployments",
        "Monthly Core Web Vital Performance & Tuning Audits",
        "Dedicated Engineering Sprint Support Hours",
        "API Parameter Adjustments & Router Endpoint Updates",
        "Database Performance Health & Sanity Schema Optimization"
      ],
      btnText: "Secure Maintenance Guard"
    }
  ];

  const technicalWorkflows = [
    {
      title: "Portfolio Workflow Processes",
      costExplanation: "The budget maps to localized UI wireframing, building lightweight static bundles using Next.js Static Site Generation (SSG), and configuring direct client mailing hooks.",
      techStack: "Next.js (App Router), Tailwind CSS, TypeScript, Web3Forms API, Vercel Edge Networks.",
      steps: [
        "UI Design Sync: Mapping layout components, type scales, and color parameters directly matching your brand guidelines.",
        "Static Bundle Assembly: Developing highly modular layout trees optimized to serve pre-rendered HTML payloads directly from global CDNs.",
        "Form Vector Hooking: Intercepting contact form event payloads to transmit clean JSON request strings securely via Web3Forms APIs without backend overhead."
      ]
    },
    {
      title: "Enterprise Platform Engineering",
      costExplanation: "The budget maps to robust structural architecture design, dynamic route modeling, setting up structured data schemas inside a Headless CMS, and multi-layer form sanitation.",
      techStack: "Next.js (Server Components), Sanity.io / Strapi CMS, PostGreSQL, Tailwind CSS, NextAuth, Node Engine hooks.",
      steps: [
        "Data Architecture Design: Setting up custom document content schemas inside Sanity Studio so you can manage copy, media, and services independently.",
        "Hydration & Caching Pipeline: Engineering Next.js Server Components to fetch clean structured data over secure REST/GraphQL API nodes with optimized Incremental Static Regeneration (ISR).",
        "OWASP Hardening: Adding rigorous text sanitation fields, cross-site scripting (XSS) blockers, and header validation layers across all project intake portals."
      ]
    },
    {
      title: "Sustained Maintenance Routine",
      costExplanation: "The monthly budget acts as a dedicated engineering retainer, securing active server check routines and emergency code patches instead of costly ad-hoc hourly pricing loops.",
      techStack: "GitHub Actions, cloud engine webhooks, PageSpeed Insights API tracking, automated error monitoring tools.",
      steps: [
        "Continuous Cloud Monitoring: Integrating monitoring scripts that ping client server routes every 60 seconds to detect latency drops or downtime incidents.",
        "Dependency Patch Cycles: Running scheduled system updates every 30 days to clear outdated npm modules and secure zero-day packages.",
        "Performance Audits: Reviewing active runtime layout charts via Google Lighthouse APIs to counter cumulative layout shifts (CLS) or bundle bloat over time."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE ADVANCED SEO METATAG SYSTEM FOR PRICING ================= */}
      <title>Transparent Pricing Matrices & Engineering Retainers | SCY Innovation</title>
      <meta name="description" content="Review itemized development plan matrices. No hourly drifts. Fixed-cost personal portfolios, multi-tier enterprise web systems, and dedicated support retainers." />
      <meta name="keywords" content="Web Development Cost India, Custom Website Pricing, Next.js Retainer, Maintenance Rates Software, Flat Rate Web Engineering" />
      <link rel="canonical" href="https://scyinnovation.com/pricing" />
      
      {/* Open Graph Profile Framework */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com/pricing" />
      <meta property="og:title" content="Transparent Pricing Matrices & Engineering Retainers | SCY Innovation" />
      <meta property="og:description" content="Review itemized development plan matrices. No hourly drifts. Fixed-cost personal portfolios, multi-tier enterprise web systems, and dedicated support retainers." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Development Investment Tier Options" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com/pricing" />
      <meta name="twitter:title" content="Transparent Pricing Matrices & Engineering Retainers | SCY Innovation" />
      <meta name="twitter:description" content="Review itemized development plan matrices. No hourly drifts. Fixed-cost personal portfolios, multi-tier enterprise web systems, and dedicated support retainers." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-24 px-6">
        
        {/* Page Section Title Block: Smooth Entrance */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-white uppercase bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            💎 Development Investment
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#3D4127] leading-tight">
            Transparent Tier Matrix Built for Modern Scale
          </h1>
          <p className="text-[#636B2F] text-base md:text-lg font-medium leading-relaxed">
            No unexpected hourly bill drifts. Select from optimized local India currency or international global USD pricing benchmarks.
          </p>
        </div>

        {/* 3-Column Pricing Grid Array: Cascade Card Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-20">
          {websiteTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-3xl flex flex-col justify-between transition-all relative ${
                idx === 1 
                  ? 'border-2 border-[#636B2F] shadow-lg lg:scale-105 z-10' 
                  : 'border border-[#BAC095]/40 shadow-sm hover:shadow-md'
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {idx === 1 && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#636B2F] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Requested Blueprint
                </div>
              )}
              
              <div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-[#636B2F] uppercase tracking-wider block">
                    {tier.type}
                  </span>
                  <h3 className="text-xl font-black text-[#3D4127] tracking-tight">{tier.title}</h3>
                  <p className="text-xs text-[#3D4127]/60 font-medium pt-1 leading-relaxed">{tier.subtitle}</p>
                </div>
                
                <div className="mt-6 mb-6">
                  {/* Twin Currency Setup: Top Primary USD, Subtext Native INR */}
                  <span className="text-5xl font-black text-[#3D4127] tracking-tight">{tier.priceUSD}</span>
                  <span className="text-xl font-extrabold text-[#636B2F] ml-2">/ {tier.priceINR}</span>
                  <span className="text-[#3D4127]/60 text-xs font-bold block mt-1 uppercase tracking-wider">
                    {tier.period}
                  </span>
                </div>
                
                <div className="border-t border-[#BAC095]/20 pt-6">
                  <p className="text-xs font-black uppercase tracking-wider text-[#3D4127]/40 mb-4">
                    Architectural Deliverables
                  </p>
                  <ul className="space-y-3.5 text-xs md:text-sm text-[#3D4127]/90 font-semibold">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                        <span className="text-[#636B2F] shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className={`mt-8 block text-center font-extrabold py-4 rounded-xl transition-all text-xs tracking-wide cursor-pointer ${
                  idx === 1 
                    ? 'bg-[#636B2F] text-white hover:bg-[#3D4127] shadow-md shadow-[#636B2F]/15' 
                    : 'bg-[#F4F6F0] text-[#3D4127] border border-[#BAC095]/50 hover:bg-[#636B2F] hover:text-white hover:border-[#636B2F]'
                }`}
              >
                {tier.btnText}
              </Link>
            </div>
          ))}
        </div>

        {/* ================= COMPANY TRANSPARENCY SYSTEM: PROCESS & TECH EXPLANATION ================= */}
        <div className="max-w-6xl mx-auto mb-28 bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-10 shadow-sm space-y-8" data-aos="zoom-in">
          <div className="space-y-2 border-b border-[#F4F6F0] pb-4">
            <h2 className="text-2xl font-black text-[#3D4127] flex items-center gap-2">
              <span>🛠️</span> Engineering Process & Technology Transparency Matrix
            </h2>
            <p className="text-xs md:text-sm font-medium text-[#3D4127]/70">
              We believe in complete transparency. Select a tier layout below to see exactly how your investment breaks down, what you are paying for, and the codebase techniques used to assemble it.
            </p>
          </div>

          {/* Interactive Tab Select Buttons */}
          <div className="flex flex-wrap gap-2">
            {technicalWorkflows.map((workflow, index) => (
              <button
                key={index}
                onClick={() => setActiveWorkflowTab(index)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeWorkflowTab === index
                    ? 'bg-[#636B2F] text-white shadow-sm'
                    : 'bg-[#F4F6F0] text-[#3D4127] hover:bg-[#BAC095]/30'
                }`}
              >
                {workflow.title}
              </button>
            ))}
          </div>

          {/* Active Tab Panel Content */}
          <div className="bg-[#F4F6F0]/40 border border-[#BAC095]/20 rounded-2xl p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-6 space-y-2">
                <h4 className="text-xs font-black uppercase text-[#636B2F] tracking-wider">Cost Parameter Breakdown</h4>
                <p className="text-xs md:text-sm font-semibold text-[#3D4127]/90 leading-relaxed">
                  {technicalWorkflows[activeWorkflowTab].costExplanation}
                </p>
              </div>
              <div className="md:col-span-6 space-y-2">
                <h4 className="text-xs font-black uppercase text-[#636B2F] tracking-wider">Production Stack Modules</h4>
                <code className="block bg-[#3D4127] text-[#F4F6F0] font-mono text-[11px] p-3 rounded-xl border border-black/10 font-bold leading-normal whitespace-pre-wrap overflow-x-auto">
                  {technicalWorkflows[activeWorkflowTab].techStack}
                </code>
              </div>
            </div>

            <div className="pt-4 border-t border-[#BAC095]/20 space-y-3">
              <h4 className="text-xs font-black uppercase text-[#636B2F] tracking-wider">Step-by-Step Architectural Implementation</h4>
              <ol className="space-y-3">
                {technicalWorkflows[activeWorkflowTab].steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="flex gap-3 text-xs md:text-sm font-medium text-[#3D4127]/80 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#636B2F] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {stepIdx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ================= TAILORED ENTERPRISE SUB-CALLOUT ================= */}
        <div className="max-w-4xl mx-auto bg-white border border-[#BAC095]/30 rounded-3xl p-8 text-center space-y-4 shadow-sm" data-aos="fade-up">
          <h3 className="text-xl font-black text-[#3D4127]">Looking for custom, high-end ecosystem architecture?</h3>
          <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium max-w-2xl mx-auto leading-relaxed">
            If your project requires complex dynamic configurations, database sharding, or legacy codebase optimization, reach out to our team directly for an interactive engineering assessment session.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="bg-[#3D4127] hover:bg-[#636B2F] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all inline-block">
              Request Enterprise Project Scope
            </Link>
          </div>
        </div>

      </main>

      {/* ================= FOOTER COMPONENT ================= */}
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
              <li><Link href="/services/custom-web-development" className="hover:text-white transition-colors">Custom Web App Development</Link></li>
              <li><Link href="/services/headless-commerce" className="hover:text-white transition-colors">E-Commerce & Headless Commerce</Link></li>
              <li><Link href="/services/mvp-development" className="hover:text-white transition-colors">MVP Development for Startups</Link></li>
              <li><Link href="/services/ui-ux-redesign" className="hover:text-white transition-colors">Premium UI/UX & Redesign</Link></li>
              <li><Link href="/services/maintenance-optimization" className="hover:text-white transition-colors">Maintenance & Optimization</Link></li>
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