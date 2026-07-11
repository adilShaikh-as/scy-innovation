'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const heroGraphics = [
    {
      src: "/hero-cloud.png",
      alt: "SCY Innovation Systems Operations Dashboard Graphic"
    },
    {
      src: "/hero-website-mobile.png",
      alt: "SCY Innovation Responsive Web and Mobile layouts"
    },
    {
      src: "/hero-ai-ml.png",
      alt: "SCY Innovation Advanced Application Logic Engineering"
    }
  ];

  const [currentGraphic, setCurrentGraphic] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGraphic((prev) => (prev + 1) % heroGraphics.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroGraphics.length]);

  const corporateStats = [
    { value: "50+", label: "Web Applications Deployed" },
    { value: "99.9%", label: "Uptime Architecture Rating" },
    { value: "15+", label: "Engineers & Designers" },
    { value: "100%", label: "Client Project Satisfaction" },
    { value: "24/7", label: "Remote System Monitoring" },
  ];

  const challenges = [
    { title: "Bridging the Modern UI Skill Gap", desc: "Clunky legacy codebases turn away active users. We develop cutting-edge fluid user interfaces built for high retention and seamless client engagement layouts." },
    { title: "Eliminating Brittle Infrastructure", desc: "Monolithic software systems fail during high seasonal consumer traffic. Our serverless architecture models offer horizontal modular scaling parameters." },
    { title: "Enforcing Ironclad Web Security", desc: "Web vulnerabilities jeopardize critical transactional pipelines. We build frameworks explicitly aligned to prevent the top OWASP security risks." }
  ];

  const engineeringSteps = [
    { step: "01", title: "Discovery & System Strategy", desc: "We map your operational workflows, target consumer demographics, and product scope parameters collaboratively." },
    { step: "02", title: "High-Fidelity UI/UX Architecture", desc: "Designing wireframe frameworks that balance performance-focused speed patterns with premium custom aesthetics." },
    { step: "03", title: "Decoupled Engineering Execution", desc: "Writing modern modular code blueprints using highly scalable tools like Next.js, React, and TypeScript." },
    { step: "04", title: "Automated Pipeline Validations", desc: "Running deep integration checks, accessibility audits, and security vulnerability parameter mitigation layers." },
    { step: "05", title: "Continuous Global Cloud Deployment", desc: "Deploying your application on distributed serverless architecture networks for hyper-optimized load speeds." }
  ];

  const industries = [
    { title: "E-commerce & Retail", desc: "Blazing fast headless e-commerce checkouts, payment processing matrices, and scalable inventories." },
    { title: "B2B SaaS Systems", desc: "Robust data multi-tenancy configurations, metric dashboards, and decoupled custom routing controls." },
    { title: "FinTech & Secure Portals", desc: "Encryption layer parameter management, API validations, and deep ledger data safety architecture." },
    { title: "EdTech Learning Hubs", desc: "Responsive video processing pipelines, dynamic student profile interfaces, and clean WCAG accessibility guidelines." }
  ];

  const techStack = [
    { category: "Frontend Frameworks", tools: ["Next.js", "React", "TypeScript", "TailwindCSS", "Remix"] },
    { category: "Backend Systems", tools: ["Node.js", "Python", "Go Language", "GraphQL APIs", "REST Architectures"] },
    { category: "Database & Storage", tools: ["PostgreSQL", "MongoDB", "Redis Caching", "Prisma ORM", "Supabase"] },
    { category: "Cloud & Devops", tools: ["AWS Ecosystem", "Vercel Platform", "Docker Containers", "GitHub Pipelines", "TLS Security"] }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="space-y-6 max-w-2xl" data-aos="fade-right" data-aos-delay="100">
          <div className="flex flex-wrap gap-2">
            <span className="text-[11px] font-extrabold tracking-wider text-white uppercase bg-[#636B2F] px-3.5 py-1.5 rounded-full shadow-sm">
              ✨ Next-Gen Web Architecture
            </span>
            <span className="text-[11px] font-extrabold tracking-wider text-[#636B2F] uppercase bg-[#BAC095]/20 border border-[#BAC095]/40 px-3.5 py-1.5 rounded-full">
              W3C Certified Standards
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#3D4127] leading-[1.05]">
            Global <span className="text-[#636B2F]">Website Development</span> & Custom Applications
          </h1>
          
          <p className="text-base md:text-lg text-[#3D4127]/80 font-medium leading-relaxed">
            With web application boundaries evolving rapidly, your digital storefront needs more than just a template. SCY Innovation delivers custom end-to-end engineering, serverless decoupled layouts, and hyper-optimized runtimes to shield your business operations from scalability roadblocks.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer" href="/contact">
              Get Started Today <span>→</span>
            </Link>
          </div>

          {/* Metrics Grid Row inside Hero */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 pt-8 border-t border-[#BAC095]/30">
            {corporateStats.map((stat, i) => (
              <div key={i} className="space-y-1" data-aos="fade-up" data-aos-delay={200 + i * 50}>
                <div className="text-2xl md:text-3xl font-black text-[#636B2F] tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-bold text-[#3D4127]/60 uppercase tracking-tight leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Free Floating Dynamic Image Stack */}
        <div className="flex flex-col justify-center items-center w-full relative self-center lg:-mt-6" data-aos="fade-left" data-aos-delay="200">
          <div className="absolute w-[500px] h-[400px] bg-[#BAC095]/10 rounded-full filter blur-3xl -z-10 right-0 top-0"></div>
          
          {/* Visual Frame */}
          <div className="relative w-full max-w-[540px] xl:max-w-[620px] aspect-[16/10] transition-all duration-500 lg:scale-105 xl:scale-110">
            {heroGraphics.map((graphic, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  currentGraphic === idx 
                    ? 'opacity-100 scale-100 pointer-events-auto z-10' 
                    : 'opacity-0 scale-95 pointer-events-none z-0'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image 
                    alt={graphic.alt} 
                    className="object-contain" 
                    fill 
                    priority={true}
                    unoptimized={true}
                    sizes="(max-w-1024px) 100vw, 620px" 
                    src={graphic.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE GLOBAL CHALLENGES SECTION ================= */}
      <section className="bg-white border-y border-[#BAC095]/20 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3D4127]">
              Solving the 3 Biggest Web Development Challenges
            </h2>
            <p className="text-[#636B2F] text-sm font-semibold">
              The software landscape has shifted. We engineer robust digital architectures built to eliminate modern roadblocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((ch, i) => (
              <div 
                key={i} 
                className="bg-[#F4F6F0]/40 border border-[#BAC095]/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-10 h-10 rounded-xl bg-[#BAC095]/20 flex items-center justify-center text-lg">
                  {i === 0 ? '🎨' : i === 1 ? '🧬' : '🛡️'}
                </div>
                <h3 className="text-xl font-bold text-[#3D4127] tracking-tight">{ch.title}</h3>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STANDARDS & COMPLIANCE ================= */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3D4127]">
              Our Global Standards & <br />
              <span className="text-[#636B2F]">Compliance Framework</span>
            </h2>
            <p className="text-sm md:text-base text-[#3D4127]/80 font-medium leading-relaxed">
              We follow rigorous international protocol guidelines to guarantee your user data stays secure, application response configurations execute with peak optimization, and digital interfaces remain accessible globally.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "WCAG Accessibility Compliant", desc: "Every line of client code is audited for inclusive contrast ratios and readable screen parameters." },
                { title: "OWASP Top 10 Security", desc: "Rigorous protection scripts across form validation modules to prevent malicious injections." },
                { title: "W3C Semantic Standards", desc: "Clean semantic markup that modern indexing spiders favor for maximum natural SEO rankings." },
                { title: "GDPR Data Processing", desc: "Implementing cookie compliance handling configurations and secure local token storage patterns." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-white rounded-xl border border-[#BAC095]/20 space-y-1 shadow-sm"
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                >
                  <h4 className="text-sm font-bold text-[#3D4127]">{item.title}</h4>
                  <p className="text-[11px] text-[#3D4127]/60 font-semibold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Stack Panel */}
          <div className="bg-white border border-[#BAC095]/30 p-8 rounded-3xl space-y-4 shadow-sm" data-aos="fade-left" data-aos-delay="150">
            {[
              { val: "100%", label: "Core Web Vitals Performance Audit Verified", badge: "🟢" },
              { val: "W3C", label: "Semantic Structuring Validation Standards Applied", badge: "🔵" },
              { val: "OWASP", label: "Security Risk Mitigation Layer Integrated", badge: "🟣" }
            ].map((box, i) => (
              <div 
                key={i} 
                className="bg-[#F4F6F0]/40 border border-[#BAC095]/20 p-5 rounded-2xl flex items-center gap-4 shadow-sm"
                data-aos="fade-left"
                data-aos-delay={200 + i * 100}
              >
                <span className="text-sm font-black text-[#636B2F] bg-white px-3 py-1.5 rounded-lg border border-[#BAC095]/30 shadow-sm">
                  {box.badge} {box.val}
                </span>
                <span className="text-xs font-bold text-[#3D4127]/80">{box.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STEP-BY-STEP METHODOLOGY ================= */}
      <section className="bg-white border-y border-[#BAC095]/20 py-24 px-6 text-center space-y-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3 mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#BAC095]/20 px-3 py-1 rounded-full">
              The Development Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3D4127]">
              Step-by-Step Production Methodology
            </h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium max-w-xl mx-auto">
              Our engineering workflow focuses on clean, iterative releases. We translate complex parameters into modular digital web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto text-left mb-12">
            {engineeringSteps.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#F4F6F0]/30 border border-[#BAC095]/30 p-6 rounded-2xl space-y-4 relative shadow-sm flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="space-y-3">
                  <div className="text-3xl font-black text-[#BAC095]/40 font-mono leading-none">{item.step}</div>
                  <h4 className="text-base font-bold text-[#3D4127]">{item.title}</h4>
                  <p className="text-xs text-[#3D4127]/70 font-medium leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-full bg-white h-1.5 rounded-full overflow-hidden mt-4 shadow-inner">
                  <div className="bg-[#636B2F] h-full" style={{ width: `${(i+1)*20}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Scale Sub-Banner */}
          <div className="max-w-4xl mx-auto bg-[#F4F6F0]/60 border border-[#BAC095]/40 rounded-2xl p-4 flex flex-wrap justify-between items-center gap-4 px-6 shadow-sm" data-aos="zoom-in">
            <div className="flex items-center gap-3 text-left">
              <span className="text-2xl">🚀</span>
              <div>
                <div className="text-sm font-bold text-[#3D4127]">Ready to Scale Up Your Architecture?</div>
                <div className="text-xs text-[#3D4127]/60 font-medium">Experience our system blueprint framework today.</div>
              </div>
            </div>
            <Link href="/contact" className="bg-[#636B2F] hover:bg-[#3D4127] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer">
              Optimize My Application
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY EXPERTISE ================= */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center space-y-16">
          <div className="space-y-2" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-[#3D4127]">Specialized Industry Expertise</h2>
            <p className="text-xs md:text-sm text-[#636B2F] font-semibold max-w-xl mx-auto">
              We design enterprise infrastructure parameters across growth-focused and regulated digital market tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="bg-white border border-[#BAC095]/30 p-6 rounded-2xl space-y-4 hover:shadow-md transition-all shadow-sm"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4F6F0]/60 border border-[#BAC095]/30 flex items-center justify-center text-lg">
                  {i === 0 ? '🛒' : i === 1 ? '📊' : i === 2 ? '🔒' : '🎓'}
                </div>
                <h4 className="text-base font-bold text-[#3D4127]">{ind.title}</h4>
                <p className="text-xs text-[#3D4127]/70 font-medium leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK PANEL ================= */}
      <section className="bg-white border-y border-[#BAC095]/20 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3D4127]">
              Our Engineering Ecosystem & Technology DNA
            </h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium">
              We don’t just skin components; we configure robust website frameworks that scale smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {techStack.map((stack, i) => (
              <div 
                key={i} 
                className="bg-[#F4F6F0]/40 border border-[#BAC095]/30 p-6 rounded-2xl space-y-4 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h4 className="text-xs font-black text-[#636B2F] uppercase tracking-wider border-b border-[#BAC095]/20 pb-2">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, idx) => (
                    <span key={idx} className="bg-white text-[#3D4127]/80 text-[11px] font-bold px-2.5 py-1.5 rounded-md border border-[#BAC095]/10 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA CONVERSION BANNER ================= */}
      <section 
        className="max-w-5xl mx-auto my-24 bg-[#636B2F] rounded-3xl p-8 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Elevate Your Codebase Quality?
          </h2>
          <p className="text-xs md:text-sm text-white/80 font-medium max-w-xl mx-auto leading-relaxed">
            Partner with SCY Innovation to eliminate technical debt layers, leverage fast headless performance routing, and secure your systems under industry-validated blueprints.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="bg-[#F4F6F0] text-[#3D4127] hover:bg-white font-black px-8 py-4 rounded-xl transition-all text-xs shadow-lg tracking-wide inline-block cursor-pointer">
              Start Free Architecture Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANT FOOTER COMPONENT ================= */}
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
              <li className="flex items-center gap-1.5 mt-1">
                <span className="text-[10px] uppercase font-black text-[#BAC095] block">💻 Remote Hub Active Worldwide</span>
              </li>
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