'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TeamPage() {
  const teamLeaders = [
    {
      name: "Adil Shaikh",
      role: "Chief Executive Officer (CEO)",
      bio: "Adil directs the long-term technology trajectory, client relations, and operational growth models at SCY Innovation. Specializing in strategic corporate expansion and high-level digital transformation roadmaps, he ensures client platforms are engineered for extreme scalability and optimized for enterprise value.",
      linkedin: "https://www.linkedin.com/in/adilshaikh345/", 
      portfolioUrl: "https://adilshaikh-as.github.io/Portfolio-Website/", 
      photo: "/Adil-Profile-Image.png", 
      credentials: ["IT Strategy & Leadership", "Digital Transformation", "Platform Scaling & Architecture"]
    },
    {
      name: "Aihtesham Chaudhary",
      role: "Chief Technology Officer (CTO)",
      roleShort: "CTO",
      bio: "Aihtesham manages our remote engineering ecosystem, backend system runtimes, and database optimization frameworks. He specializes in designing complex microservice patterns, custom GraphQL API layouts, and maintaining type-safe deployment standards across all product stacks.",
      linkedin: "https://www.linkedin.com/in/aihtesham-chaudhary-a52143343",
      portfolioUrl: "https://portfolio-pearl-eight-94.vercel.app/", 
      photo: "", 
      credentials: ["Full-Stack Distributed Systems", "Headless CMS Frameworks", "Database Tuning & Sharding"]
    },
    {
      name: "Madan Yadav",
      role: "Chief Operating Officer (COO)",
      roleShort: "COO",
      bio: "Madan oversees product milestone lifecycles, cross-functional remote engineering agile workflows, and user experience compliance. He balances rigorous quality gates with WCAG digital accessibility standards to ensure flawless system delivery parameters.",
      linkedin: "https://linkedin.com/in/madan-yadav",
      portfolioUrl: "https://yourportfolio.com/madan", 
      photo: "", 
      credentials: ["Agile Lifecycle Management", "UI/UX Optimization Analysis", "WCAG & GDPR Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE ADVANCED SEO METATAG SYSTEM FOR TEAM ================= */}
      <title>Our Leadership Team | Executive Technology Directors</title>
      <meta name="description" content="Meet the specialized systems directors, full-stack consultants, and agile product managers shaping modern engineering frameworks at SCY Innovation." />
      <meta name="keywords" content="SCY Innovation Leadership, Adil Shaikh CEO, Technical Project Management, Web Solutions Directors, Systems Architects India" />
      <link rel="canonical" href="https://scyinnovation.com/company/team" />
      
      {/* Open Graph Profile Framework */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com/company/team" />
      <meta property="og:title" content="Our Leadership Team | Executive Technology Directors" />
      <meta property="og:description" content="Meet the specialized systems directors, full-stack consultants, and agile product managers shaping modern engineering frameworks at SCY Innovation." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Executive Architecture Leadership Team" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com/company/team" />
      <meta name="twitter:title" content="Our Leadership Team | Executive Technology Directors" />
      <meta name="twitter:description" content="Meet the specialized systems directors, full-stack consultants, and agile product managers shaping modern engineering frameworks at SCY Innovation." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />
      
      {/* ================= MAIN CONTENT SECTION ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* Header Block: Smooth Entrance Animation */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-white uppercase bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            👥 Executive Leadership Team
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#3D4127] leading-tight">
            Meet the Brains Behind <br />Our Architectural Standards
          </h1>
          <p className="text-[#636B2F] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Our remote-first web engineering directors combine advanced computational logic with practical full-stack execution to deliver top-tier custom software assets.
          </p>
        </div>

        {/* ================= HORIZONTAL LEADERS DISPLAY ROW STACK ================= */}
        <div className="space-y-8 max-w-5xl mx-auto mb-24">
          {teamLeaders.map((leader, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#BAC095]/30 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-10"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Circular Avatar Photo Section Container */}
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#BAC095]/40 shadow-sm shrink-0 bg-gradient-to-br from-white to-[#BAC095]/10 flex flex-col items-center justify-center text-center p-4">
                {leader.photo ? (
                  <Image 
                    src={leader.photo}
                    alt={`${leader.name} - Profile Image`}
                    fill
                    className="object-cover rounded-full p-0.5"
                    sizes="(max-w-768px) 176px, 224px"
                    priority={idx === 0}
                  />
                ) : (
                  <>
                    <span className="text-5xl select-none mb-2">👤</span>
                    <span className="text-xs font-black text-[#3D4127] tracking-tight leading-none block max-w-[150px] truncate">{leader.name}</span>
                    <span className="text-[10px] font-bold text-[#3D4127]/50 block mt-1">{leader.roleShort}</span>
                  </>
                )}
              </div>

              {/* Text Information Pillar */}
              <div className="flex-1 space-y-5 text-center md:text-left w-full">
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#3D4127] tracking-tight">
                      {leader.name}
                    </h3>
                    <span className="text-xs font-bold text-[#636B2F] bg-[#BAC095]/20 border border-[#BAC095]/30 px-2.5 py-0.5 rounded-md inline-block max-w-fit mx-auto md:mx-0">
                      Active Board Member
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#636B2F] tracking-wide">
                    {leader.role}
                  </div>
                </div>

                {/* Executive Skill Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {leader.credentials.map((cred, cIdx) => (
                    <span key={cIdx} className="bg-[#F4F6F0] text-[#3D4127]/80 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#BAC095]/20">
                      ✓ {cred}
                    </span>
                  ))}
                </div>

                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed max-w-2xl">
                  {leader.bio}
                </p>

                {/* LinkedIn Connector Trigger Anchor */}
                <div className="pt-2">
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 border border-[#0a66c2]/20 text-[#0a66c2] p-3 rounded-xl transition-all shadow-sm group/ln"
                    title={`Connect with ${leader.name} on LinkedIn`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.51.09-.69.2-.51.66-1.04 1.45-1.04 1.03 0 1.44.78 1.44 1.93v4.47h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8.12 18.5V10.13H5.32V18.5h2.8z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Action Button Segment */}
              <div className="shrink-0 w-full md:w-auto pt-4 md:pt-0 flex items-center justify-center whitespace-nowrap">
                <a
                  href={leader.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center bg-[#F4F6F0] text-[#3D4127] border border-[#BAC095]/40 hover:bg-[#636B2F] hover:text-white hover:border-[#636B2F] text-xs font-black px-6 py-4 rounded-xl transition-all cursor-pointer shadow-sm tracking-wide"
                >
                  📂 Know More Detail
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CORE TEAM EXCELLENCE PHILOSOPHY ================= */}
        <div className="max-w-5xl mx-auto mt-28 border-t border-[#BAC095]/30 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-black text-[#3D4127]">Empowerment & Speed</h4>
            <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
              Our engineering architecture flows autonomously. We eliminate bureaucratic design lag to push production-ready updates rapidly straight to edge hosting layers.
            </p>
          </div>
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-black text-[#3D4127]">Complete Transparency</h4>
            <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
              From initial database indexing profiles down to custom user journey states, our clients monitor development code commits in real time via continuous logging arrays.
            </p>
          </div>
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-black text-[#3D4127]">Constant Code Growth</h4>
            <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">
              We invest deeply in exploring upcoming serverless capabilities, strict API protection scripts, and performance compression algorithms to shield setups from system lag.
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
            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight px-1">
              Ready to integrate our specialists into your project roadmap?
            </h3>
            <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed opacity-90 px-2">
              Sync up with our operations desk to review complete wireframe strategies, secure system audits, or custom codebase blueprints tailored exactly to your timeline parameters.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-[#F4F6F0] text-[#3D4127] hover:bg-white text-xs font-black px-6 py-3.5 rounded-xl transition-all shadow-md tracking-wide inline-block cursor-pointer w-full sm:w-auto">
                Consult With Our Tech Leaders Now
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