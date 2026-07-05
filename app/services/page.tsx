import Link from 'next/link';

export default function ServicesPage() {
  const servicePillars = [
    {
      icon: "⚡",
      title: "Custom Web Application Development",
      description: "We design and engineer high-performance, dynamic corporate dashboards, scalable software architectures, and complex internal management tools tailored to your precise operating metrics. Built on optimized React & Next.js systems for secure, high-traffic demands.",
    },
    {
      icon: "🛍️",
      title: "E-Commerce & Headless Commerce",
      description: "Decoupling your presentation layout layer from complex retail databases using headless system setups. We deliver near-instant loading times, global search-engine-optimized store performance, and completely seamless custom cart configurations that maximize client conversion layouts.",
    },
    {
      icon: "🚀",
      title: "MVP Development for Startups",
      description: "Speed-to-market execution without compromising code safety. We transform high-level requirements into scalable, launch-ready minimum viable products within aggressive time windows, establishing a modular architectural foundation prepared for immediate series funding rounds.",
    },
    {
      icon: "📐",
      title: "Premium UI/UX & Website Redesign",
      description: "Data-driven graphical interface re-engineering. We perform rigorous structural user-journey mapping, low-friction checkout discovery, and modern dark/light brand theme transformations that realign your legacy web presence into an elite conversion asset.",
    },
    {
      icon: "🛠️",
      title: "Long-Term Maintenance & Optimization",
      description: "Continuous system performance tuning, security configuration monitoring, data layer routine optimization, and automated system update management. We serve as your ongoing technical operations arm to ensure zero-downtime scalability.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F6F0] text-[#3D4127] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/30 px-3 py-1 rounded-full">
            Core Disciplines
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#3D4127]">
            Enterprise IT Operations & Engineering
          </h1>
          <p className="text-[#636B2F] text-base font-medium leading-relaxed">
            Discover the production architectures and technical frameworks SCY Innovation executes to fuel digital optimization.
          </p>
        </div>

        {/* Dynamic Vertical List Configuration */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {servicePillars.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#BAC095]/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 hover:shadow-md transition-shadow"
            >
              {/* Badge Icon Layer */}
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F4F6F0] border border-[#BAC095]/40 flex items-center justify-center text-2xl shadow-inner">
                {service.icon}
              </div>

              {/* Text Description Block */}
              <div className="space-y-3 flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-[#3D4127]">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-[#3D4127]/80 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Context Trigger Link */}
              <div className="pt-4 md:pt-0 self-end md:self-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#636B2F] hover:text-[#3D4127] transition-colors uppercase tracking-wider"
                >
                  Inquire Scope <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner Section */}
        <div className="mt-20 text-center">
          <p className="text-sm font-bold text-[#3D4127]/60 uppercase tracking-widest mb-4">Have an advanced custom specification?</p>
          <Link href="/contact" className="bg-[#636B2F] hover:bg-[#3D4127] text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-md">
            Consult With Our Engineers
          </Link>
        </div>

      </div>
    </main>
  );
}