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

  const challenges = [
    { title: "Fixing Outdated Layouts", desc: "Clunky legacy websites turn away users. We build clean, responsive user interfaces designed to look good on modern devices and provide smooth navigation." },
    { title: "Handling Traffic Spikes", desc: "Monolithic software systems fail under heavy traffic. Our serverless Next.js architecture splits pages up so your website stays fast and modular." },
    { title: "Basic Web Vulnerabilities", desc: "Unprotected contact forms open the door to database spam. We implement standard input validation to block malicious submission data." }
  ];

  const engineeringSteps = [
    { step: "01", title: "Project Scoping & Discovery", desc: "We discuss your target audience, core feature goals, and overall design layout styles together before writing any code." },
    { step: "02", title: "UI/UX & Wireframing", desc: "Sketching out visual layouts that balance quick loading speeds with clean, modern minimalist aesthetics." },
    { step: "03", title: "Clean Frontend Coding", desc: "Writing tidy, structured, component-driven code using modern frontend tools like Next.js, React, and TypeScript." },
    { step: "04", title: "Manual Testing & Bug Fixing", desc: "Reviewing layout constraints across mobile screens, ensuring links work properly, and fixing layout bugs." },
    { step: "05", title: "Vercel Cloud Deployment", desc: "Launching your website onto Vercel's global delivery network so it pulls up instantly for your visitors." }
  ];

  const industries = [
    { title: "E-commerce & Retail", desc: "Building modular online storefronts with smooth item viewing cards and fast checkout links." },
    { title: "B2B SaaS Portals", desc: "Clean layout arrangements for customer metric dashboards, side-nav configurations, and simple settings paths." },
    { title: "Services & Local Business", desc: "Highly professional service portfolios built to look great, build brand authority, and turn visitors into client inquiries." },
    { title: "Blogs & Content Portals", desc: "Using headless CMS layouts so you can easily type out, update, and publish informational articles dynamically." }
  ];

  const techStack = [
    { category: "Frontend Core", tools: ["Next.js", "React", "TypeScript", "TailwindCSS"] },
    { category: "Backend & Data APIs", tools: ["Node.js", "REST APIs", "Sanity CMS", "GraphQL"] },
    { category: "Databases & Storage", tools: ["PostgreSQL", "MongoDB", "Supabase Base Layers"] },
    { category: "Cloud & Workflows", tools: ["Vercel Hosting", "GitHub Repositories", "Git Pipelines"] }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE ADVANCED CORRECTED SEO METATAG SYSTEM ================= */}
      <title>SCY Innovation | Web Development & Software Solutions</title>
      <meta name="description" content="SCY Innovation is a web development and software solutions company." />
      <meta name="keywords" content="Website Development, Custom Web Applications, Next.js Developer, Frontend Engineering, System Architecture, Headless Commerce, MVP Development" />
      <link rel="canonical" href="https://scyinnovation.com" />
      
      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com" />
      <meta property="og:title" content="SCY Innovation | Web Development & Software Solutions" />
      <meta property="og:description" content="SCY Innovation is a web development and software solutions company." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Systems Operations Dashboard Architecture" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com" />
      <meta name="twitter:title" content="SCY Innovation | Web Development & Software Solutions" />
      <meta name="twitter:description" content="SCY Innovation is a web development and software solutions company." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="space-y-6 max-w-2xl" data-aos="fade-right" data-aos-delay="100">
          <div className="flex flex-wrap gap-2">
            <span className="text-[11px] font-extrabold tracking-wider text-white uppercase bg-[#636B2F] px-3.5 py-1.5 rounded-full shadow-sm">
              ✨ Next-Gen Web Architecture
            </span>
            <span className="text-[11px] font-extrabold tracking-wider text-[#636B2F] uppercase bg-[#BAC095]/20 border border-[#BAC095]/40 px-3.5 py-1.5 rounded-full">
              Modern Frontend Frameworks
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
              Get Started Today <span>&rarr;</span>
            </Link>
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
              Solving Practical Web Development Bottlenecks
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

      {/* ================= CORE PERFORMANCE & ACCESSIBILITY FUNDAMENTALS ================= */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3D4127]">
              Our Focus on Clean Code & <br />
              <span className="text-[#636B2F]">Website Optimization</span>
            </h2>
            <p className="text-sm md:text-base text-[#3D4127]/80 font-medium leading-relaxed">
              We focus on standard development guidelines to ensure your website runs efficiently, handles images smoothly, and remains readable across standard web viewports.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "Semantic Accessibility Layout", desc: "Structuring text headers and button nodes cleanly so standard screen readers can interpret your layout parameters." },
                { title: "Safe Input Validations", desc: "Setting up character checks on form input fields to stop bot manipulation and automated submission cycles." },
                { title: "Semantic HTML Structure", desc: "Utilizing clean standard markup elements that help standard indexing systems crawl page layouts efficiently." },
                { title: "Standard Storage Safety", desc: "Storing user settings or basic site data configurations inside secure local tokens to keep layout contexts intact." }
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
          <div className="bg-white border border-[#BAC095]/30 p-4 sm:p-8 rounded-3xl space-y-4 shadow-sm" data-aos="fade-left" data-aos-delay="150">
            {[
              { val: "Optimization", label: "Lazy loading layout assets and compressing image framework parameters automatically.", badge: "🟢" },
              { val: "Modular Components", label: "Organizing your frontend elements into clean, repeatable React files for future ease of editing.", badge: "🔵" },
              { val: "Data Sanitization", label: "Cleaning up special character inputs on forms to avoid unwanted layout pipeline text errors.", badge: "🟣" }
            ].map((box, i) => (
              <div 
                key={i} 
                className="bg-[#F4F6F0]/40 border border-[#BAC095]/20 p-4 sm:p-5 rounded-2xl flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4 shadow-sm"
                data-aos="fade-left"
                data-aos-delay={200 + i * 100}
              >
                <span className="text-xs sm:text-sm font-black text-[#636B2F] bg-white px-3 py-1.5 rounded-lg border border-[#BAC095]/30 shadow-sm whitespace-nowrap">
                  {box.badge} {box.val}
                </span>
                <span className="text-xs font-bold text-[#3D4127]/80 flex-1 leading-relaxed">{box.label}</span>
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
        className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-16 bg-[#636B2F] rounded-[2.5rem] px-5 py-10 sm:p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto space-y-5 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight px-1">
            Ready to integrate our specialists into your project roadmap?
          </h2>
          <p className="text-[13px] sm:text-sm text-white/90 font-medium max-w-xl mx-auto leading-relaxed px-2 opacity-90">
            Sync up with our operations desk to review complete wireframe strategies, secure system audits, or custom codebase blueprints tailored exactly to your timeline parameters.
          </p>
          <div className="pt-3">
            <Link href="/contact" className="bg-[#F4F6F0] text-[#3D4127] hover:bg-white font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-xs sm:text-sm shadow-lg tracking-wide inline-block cursor-pointer w-full sm:w-auto">
              Consult With Our Tech Leaders Now
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