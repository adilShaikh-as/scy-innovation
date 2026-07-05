'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white">
      <main className="max-w-4xl mx-auto pt-36 pb-24 px-6">
        <Link href="/" className="text-xs font-black uppercase tracking-widest text-[#636B2F] hover:text-[#3D4127] transition-colors mb-6 inline-block">
          ← Return Home
        </Link>
        
        <div className="space-y-4 mb-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#3D4127]">Privacy Policy</h1>
          <p className="text-xs font-bold text-[#3D4127]/50 uppercase tracking-wider">Last updated: July 2026</p>
        </div>

        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-10 shadow-sm space-y-6 text-sm md:text-base leading-relaxed text-[#3D4127]/80 font-medium">
          <section className="space-y-2">
            <h2 className="text-lg font-black text-[#3D4127]">1. Information Collection</h2>
            <p>We log transaction parameters and project scoping metrics provided through our interactive forms. This includes details submitted via the project discovery desk and slot booking modals.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black text-[#3D4127]">2. How We Use Data</h2>
            <p>Collected metrics are parsed entirely to deliver accurate scoping proposals and maintain engineering consultation scheduling pipelines. We do not sell or trade parameter assets to third-party brokers.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black text-[#3D4127]">3. Data Security Protocols</h2>
            <p>Our infrastructure operates under automated protection algorithms. Standard bilateral non-disclosure agreements are continuously initialized to guarantee strict framework safety prior to codebase evaluation steps.</p>
          </section>
        </div>
      </main>
    </div>
  );
}