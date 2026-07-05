'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // States for handling the local Calendar Slot Modal Wizard
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2>(1); // 1: Date/Time, 2: Contact Info
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingSubmitStatus, setMeetingSubmitStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Main Discovery Intake Form Submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('SENDING');
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "84d43f29-e78f-46ef-b81f-1447e43138f6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const resData = await response.json();
      if (resData.success) {
        setSubmissionStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmissionStatus('ERROR');
      }
    } catch (error) {
      setSubmissionStatus('ERROR');
    }
  };

  // Step 1 Validation to transition to Step 2 Contact Info
  const handleProceedToContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setModalStep(2);
    }
  };

  // Step 2 Submission (Sends the booking confirmation email to you)
  const handleMeetingFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMeetingSubmitStatus('SENDING');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "84d43f29-e78f-46ef-b81f-1447e43138f6");
    formData.append("subject", "✨ New Discovery Meeting Slot Booked!");
    formData.append("Booked_Date", selectedDate);
    formData.append("Booked_Time", selectedTime);
    formData.append("Timezone", "GMT+05:30 India Standard Time - Kolkata");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const resData = await response.json();
      if (resData.success) {
        setMeetingSubmitStatus('SUCCESS');
        setTimeout(() => {
          setIsMeetingModalOpen(false);
          setModalStep(1);
          setMeetingSubmitStatus('IDLE');
          setSelectedDate('');
          setSelectedTime('');
        }, 3000);
      } else {
        setMeetingSubmitStatus('ERROR');
      }
    } catch (error) {
      setMeetingSubmitStatus('ERROR');
    }
  };

  const faqItems = [
    { q: "Since you are an online business, how do we handle website design workshops?", a: "We run fully digital discovery sessions using modern whiteboard and video tools. This allows us to map out your website's structural blueprint, database architecture, and user journeys collaboratively in real-time, no matter where your team is located." },
    { q: "How quickly can I expect a scoping proposal for my custom website development?", a: "Once you submit your project parameters through our discovery intake form, our web development team reviews the specifications and delivers a structured proposal within 2 hours." },
    { q: "What web development stacks and frameworks do you specialize in?", a: "We build highly performant digital applications focusing heavily on modern runtimes like Next.js, React, TypeScript, and robust headless architectures to guarantee fast speeds and modular scaling." },
    { q: "Do you offer post-launch maintenance for websites?", a: "Yes. Because we operate entirely online, our remote monitors continuously track system up-time, deploy security patches under tight frameworks, and roll out optimization updates seamlessly." }
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white">
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* ================= SECTION 1: TOP HERO HEADER & INTAKE PANEL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto mb-28">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
            <span className="text-xs font-bold tracking-widest text-white uppercase bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
              💻 Project Discovery
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#3D4127] leading-[1.1]">
              Let&apos;s Connect and <br />
              <span className="text-[#636B2F]">Build Together</span>
            </h1>
            <p className="text-sm md:text-base text-[#3D4127]/80 font-medium leading-relaxed">
              Partner with our remote web engineering team to launch fast, secure, and modern custom web applications. Provide your digital scope metrics to sync with an engineering consultant immediately.
            </p>
            
            <div className="pt-4 border-t border-[#BAC095]/40 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D4127]/60">Digital Channels</h4>
              <div className="bg-white border border-[#BAC095]/30 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="text-xs font-bold text-[#3D4127]/50 uppercase">Project Desk Email</div>
                  <a href="mailto:adilshaikh345as@gmail.com?subject=Project Discovery Inquiry" className="text-sm font-bold text-[#3D4127] hover:text-[#636B2F] underline decoration-dotted">adilshaikh345as@gmail.com</a>
                </div>
              </div>
              <div className="bg-[#BAC095]/20 border border-[#636B2F]/20 rounded-xl p-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-[#3D4127]/90 uppercase tracking-wide">Remote Hub Active — Average response time: 2 hours</span>
              </div>
            </div>
          </div>

          {/* Right Intake Form Box */}
          <div className="lg:col-span-7 bg-white border border-[#BAC095]/30 rounded-3xl p-8 md:p-10 shadow-md">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-[#3D4127] tracking-tight">Let&apos;s Talk Business</h3>
              <p className="text-xs font-semibold text-[#3D4127]/60 mt-1">Fill out the web requirements form below and our production desk will respond within 2 hours.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {submissionStatus === 'SUCCESS' && (
                <div className="p-4 bg-[#D4DE95]/40 border border-[#636B2F]/30 rounded-xl text-sm font-bold text-center">
                  🎉 Website parameters recorded perfectly! Our remote team will contact you shortly.
                </div>
              )}
              {submissionStatus === 'ERROR' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-bold text-center">
                  ⚠️ Transmission failure. Please check your data fields and try again.
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-[#3D4127]/80">Full Name *</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">👤</span>
                  <input name="name" type="text" required placeholder="John Doe" className="w-full bg-[#F4F6F0]/40 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl pl-10 pr-4 py-3 text-sm font-medium transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-[#3D4127]/80">Business Email *</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 text-sm">✉️</span>
                  <input name="email" type="email" required placeholder="john@company.com" className="w-full bg-[#F4F6F0]/40 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl pl-10 pr-4 py-3 text-sm font-medium transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-[#3D4127]/80">Target Web Service *</label>
                <select name="service_type" required className="w-full bg-[#F4F6F0]/40 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium transition-all text-[#3D4127]/70">
                  <option value="">Select your development objective</option>
                  <option value="custom-saas">Custom SaaS Platform Development</option>
                  <option value="headless-cms">Headless CMS & Fast Web Runtimes</option>
                  <option value="ecom">Enterprise E-Commerce Engine</option>
                  <option value="redesign">Full Application Architecture Redesign</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-[#3D4127]/80">Project Budget Scope *</label>
                <select name="budget_scope" required className="w-full bg-[#F4F6F0]/40 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium transition-all text-[#3D4127]/70">
                  <option value="">Select financial tier parameters</option>
                  <option value="tier-1">$5,000 – $10,000</option>
                  <option value="tier-2">$10,000 – $25,000</option>
                  <option value="tier-3">$25,000+</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-[#3D4127]/80">Project Brief & Objectives *</label>
                <textarea name="message" required rows={4} placeholder="Outline your feature lists, wireframe access links, target timelines, or application scale bottlenecks..." className="w-full bg-[#F4F6F0]/40 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-3 text-sm font-medium transition-all resize-none"></textarea>
              </div>

              <button type="submit" disabled={submissionStatus === 'SENDING'} className="w-full bg-[#636B2F] text-white font-extrabold py-4 rounded-xl shadow-md tracking-wide hover:bg-[#3D4127] disabled:bg-[#BAC095] transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>🚀</span> {submissionStatus === 'SENDING' ? 'Transmitting Requirements...' : 'Submit Discovery Details'}
              </button>
            </form>
          </div>
        </div>

        {/* ================= SECTION 2: CHOOSE PREFERRED CHANNELS GRID ================= */}
        <div className="max-w-6xl mx-auto mb-28 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#3D4127]">Choose Your Preferred Communication Method</h2>
            <p className="text-sm md:text-base text-[#3D4127]/70 font-medium max-w-2xl mx-auto leading-relaxed">
              We operate completely digitally, enabling us to support your development ecosystem smoothly over your choice of communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* CARD 1: Schedule a Discovery Meeting */}
            <div className="bg-white border border-[#BAC095]/30 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <span className="absolute top-0 right-0 bg-[#636B2F] text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Recommended
              </span>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white font-bold bg-[#636B2F]">
                  📅
                </div>
                <h4 className="text-lg font-bold text-[#3D4127]">Schedule a Discovery Meeting</h4>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">Book a video consultation call with our website development architects to map your project.</p>
                <p className="text-[11px] font-bold text-[#3D4127]/40 uppercase tracking-tight">Available slots: Mon–Fri, 9 AM – 6 PM IST</p>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => { setIsMeetingModalOpen(true); setModalStep(1); }} 
                  className="w-full text-center font-bold text-xs py-2.5 rounded-lg text-white bg-[#636B2F] hover:bg-[#3D4127] transition-all cursor-pointer"
                >
                  Book Video Slot
                </button>
              </div>
            </div>

            {/* CARD 2: WhatsApp Business */}
            <div className="bg-white border border-[#BAC095]/30 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white font-bold bg-[#636B2F]">
                  💬
                </div>
                <h4 className="text-lg font-bold text-[#3D4127]">WhatsApp Business</h4>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">Chat instantly with our website development support desk for quick questions and updates.</p>
                <p className="text-[11px] font-bold text-[#3D4127]/40 uppercase tracking-tight">Priority messaging response</p>
              </div>
              <div className="pt-6">
                <a 
                  href="https://wa.me/918169896469?text=Hello%20SCY%20Innovation,%20I%20would%20like%20to%20inquire%20about%20your%20web%20development%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-bold text-xs py-2.5 rounded-lg text-white bg-[#636B2F] hover:bg-[#3D4127] transition-all"
                >
                  Message Us Now
                </a>
              </div>
            </div>

            {/* CARD 3: Email Inquiry */}
            <div className="bg-white border border-[#BAC095]/30 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white font-bold bg-[#636B2F]">
                  ✉️
                </div>
                <h4 className="text-lg font-bold text-[#3D4127]">Email Inquiry</h4>
                <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed">Send your comprehensive design guidelines, wireframes, or RFP documents for a detailed quote.</p>
                <p className="text-[11px] font-bold text-[#3D4127]/40 uppercase tracking-tight">Responses within 2 hours</p>
              </div>
              <div className="pt-6">
                <a 
                  href="mailto:adilshaikh345as@gmail.com?subject=Custom%20Website%20Development%20Inquiry"
                  className="block w-full text-center font-bold text-xs py-2.5 rounded-lg text-white bg-[#636B2F] hover:bg-[#3D4127] transition-all"
                >
                  Send Project Email
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ================= INTERACTIVE MEETING BOOKING WIZARD MODAL ================= */}
        {isMeetingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border border-[#BAC095]/40 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-4 relative max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setIsMeetingModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#3D4127] font-bold text-lg focus:outline-none z-10"
              >
                ✕
              </button>
              
              {/* Conditional Rendering Header Context */}
              {meetingSubmitStatus !== 'SUCCESS' && (
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-[#3D4127]">Discovery Service Consultation</h3>
                  <div className="text-[11px] font-semibold text-[#636B2F] flex flex-col space-y-0.5 bg-[#F4F6F0] p-2 rounded-xl border border-[#BAC095]/20">
                    <span className="flex items-center gap-1.5 text-[#3D4127]/80">🎥 Google Meet video conference info added after booking</span>
                    {selectedDate && selectedTime && (
                      <span className="text-[10px] font-bold text-[#636B2F] uppercase tracking-wider mt-1 font-mono">
                        Selected: {selectedDate} @ {selectedTime} (IST)
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* SUCCESS PANEL */}
              {meetingSubmitStatus === 'SUCCESS' && (
                <div className="p-6 bg-[#D4DE95]/30 border border-[#636B2F]/20 rounded-2xl text-center space-y-2 py-10">
                  <span className="text-4xl block animate-bounce">📅</span>
                  <h4 className="font-black text-base text-[#3D4127]">Slot Confirmed!</h4>
                  <p className="text-xs text-[#3D4127]/70 font-medium leading-relaxed">
                    A confirmation email record has been fired to <span className="font-bold">adilshaikh345as@gmail.com</span>. Check your inbox for the calendar routing node sync.
                  </p>
                </div>
              )}

              {/* ERROR PANEL */}
              {meetingSubmitStatus === 'ERROR' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-bold text-center">
                  ⚠️ Transmission failure. Please retry saving your scheduling slot.
                </div>
              )}

              {/* WIZARD STEP 1: DATE & TIME SELECTOR */}
              {meetingSubmitStatus !== 'SUCCESS' && modalStep === 1 && (
                <form onSubmit={handleProceedToContactInfo} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-[#3D4127]/70 tracking-wider">Choose Date *</label>
                    <input 
                      type="date" 
                      required 
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#F4F6F0]/50 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-2.5 text-sm font-medium text-[#3D4127]" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-[#3D4127]/70 tracking-wider">Available Times (IST) *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                            selectedTime === time 
                              ? 'bg-[#636B2F] text-white border-[#636B2F]' 
                              : 'bg-[#F4F6F0]/40 border-[#BAC095]/30 hover:bg-[#F4F6F0] text-[#3D4127]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={!selectedDate || !selectedTime}
                    className="w-full bg-[#636B2F] text-white font-extrabold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider hover:bg-[#3D4127] disabled:bg-[#BAC095]/60 disabled:cursor-not-allowed transition-all mt-2"
                  >
                    Next: Contact Info →
                  </button>
                </form>
              )}

              {/* WIZARD STEP 2: YOUR CONTACT INFO */}
              {meetingSubmitStatus !== 'SUCCESS' && modalStep === 2 && (
                <form onSubmit={handleMeetingFormSubmit} className="space-y-3.5">
                  <div className="text-[11px] font-black uppercase text-[#3D4127]/50 tracking-widest border-b border-[#F4F6F0] pb-1 flex items-center gap-1.5">
                    <span>📇</span> Your contact info
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#3D4127]/80">First name</label>
                    <input 
                      name="First_Name" 
                      type="text" 
                      required 
                      placeholder="Adil" 
                      className="w-full bg-[#F4F6F0]/50 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-2 text-xs font-medium text-[#3D4127]" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#3D4127]/80">Last name</label>
                    <input 
                      name="Last_Name" 
                      type="text" 
                      required 
                      placeholder="Shaikh" 
                      className="w-full bg-[#F4F6F0]/50 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-2 text-xs font-medium text-[#3D4127]" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#3D4127]/80">Email address</label>
                    <input 
                      name="Email_Address" 
                      type="email" 
                      required 
                      placeholder="adilshaikh345as@gmail.com" 
                      className="w-full bg-[#F4F6F0]/50 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-2 text-xs font-medium text-[#3D4127]" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#3D4127]/80">Phone number</label>
                    <input 
                      name="Phone_Number" 
                      type="tel" 
                      placeholder="Enter mobile number" 
                      className="w-full bg-[#F4F6F0]/50 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-2 text-xs font-medium text-[#3D4127]" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#3D4127]/80">Message</label>
                    <textarea 
                      name="Client_Notes" 
                      rows={2} 
                      placeholder="Add any specific context or goals..." 
                      className="w-full bg-[#F4F6F0]/50 border border-[#BAC095]/40 focus:border-[#636B2F] focus:outline-none rounded-xl px-4 py-2 text-xs font-medium text-[#3D4127] resize-none"
                    ></textarea>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button 
                      type="button" 
                      onClick={() => setModalStep(1)}
                      className="w-1/3 bg-[#F4F6F0] hover:bg-gray-200 text-[#3D4127] font-bold py-2.5 rounded-xl text-xs transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      disabled={meetingSubmitStatus === 'SENDING'}
                      className="w-2/3 bg-[#636B2F] hover:bg-[#3D4127] text-white font-extrabold py-2.5 rounded-xl shadow-md text-xs uppercase tracking-wider disabled:bg-[#BAC095] transition-all"
                    >
                      {meetingSubmitStatus === 'SENDING' ? 'Confirming...' : 'Book'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ================= SECTION 3: DIGITAL AVAILABILITY & SUPPORT PROFILE ================= */}
        <div className="max-w-4xl mx-auto mb-28 bg-white border border-[#BAC095]/30 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="text-[#636B2F]">🕒</span> Operational Response Matrix
            </h3>
            <div className="space-y-2.5 text-sm font-medium">
              <div className="flex justify-between border-b border-[#F4F6F0] pb-2">
                <span className="text-[#3D4127]/70">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F6F0] pb-2">
                <span className="text-[#3D4127]/70">Saturday</span>
                <span className="font-bold">10:00 AM - 4:00 PM IST</span>
              </div>
              <div className="flex justify-between text-yellow-700">
                <span>Sunday</span>
                <span className="font-bold">Urgent Deployment Inquiries Only</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#BAC095]/30 pt-6 md:pt-0 md:pl-8">
            <h4 className="text-xs font-bold text-[#3D4127]/50 uppercase tracking-wider">Follow Our Development Releases</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '💼 LinkedIn', url: 'https://linkedin.com' },
                { label: '𝕏 Twitter', url: 'https://twitter.com' },
                { label: '👥 Facebook', url: 'https://facebook.com' },
                { label: '📸 Instagram', url: 'https://instagram.com' }
              ].map((soc, idx) => (
                <a 
                  key={idx} 
                  href={soc.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#F4F6F0] border border-[#BAC095]/30 text-xs font-bold px-3 py-2 rounded-xl hover:bg-[#636B2F] hover:text-white transition-colors"
                >
                  {soc.label}
                </a>
              ))}
            </div>
            <div className="p-3.5 bg-[#D4DE95]/20 border border-[#636B2F]/20 rounded-xl text-xs font-bold text-[#3D4127]">
              🛡️ Fully Secure Protocols: Standard Bilateral NDAs are available on request before reviewing client codebase specifications.
            </div>
          </div>
        </div>

        {/* ================= SECTION 4: FREQUENTLY ASKED QUESTIONS ================= */}
        <div className="max-w-4xl mx-auto mb-28 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#636B2F] uppercase bg-[#D4DE95]/40 px-4 py-1.5 rounded-full inline-block">
              ❓ FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#3D4127]">Frequently Asked Questions</h2>
            <p className="text-xs md:text-sm text-[#3D4127]/60 font-medium">Find swift answers regarding custom builds, operational frameworks, and workflows.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
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

        {/* ================= SECTION 5: STILL HAVE QUESTIONS BANNER ================= */}
        <div className="max-w-5xl mx-auto bg-[#636B2F] rounded-3xl p-8 md:p-12 text-center text-white space-y-5 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#BAC095_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Still Have Questions?</h3>
            <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">
              Can&apos;t find the specific answers you are looking for? Our web architects are here to advise you.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button onClick={() => window.location.href='mailto:adilshaikh345as@gmail.com?subject=SupportDesk'} className="bg-[#F4F6F0] text-[#3D4127] font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all hover:bg-white cursor-pointer">
                Contact Web Support
              </button>
              <button onClick={() => { setIsMeetingModalOpen(true); setModalStep(1); }} className="bg-white/10 border border-white/20 text-white font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all hover:bg-white/20 cursor-pointer">
                Schedule Architecture Meet
              </button>
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
          {/* Fixed: Removed "Pvt. Ltd." to accurately reflect student startup status */}
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