import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Initialize the URL helper for parsing nested body graphics
const builder = imageUrlBuilder({ projectId, dataset });
function urlFor(source: any) {
  return builder.image(source);
}

async function getSinglePost(slug: string) {
  const apiVersion = '2026-07-04';
  if (!projectId) return null;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "category": categories[0]->title,
    publishedAt,
    body
  }`;

  const encodedQuery = encodeURIComponent(query.replace('$slug', `"${slug}"`));
  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json.result;
  } catch (error) {
    console.error("Failed to fetch post details:", error);
    return null;
  }
}

// Custom Tailwind styling components for Portable Text blocks
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="text-sm md:text-base text-[#3D4127]/80 leading-relaxed mb-6 font-medium">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl font-black tracking-tight text-[#3D4127] mt-10 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#3D4127] mt-10 mb-4 pt-4 border-t border-[#BAC095]/10">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg md:text-xl font-black tracking-tight text-[#3D4127] mt-8 mb-3">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="italic text-[#636B2F] bg-[#F4F6F0]/60 p-4 rounded-xl border-l-4 border-[#636B2F] my-6 font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[#3D4127]/80 text-sm md:text-base font-medium">{children}</ul>,
  },
  types: {
    image: ({ value }: any) => {
      const assetRef = value?.asset?._ref || value?.asset?.id || value?.asset;
      if (!assetRef) return null;
      
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-[#BAC095]/30 bg-[#F4F6F0]/30 p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={urlFor(value).width(800).fit('max').auto('format').url()} 
            alt={value.alt || "Technical Architecture Diagram Log"} 
            className="w-full h-auto rounded-xl shadow-sm object-contain max-h-[450px]"
          />
          {value.alt && (
            <p className="text-center text-[11px] font-bold text-[#3D4127]/40 tracking-wide mt-2 uppercase">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
    inlineImage: ({ value }: any) => {
      const assetRef = value?.asset?._ref || value?.asset?.id || value?.asset;
      if (!assetRef) return null;
      
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-[#BAC095]/30 bg-[#F4F6F0]/30 p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={urlFor(value).width(800).fit('max').auto('format').url()} 
            alt={value.alt || "Technical Asset"} 
            className="w-full h-auto rounded-xl shadow-sm object-contain max-h-[450px]"
          />
        </div>
      );
    }
  },
};

export default async function DynamicPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F4F6F0] flex flex-col items-center justify-center font-sans p-6 text-center">
        <h1 className="text-2xl font-black text-[#3D4127] mb-2">Log Entry Not Found</h1>
        <Link href="/blog" className="text-[#636B2F] font-bold underline text-sm">← Back to Knowledge Desk</Link>
      </div>
    );
  }

  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : "Recent Entry";

  return (
    <div className="min-h-screen bg-[#F4F6F0] text-[#3D4127] font-sans antialiased selection:bg-[#636B2F] selection:text-white">
      <main className="max-w-3xl mx-auto pt-36 pb-24 px-6">
        
        {/* Back navigation node */}
        <Link href="/blog" className="text-xs font-black uppercase tracking-widest text-[#636B2F] hover:text-[#3D4127] transition-colors flex items-center gap-1 mb-8">
          ← Back to Knowledge Desk
        </Link>

        {/* Header Block */}
        <div className="space-y-4 mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#636B2F] bg-[#D4DE95]/20 px-2.5 py-1 rounded-md">
            {post.category || "General Engineering"}
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#3D4127]">
            {post.title}
          </h1>
          <p className="text-xs font-bold text-[#3D4127]/40 tracking-wider">
            PUBLISHED ON {formattedDate.toUpperCase()}
          </p>
        </div>

        {/* Post Text Frame */}
        <div className="bg-white border border-[#BAC095]/30 rounded-3xl p-6 md:p-10 shadow-sm mx-auto">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-[#3D4127]/50 text-sm">This entry log placeholder context is empty.</p>
          )}
        </div>

      </main>
    </div>
  );
}