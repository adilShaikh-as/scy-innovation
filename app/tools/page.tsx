'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const categories = [
    { id: "FRONTEND", label: "Frontend & Optimization" },
    { id: "BACKEND", label: "Backend & Systems" },
    { id: "DEVops", label: "Cloud & Infrastructure" },
    { id: "SECURITY", label: "Security & Cryptography" }
  ];

  const toolEcosystem = [
    // --- FRONTEND ---
    {
      name: "Next.js",
      role: "Server-Side Rendering & Production Core Web Vitals Optimization",
      category: "FRONTEND",
      desc: "Our primary framework for crafting decoupled, statically optimized digital experiences with zero server lag.",
      badge: "Runtime"
    },
    {
      name: "React.js",
      role: "Component-Driven Highly Responsive Dynamic UI Development",
      category: "FRONTEND",
      desc: "Building highly reusable interface modules to scale design systems efficiently without repetitive development debt.",
      badge: "Library"
    },
    {
      name: "TypeScript",
      role: "Static Typing Framework for Resilient Bug-Free Codebases",
      category: "FRONTEND",
      desc: "Enforcing strict structural parameter checks during sprint phases to neutralize application errors before launch.",
      badge: "Language"
    },
    {
      name: "Tailwind CSS",
      role: "Utility-First Responsive UI Layout Styling Engine",
      category: "FRONTEND",
      desc: "Ensuring cross-device rendering accuracy and responsive pixel precision across modern displays.",
      badge: "Styling"
    },
    {
      name: "Framer Motion",
      role: "Hardware-Accelerated Fluid User Interface Animations",
      category: "FRONTEND",
      desc: "Injecting smooth micro-interactions that maximize layout retention without imposing performance bottlenecks.",
      badge: "Animation"
    },

    // --- BACKEND ---
    {
      name: "Node.js",
      role: "Asynchronous Event-Driven Enterprise Server Logics",
      category: "BACKEND",
      desc: "Architecting light, blazing-fast processing networks designed to seamlessly handle massive concurrent request pools.",
      badge: "Runtime"
    },
    {
      name: "PostgreSQL",
      role: "ACID-Compliant Relational Data Asset Storage Architecture",
      category: "BACKEND",
      desc: "Securing complex business data relationships with optimized query execution indexing.",
      badge: "Database"
    },
    {
      name: "Prisma ORM",
      role: "Type-Safe Relational Mapping & Database Pipeline Verification",
      category: "BACKEND",
      desc: "Abstracting secure query patterns to protect data mutations from structural faults.",
      badge: "Database Tool"
    },
    {
      name: "GraphQL / REST",
      role: "Decoupled Cross-Platform API Communication Layer Protocols",
      category: "BACKEND",
      desc: "Designing fast query entry points to maximize operational data retrieval speeds for front-end layers.",
      badge: "API Architecture"
    },
    {
      name: "Strapi / Sanity",
      role: "Headless Content Management & Data Isolation Architectures",
      category: "BACKEND",
      desc: "Decoupling storage modules from consumer views to unlock infinite scalability workflows.",
      badge: "Headless CMS"
    },

    // --- CLOUD & INFRASTRUCTURE ---
    {
      name: "AWS Ecosystem",
      role: "Distributed Cloud Cluster Operations & Compute Management",
      category: "DEVops",
      desc: "Deploying failover server architectures across global availability sub-regions to maintain constant system up-time.",
      badge: "Cloud Host"
    },
    {
      name: "Docker",
      role: "Immutable Software Component Containerization Engines",
      category: "DEVops",
      desc: "Isolating workspace software variables to guarantee code behaves exactly the same on dev machines as it does live.",
      badge: "Container"
    },
    {
      name: "Vercel Platform",
      role: "Edge-Network Global Routing & Smart Static File Caching",
      category: "DEVops",
      desc: "Delivering instantaneous content access pipelines by serving assets directly from proximity regional hubs.",
      badge: "Edge Hosting"
    },
    {
      name: "GitHub Actions",
      role: "Continuous Integration & Automated Deployment Pipelines",
      category: "DEVops",
      desc: "Running systematic unit tests and security validation scripts on every code adjustment branch instantly.",
      badge: "CI / CD"
    },

    // --- SECURITY & CRYPTOGRAPHY ---
    {
      name: "OWASP Frameworks",
      role: "Continuous Web Application Vulnerability Mitigation Audits",
      category: "SECURITY",
      desc: "Hardening dynamic form parameters and API routes against scripts, data exposure leaks, and broken session tokens.",
      badge: "Security Standard"
    },
    {
      name: "AES-256 Encryption",
      role: "Symmetric Payload Data Protection for Assets at Rest",
      category: "SECURITY",
      desc: "Scrambling private transactional properties under heavy multi-layered encryption metrics before disk recording.",
      badge: "Cryptography"
    },
    {
      name: "RSA-Asymmetric",
      role: "Secure Public-Private Key Exchange Authentication Vectors",
      category: "SECURITY",
      desc: "Establishing bulletproof encryption handshakes between microservice routes to isolate core server access points.",
      badge: "Cryptography"
    },
    {
      name: "FTK Imager Utilities",
      role: "Forensic Environment Acquisition & File Integrity Audits",
      category: "SECURITY",
      desc: "Conducting byte-level data verification checks to trace ecosystem state alterations and safeguard historical logs.",
      badge: "Digital Forensics"
    }
  ];

  const filteredTools = activeTab === 'ALL' 
    ? toolEcosystem 
    : toolEcosystem.filter(t => t.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE SEO METATAG SYSTEM FOR TOOLS ================= */}
      <title>Our Technology DNA & Engineering Stack | SCY Innovation</title>
      <meta name="description" content="Explore our production infrastructure parameters. From optimized frontend architectures to serverless cloud hosting and airtight cryptographic frameworks." />
      <meta name="keywords" content="Next.js Core, AWS Infrastructure, AES-256 Cryptography, Digital Forensics Tools, Headless CMS Architecture, Enterprise Tech Stack" />
      <link rel="canonical" href="https://scyinnovation.com/tools" />
      
      {/* Open Graph Profile Framework */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com/tools" />
      <meta property="og:title" content="Our Technology DNA & Engineering Stack | SCY Innovation" />
      <meta property="og:description" content="Explore our production infrastructure parameters. From optimized frontend architectures to serverless cloud hosting and airtight cryptographic frameworks." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Production Technical Ecosystem Grid" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com/tools" />
      <meta name="twitter:title" content="Our Technology DNA & Engineering Stack | SCY Innovation" />
      <meta name="twitter:description" content="Explore our production infrastructure parameters. From optimized frontend architectures to serverless cloud hosting and airtight cryptographic frameworks." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-white uppercase bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            ⚙️ Production Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#3D4127] leading-tight">
            Our Technology DNA & Engineering Stack
          </h1>
          <p className="text-[#636B2F] text-base md:text-lg font-medium leading-relaxed">
            We don&apos;t just paint visual interfaces. We deploy stable, highly optimized backend patterns and airtight security protocols tailored for enterprise scale.
          </p>
        </div>

        {/* ================= TWO-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-start mb-28">
          
          {/* Left Sticky Sidebar Filter Column */}
          <div 
            className="lg:col-span-3 space-y-2 lg:sticky lg:top-36 bg-white border border-[#BAC095]/30 rounded-2xl p-4 shadow-sm"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="text-xs font-black uppercase tracking-wider text-[#3D4127]/40 px-3 pb-2 border-b border-[#F4F6F0] mb-2">
              Technology Stack
            </div>
            
            <button
              onClick={() => setActiveTab('ALL')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                activeTab === 'ALL'
                  ? 'bg-[#636B2F] text-white shadow-sm'
                  : 'text-[#3D4127] hover:bg-[#BAC095]/20'
              }`}
            >
              <span>All Capabilities</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${activeTab === 'ALL' ? 'bg-white/20 text-white' : 'bg-[#F4F6F0] text-[#636B2F]'}`}>
                {toolEcosystem.length}
              </span>
            </button>

            {categories.map((cat) => {
              const count = toolEcosystem.filter(t => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                    activeTab === cat.id
                      ? 'bg-[#636B2F] text-white shadow-sm'
                      : 'text-[#3D4127] hover:bg-[#BAC095]/20'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${activeTab === cat.id ? 'bg-white/20 text-white' : 'bg-[#F4F6F0] text-[#636B2F]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Tools Main Grid Column */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.map((tool, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#BAC095]/30 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#636B2F]/40 transition-all flex flex-col justify-between group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-black text-[#3D4127] group-hover:text-[#636B2F] transition-colors tracking-tight">
                      {tool.name}
                    </h3>
                    <span className="text-[10px] font-black uppercase bg-[#F4F6F0] text-[#636B2F] border border-[#BAC095]/30 px-2 py-0.5 rounded-md shrink-0">
                      {tool.badge}
                    </span>
                  </div>
                  
                  <div className="bg-[#F4F6F0]/50 border border-[#BAC095]/10 rounded-xl p-3">
                    <div className="text-[10px] font-bold text-[#636B2F] uppercase tracking-wider mb-1">Architecture Parameter</div>
                    <p className="text-xs font-bold text-[#3D4127] leading-snug">
                      {tool.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#3D4127]/70 font-medium leading-relaxed pt-1">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#BAC095]/10 flex justify-between items-center text-[11px] font-mono text-[#3D4127]/30">
                  <span>scy_stack // executed</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#636B2F] transition-opacity font-bold">✔</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= DETAILED ARCHITECTURAL OUTCOME CALLOUTS ================= */}
        <div className="max-w-7xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#BAC095]/30 pt-16">
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
            <div className="text-2xl">⚡</div>
            <h4 className="text-base font-black text-[#3D4127]">Performance First Execution</h4>
            <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
              We completely eliminate legacy technical layout friction by ensuring every dependency we run consistently scores in the green on public performance matrices.
            </p>
          </div>
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
            <div className="text-2xl">🔒</div>
            <h4 className="text-base font-black text-[#3D4127]">Deep Structural Protection</h4>
            <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
              Security parameters are never treated as an afterthought. Cryptographic systems and data validation tokens protect every critical routing endpoint automatically.
            </p>
          </div>
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
            <div className="text-2xl">📈</div>
            <h4 className="text-base font-black text-[#3D4127]">Modular Scaling Parameters</h4>
            <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
              Our decoupled serverless setups allow future engineering workflows to introduce additional feature modules safely without tearing down core data logic.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM CONVERSION BANNER ================= */}
        <div 
          className="mt-28 text-center max-w-4xl mx-auto bg-[#636B2F] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">Require a specialized technology migration?</h3>
            <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed opacity-90">
              Our remote team safely handles custom legacy application overhauls, database cleanups, and transition pipelines onto modern serverless frameworks like Next.js seamlessly.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-[#F4F6F0] text-[#3D4127] hover:bg-white text-xs font-black px-6 py-3.5 rounded-xl transition-all shadow-md tracking-wide cursor-pointer w-full sm:w-auto">
                Request Technology Stack Consultation
              </Link>
            </div>
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