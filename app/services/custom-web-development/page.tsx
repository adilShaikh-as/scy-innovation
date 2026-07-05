'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CustomWebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const capabilities = [
    { title: "Decoupled Serverless Architecture", desc: "We completely separate your presentation layers from backend data pipelines, ensuring that sudden spikes in frontend traffic never degrade core administrative background workflows.", icon: "⚡" },
    { title: "Airtight API Security & Sanitization", desc: "Every payload entry, mutation route, and data handshake is stringently sanitized and fortified to align directly with modern OWASP top security parameters.", icon: "🛡️" },
    { title: "Type-Safe System Runtimes", desc: "By deploying strict TypeScript standards across your codebase, we eliminate runtime logical faults during the compilation phase long before launch.", icon: "🧬" },
    { title: "ACID Relational Database Tuning", desc: "We design highly optimized indexing parameters and type-safe query pools using PostgreSQL and Prisma, reducing complex dashboard loading bottlenecks.", icon: "📈" }
  ];

  const executionSteps = [
    { num: "01", title: "Discovery Workshop & Data Schema Mapping", desc: "We map out your relational state trees, multi-tenant administrative roles, user journey pathways, and system scope criteria collaboratively." },
    { num: "02", title: "High-Fidelity Wireframing & UI Blueprinting", desc: "Engineering pixel-perfect components that balance performance-focused speed patterns with modern, premium brand design aesthetics." },
    { num: "03", title: "Decoupled Core Application Engineering", desc: "Writing modular, structured logic branches leveraging state-of-the-art frameworks including Next.js, React runtimes, and fast REST/GraphQL APIs." },
    { num: "04", title: "Automated Testing & Quality Gates", desc: "Executing continuous sprint validations, multi-device cross-browsing audits, and intensive accessibility compliance checks." },
    { num: "05", title: "Global Deployment & Cloud Orchestration", desc: "Pushing your finished application straight to edge networks like AWS and Vercel for instantaneous load behaviors globally." }
  ];

  const subTechs = [
    { title: "Frontend Muscle", tools: "Next.js (React), TypeScript, Tailwind CSS, Framer Motion" },
    { title: "Backend Systems", tools: "Node.js, Go Language, RESTful API Layouts, GraphQL Hubs" },
    { title: "Database Layers", tools: "PostgreSQL, MongoDB, Prisma ORM, Redis Memory Caching" },
    { title: "Cloud Optimization", tools: "AWS Clusters, Vercel Edge Hosting, GitHub CI/CD Actions" }
  ];

  const serviceFaqs = [
    { q: "Why do you use Next.js instead of regular monolithic architectures?", a: "Next.js unlocks Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR). This means your web applications load instantly, your search engine footprint scales naturally through pre-rendered metadata, and your infrastructure remains horizontally scalable." },
    { q: "How do you protect sensitive corporate data inside custom dashboards?", a: "We enforce strict role-based access controls (RBAC), utilize cryptographically secure JSON Web Tokens (JWT) for session persistence, sanitize database mutations against injection faults, and encrypt application traffic using advanced TLS layers." },
    { q: "Do we receive the full source code and documentation upon completion?", a: "Yes. Once the final system parameters pass your quality gates, we hand off the full git repository records, deployment environment credentials, and deep markdown architectural document blueprints to your team." }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6 mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Service Domain 01
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Custom Web Application <br />
            <span className="text-[#636B2F]">Development & Architecture</span>
          </h1>
          <p className="text-base md:text-lg text-[#3D4127]/80 font-medium leading-relaxed max-w-3xl">
            We engineer high-performance, resilient corporate dashboard platforms, multi-tenant software systems, and data-intensive workflows built to handle intense operations seamlessly. By moving away from brittle monolithic layouts, we ensure your business infrastructure runs with zero operational friction.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-extrabold px-8 py-4 rounded-xl transition-all text-xs tracking-wide shadow-md inline-block cursor-pointer">
              Scope This Service Now
            </Link>
          </div>
        </div>

        {/* ================= CORE CAPABILITIES (White background division block) ================= */}
        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto space-y-12 mb-28 shadow-sm">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Engineered Structural Capabilities</h2>
            <p className="text-[#636B2F] text-xs font-bold uppercase tracking-wide">The software standards applied across your product line.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, i) => (
              <div key={i} className="bg-[#F4F6F0]/40 border border-[#BAC095]/20 p-6 rounded-2xl space-y-3 transition-colors hover:bg-[#F4F6F0]/10">
                <div className="text-2xl">{item.icon}</div>
                <h4 className="text-lg font-black tracking-tight">{item.title}</h4>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= THE STEP-BY-STEP PROCESS ================= */}
        <div className="max-w-6xl mx-auto mb-28 space-y-16">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/40 px-4 py-1.5 rounded-full inline-block">
              Operational Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-black">The Execution Framework</h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium max-w-md mx-auto">How we transition your complex digital business business parameters from brief into production deployment code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {executionSteps.map((step, i) => (
              <div key={i} className="bg-white border border-[#BAC095]/30 p-6 rounded-2xl space-y-4 relative shadow-sm flex flex-col justify-between">
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
        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto space-y-8 mb-28 shadow-sm">
          <div className="max-w-xl space-y-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Our Platform Ecosystem</h2>
            <p className="text-[#636B2F] text-xs font-bold uppercase tracking-wide">The frameworks we actively maintain for robust web scaling.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subTechs.map((tech, idx) => (
              <div key={idx} className="bg-[#F4F6F0]/50 border border-[#BAC095]/10 p-5 rounded-xl space-y-2">
                <span className="text-[10px] font-black uppercase text-[#636B2F] tracking-wider block border-b border-[#BAC095]/20 pb-1">{tech.title}</span>
                <p className="text-xs font-bold text-[#3D4127]/90 leading-normal tracking-tight">{tech.tools}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SERVICE FAQ ACCORDION ================= */}
        <div className="max-w-4xl mx-auto mb-28 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/40 px-4 py-1.5 rounded-full inline-block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black">Service Deep-Dive Questions</h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium">Quick tactical answers regarding development, protection pipelines, and integration timelines.</p>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((item, index) => (
              <div key={index} className="bg-white border border-[#BAC095]/30 rounded-2xl shadow-sm overflow-hidden transition-all">
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
        <div className="max-w-5xl mx-auto bg-[#636B2F] rounded-3xl p-8 md:p-12 text-center text-white space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-black">Ready to build your standalone platform logic?</h3>
            <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">
              Sync up with our web engineering architecture desk to record your product specifications, wireframe linkage maps, or corporate tech migration timelines.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="bg-[#F4F6F0] text-[#3D4127] hover:bg-white font-black px-6 py-3.5 rounded-xl text-xs transition-all shadow-md inline-block cursor-pointer">
                Initiate Application Scope Brief
              </Link>
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