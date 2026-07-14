'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';

// GROQ Query to fetch author details dynamically
const BLOG_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]->title,
  "date": publishedAt,
  "excerpt": coalesce(excerpt, "Click below to read this entire technical insight entry log."),
  "readTime": coalesce(readTime, "5 min read"),
  mainImage,
  "authorName": author->name,
  "authorImage": author->image
}`;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const builder = imageUrlBuilder({ projectId, dataset });
function urlFor(source: any) {
  return builder.image(source);
}

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchArticles() {
      const apiVersion = '2026-07-04';
      if (!projectId) {
        setLoading(false);
        return;
      }

      const encodedQuery = encodeURIComponent(BLOG_POSTS_QUERY);
      const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;

      try {
        const res = await fetch(url, { next: { revalidate: 60 } });
        if (res.ok) {
          const json = await res.json();
          setArticles(json.result || []);
        }
      } catch (error) {
        console.error("Sanity client fetch failure:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white overflow-x-hidden">
      
      {/* ================= COMPLETE ADVANCED SEO METATAG SYSTEM FOR KNOWLEDGE DESK ================= */}
      <title>Knowledge Desk | Technical Insights & Engineering Logs</title>
      <meta name="description" content="Stay updated with advanced software development methodologies, serverless design patterns, and web runtimes researched inside SCY Innovation." />
      <meta name="keywords" content="SCY Innovation Blog, Engineering Logs, Next.js Optimization Insights, Core Web Vitals Research, Web Architecture Logs" />
      <link rel="canonical" href="https://scyinnovation.com/blog" />
      
      {/* Open Graph Profile Framework */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://scyinnovation.com/blog" />
      <meta property="og:title" content="Knowledge Desk | Technical Insights & Engineering Logs" />
      <meta property="og:description" content="Stay updated with advanced software development methodologies, serverless design patterns, and web runtimes researched inside SCY Innovation." />
      <meta property="og:image" content="https://scyinnovation.com/hero-cloud.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SCY Innovation Knowledge Desk Hub Logo Asset" />
      <meta property="og:site_name" content="SCY Innovation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://scyinnovation.com/blog" />
      <meta name="twitter:title" content="Knowledge Desk | Technical Insights & Engineering Logs" />
      <meta name="twitter:description" content="Stay updated with advanced software development methodologies, serverless design patterns, and web runtimes researched inside SCY Innovation." />
      <meta name="twitter:image" content="https://scyinnovation.com/hero-cloud.png" />
      
      <meta name="robots" content="index, follow" />

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="max-w-7xl mx-auto pt-32 pb-24 px-6">
        
        {/* Header Content Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-white uppercase bg-[#636B2F] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Knowledge Desk
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#3D4127]">
            Technical Insights & Engineering Logs
          </h1>
          <p className="text-[#636B2F] text-base md:text-lg font-medium leading-relaxed">
            Stay up to date with the software methodologies, structural design ideas, and web optimizations researched inside SCY Innovation.
          </p>
        </div>

        {/* 2-Column Vertical Card Grid Layout */}
        {loading ? (
          <div className="text-center py-20" data-aos="fade-up">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#636B2F] mx-auto"></div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#3D4127]/50 mt-4">Streaming Insights Log...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#BAC095]/20 p-8 max-w-xl mx-auto shadow-sm" data-aos="zoom-in">
            <span className="text-3xl block mb-2">📥</span>
            <h3 className="font-bold text-lg text-[#3D4127]">No Articles Published Yet</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((post: any, idx: number) => {
              const formattedDate = post.date 
                ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                : "Recent Log";

              return (
                <article 
                  key={post._id} 
                  className="bg-white border border-[#BAC095]/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#636B2F]/30 transition-all duration-300 flex flex-col justify-between group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div>
                    {post.mainImage && (
                      <div className="w-full aspect-[16/10] overflow-hidden bg-[#F4F6F0] border-b border-[#BAC095]/20 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={urlFor(post.mainImage).width(800).height(500).url()} 
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 bg-[#636B2F] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                          {post.category || "General Engineering"}
                        </span>
                      </div>
                    )}

                    {/* Middle Content Section */}
                    <div className="p-6 md:p-8 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#3D4127]/40">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#3D4127] group-hover:text-[#636B2F] transition-colors leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-xs md:text-sm text-[#3D4127]/70 font-medium leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Area: Integrated Author Profile and CTA Action Row */}
                  <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-4">
                    <div className="flex items-center justify-between pt-4 border-t border-[#BAC095]/20">
                      
                      {/* Author Card Component */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#636B2F]/10 border border-[#BAC095]/40 overflow-hidden relative shrink-0">
                          {post.authorImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img 
                              src={urlFor(post.authorImage).width(80).height(80).url()} 
                              alt={post.authorName || "Author"} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs font-bold text-[#636B2F]">
                              👤
                            </div>
                          )}
                        </div>
                        <div className="text-left">
                          <div className="text-[11px] font-bold text-[#3D4127]/40 uppercase tracking-wider">Published By</div>
                          <div className="text-xs font-black text-[#3D4127]">{post.authorName || "Adil Shaikh"}</div>
                        </div>
                      </div>

                      {/* CTA Trigger Link */}
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="bg-[#F4F6F0] hover:bg-[#636B2F] text-[#3D4127] hover:text-white font-extrabold px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        Read Log <span>→</span>
                      </Link>

                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        )}
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