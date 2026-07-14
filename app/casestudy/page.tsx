'use client';

import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "Internal Demonstration Project",
      title: "Modern Business Website Built with Next.js & SEO-First Architecture",
      challenge:
        "Many growing businesses rely on outdated websites that load slowly, perform poorly on search engines, and fail to convert visitors into potential customers.",
      solution:
        "SCY Innovation designed and developed a modern responsive website using Next.js, Tailwind CSS, server-side rendering, performance optimization, structured metadata, and SEO best practices to deliver an excellent user experience across all devices.",
      impact:
        "Demonstrates our capability to build fast, scalable, and SEO-friendly business websites with clean architecture and professional design standards."
    },
    {
      client: "Prototype Solution",
      title: "Custom Business Management Dashboard",
      challenge:
        "Small and medium-sized businesses often manage daily operations using spreadsheets and disconnected tools, making tracking and reporting inefficient.",
      solution:
        "Developed a scalable dashboard concept featuring authentication, role-based access, analytics, data management modules, responsive layouts, and API-ready architecture suitable for future business growth.",
      impact:
        "Provides a foundation for secure, customizable business management systems that can evolve with client requirements."
    },
    {
      client: "Educational Project",
      title: "Madrasa Management System",
      challenge:
        "Educational institutions require a centralized platform to manage admissions, student records, batches, attendance, fees, and administrative activities efficiently.",
      solution:
        "Designed a full-stack management application with modern frontend technologies, secure backend APIs, database integration, and an intuitive administrative interface to streamline everyday operations.",
      impact:
        "Showcases our experience in developing structured management systems capable of handling real-world educational workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE ADVANCED SEO METATAG SYSTEM FOR CASE STUDIES ================= */}
      <title>Case Studies & Solution Portfolio | SCY Innovation</title>
      <meta name="description" content="Explore our technical demonstrations, custom management dashboards, and production web application architectures engineered for operational scaling." />
      <meta name="keywords" content="SCY Innovation Portfolio, Next.js Case Studies, Custom Dashboards, Full-Stack Web Applications, Software Engineering Metrics" />
      <link rel="canonical" href="https://scyinnovation.com/case-studies" />
      
      {/* Open Graph Profile Framework */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com/case-studies" />
      <meta property="og:title" content="Case Studies & Solution Portfolio | SCY Innovation" />
      <meta property="og:description" content="Explore our technical demonstrations, custom management dashboards, and production web application architectures engineered for operational scaling." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Technical Solutions Portfolio Archive" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com/case-studies" />
      <meta name="twitter:title" content="Case Studies & Solution Portfolio | SCY Innovation" />
      <meta name="twitter:description" content="Explore our technical demonstrations, custom management dashboards, and production web application architectures engineered for operational scaling." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />

      {/* ================= MAIN CONTENT SECTION ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-24 px-6">

        {/* Header Block: Smooth Fade-Up Entrance */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-white uppercase bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Technical Portfolio
          </span>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#3D4127] leading-tight">
            Solution Portfolio & Technical Demonstrations
          </h1>

          <p className="text-[#636B2F] text-base md:text-lg font-medium leading-relaxed">
            Explore a selection of projects, prototypes, and technical solutions
            that demonstrate how SCY Innovation approaches modern software
            engineering, scalable architecture, and digital transformation.
          </p>
        </div>

        {/* Portfolio Narrative List Grid: Cascading Card Timelines */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all space-y-6"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >

              {/* Meta Label Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#BAC095]/20 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#636B2F] uppercase tracking-wider bg-[#F4F6F0] px-3 py-1 rounded-md border border-[#BAC095]/10">
                    Project: {study.client}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#3D4127]/50 uppercase tracking-widest font-mono">
                  SCY Innovation Portfolio // 2026
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#3D4127]">
                {study.title}
              </h2>

              {/* Three-Tier Problem Solving Narrative Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                <div className="space-y-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#3D4127]/40">
                    01. The Challenge
                  </h3>

                  <p className="text-xs md:text-sm text-[#3D4127]/80 font-medium leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#636B2F]">
                    02. The Solution
                  </h3>

                  <p className="text-xs md:text-sm text-[#3D4127]/80 font-medium leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div className="space-y-2 bg-[#F4F6F0]/50 p-5 rounded-2xl border border-[#BAC095]/20">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#3D4127]/60">
                    03. Project Outcome
                  </h3>

                  <p className="text-xs md:text-sm text-[#3D4127] font-bold leading-relaxed">
                    {study.impact}
                  </p>
                </div>
              </div>

              {/* Link CTA Trigger */}
              <div className="pt-4 text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black text-[#636B2F] hover:text-[#3D4127] transition-colors uppercase tracking-widest"
                >
                  Discuss Your Project <span>→</span>
                </Link>
              </div>

            </div>
          ))}
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