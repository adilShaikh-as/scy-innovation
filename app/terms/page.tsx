'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white">
      <main className="max-w-4xl mx-auto pt-36 pb-24 px-6">
        <Link href="/" className="text-xs font-black uppercase tracking-widest text-[#636B2F] hover:text-[#3D4127] transition-colors mb-6 inline-block">
          ← Return Home
        </Link>
        
        <div className="space-y-4 mb-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#3D4127]">Terms of Service</h1>
          <p className="text-xs font-bold text-[#3D4127]/50 uppercase tracking-wider">Last updated: July 2026</p>
        </div>

        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-10 shadow-sm space-y-6 text-sm md:text-base leading-relaxed text-[#3D4127]/80 font-medium">
          <section className="space-y-2">
            <h2 className="text-lg font-black text-[#3D4127]">1. Project Discovery & Scoping</h2>
            <p>Consultation slots and project requirement evaluations are handled remotely. Estimates are rendered as provisional scoping assessments matching the metrics given by the user.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black text-[#3D4127]">2. Service Engagement Guidelines</h2>
            <p>Engineering workflows, stack parameters, and payment tier allocations are managed strictly through customized, bilateral development contracts initialized separately after the intake step.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-black text-[#3D4127]">3. Liability Allocations</h2>
            <p>SCY Innovation provides premium modular application development and deployment frameworks. We maintain no continuous liability for independent data loss or infrastructure strain outside specified system monitoring SLAs.</p>
          </section>
        </div>
      </main>
    </div>
  );
}