'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutUsPage() {
  const corporateStats = [
    { value: "99.9%", label: "System Uptime Architecture" },
    { value: "100+", label: "Automated Sprint Validations" },
    { value: "WCAG", label: "Accessibility Compliance Standards" },
    { value: "OWASP", label: "Security Risk Framework Mitigations" },
  ];

  const processSteps = [
    { num: "01", title: "Discovery & Infrastructure Audit", desc: "We map your legacy systems, identify hidden performance bottlenecks, and flag potential security vulnerabilities." },
    { num: "02", title: "Decoupled Architecture Blueprinting", desc: "Our team designs custom, serverless, or microservices-based roadmaps engineered specifically for modular scale." },
    { num: "03", title: "Rigorous CI/CD Execution", desc: "Continuous integration pipelines run automated sprint validations, stress-testing every layer before it reaches deployment." },
    { num: "04", title: "24/7 Proactive Security Management", desc: "We deploy real-time monitoring arrays to mitigate risks under the OWASP framework before they touch live workloads." }
  ];

  const techStack = [
    { domain: "Cloud & Infrastructure", tools: "AWS, Azure, Docker, Kubernetes, Serverless" },
    { domain: "Frontend Runtimes", tools: "Next.js, React, TypeScript, TailwindCSS" },
    { domain: "Backend & Systems", tools: "Node.js, Python, Go, GraphQL, REST APIs" },
    { domain: "Database & Security", tools: "PostgreSQL, MongoDB, Redis, IAM, TLS/SSL" }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white">
      
      {/* ================= MAIN CONTENT SECTIONS ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6 overflow-x-hidden">
        
        {/* ================= HERO & METRICS SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-28">
          {/* Left Text Block */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/30 px-3 py-1 rounded-full">
              Corporate Dossier
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3D4127] leading-[1.1]">
              Engineering Resilient Digital Infrastructure
            </h1>
            <p className="text-base md:text-lg text-[#3D4127]/80 font-medium leading-relaxed">
              At SCY Innovation, we don’t just write scripts. We engineer modern decoupled application architectures built precisely to shield your business operations from system downtime and scalability roadblocks.
            </p>
            <p className="text-sm md:text-base text-[#3D4127]/70 font-medium leading-relaxed">
              Our core engineering team balances performance-focused frameworks with clean accessibility compliance guidelines, ensuring every system launch executes with enterprise-grade stability from step one.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-bold px-6 py-3 rounded-full transition-all text-sm shadow-md inline-block">
                Review Our Architecture Guidelines
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid Panel */}
          <div className="grid grid-cols-2 gap-6">
            {corporateStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#BAC095]/30 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-black text-[#636B2F] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-[#3D4127]/60 uppercase tracking-wider leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= THE NARRATIVE / ORIGIN SECTION ================= */}
        <div className="max-w-6xl mx-auto mb-28 grid grid-cols-1 md:grid-cols-3 gap-12 items-start border-t border-[#BAC095]/30 pt-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#3D4127]">Our Core Trajectory</h2>
            <p className="text-[#636B2F] text-sm font-medium mt-2">Why we established SCY Innovation.</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-[#3D4127]/80 font-medium leading-relaxed text-sm md:text-base">
            <p>
              SCY Innovation was founded to address a critical flaw in modern IT consulting: the systemic accumulation of architectural debt. Too often, young enterprises are bottlenecked by brittle, monolithic software patterns that break under sudden spikes in consumer traffic. 
            </p>
            <p>
              We built this firm to supply businesses with enterprise-grade development pipelines from day one. By prioritizing serverless infrastructure optimization, deep security validation parameters, and robust data integrity vectors, we give our partners the power to scale rapidly without facing catastrophic logic crashes.
            </p>
          </div>
        </div>

        {/* ================= ENGINEERING STANDARDS PILLARS ================= */}
        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto space-y-12 mb-28 shadow-sm">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3D4127]">Our Engineering Standards</h2>
            <p className="text-[#636B2F] text-sm font-medium">The architectural pillars behind every line of system code we deploy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Pillar 1 */}
            <div className="space-y-3">
              <div className="text-xl">🛡️</div>
              <h3 className="text-lg font-bold text-[#3D4127]">Bulletproof Data Integrity</h3>
              <p className="text-sm text-[#3D4127]/70 font-medium leading-relaxed">
                Implementing rigorous protection vectors across all API connections, keeping your data assets safe against continuous vulnerability layers.
              </p>
            </div>

            {/* Standard Pillar 2 */}
            <div className="space-y-3">
              <div className="text-xl">⚡</div>
              <h3 className="text-lg font-bold text-[#3D4127]">Hyper-Optimized Runtimes</h3>
              <p className="text-sm text-[#3D4127]/70 font-medium leading-relaxed">
                Deploying serverless static routing models that consistently score green in Core Web Vital matrices, ensuring zero client friction.
              </p>
            </div>

            {/* Standard Pillar 3 */}
            <div className="space-y-3">
              <div className="text-xl">📈</div>
              <h3 className="text-lg font-bold text-[#3D4127]">Modular Structural Scaling</h3>
              <p className="text-sm text-[#3D4127]/70 font-medium leading-relaxed">
                Structuring applications cleanly so future engineering teams can inject additional modules smoothly without tearing down core logic.
              </p>
            </div>
          </div>
        </div>

        {/* ================= TECHNICAL DNA / TECH STACK PANEL ================= */}
        <div className="max-w-6xl mx-auto mb-28 space-y-8">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3D4127]">Our Technical DNA</h2>
            <p className="text-[#636B2F] text-sm font-medium">A standardized overview of the technology ecosystems we actively manage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="bg-white/60 border border-[#BAC095]/20 p-6 rounded-2xl flex flex-col justify-between space-y-3">
                <span className="text-sm font-bold text-[#636B2F] tracking-wide uppercase">{stack.domain}</span>
                <p className="text-base font-semibold text-[#3D4127]/90 tracking-tight">{stack.tools}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EXECUTION ROADMAP (PROCESS) ================= */}
        <div className="max-w-6xl mx-auto mb-28 space-y-12">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3D4127]">The Execution Framework</h2>
            <p className="text-[#636B2F] text-sm font-medium">How we transition your digital assets from legacy layouts into modern systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#BAC095]/30 p-6 rounded-2xl space-y-4 relative shadow-sm">
                <div className="text-4xl font-black text-[#D4DE95]/60 absolute top-4 right-4 leading-none select-none">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-[#3D4127] pr-8 pt-2">
                  {step.title}
                </h4>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FINAL CALL TO ACTION (CTA) ================= */}
        <div className="max-w-6xl mx-auto bg-[#636B2F] rounded-3xl p-8 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Architecture?
            </h2>
            <p className="text-sm md:text-base text-white/80 font-medium max-w-xl mx-auto leading-relaxed">
              Partner with SCY Innovation to eliminate technical debt, minimize performance friction, and secure your systems under industry-validated code guidelines.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="bg-[#F4F6F0] text-[#3D4127] hover:bg-white font-extrabold px-8 py-4 rounded-full transition-all text-sm shadow-lg tracking-tight inline-block">
                Schedule a Technical Consultation
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* ================= RESTRUCTURED REUSABLE FOOTER COMPONENT ================= */}
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">𝕏 Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">👥 Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">📸 Instagram</a>
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
                <a href="mailto:adilshaikh345as@gmail.com?subject=Inquiry" className="hover:text-white hover:underline transition-all">
                  adilshaikh345as@gmail.com
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