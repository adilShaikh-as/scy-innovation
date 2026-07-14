import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://scyinnovation.com';

  // 1. Map out all your core static marketing paths
  const staticRoutes = [
    '',
    '/pricing',
    '/tools',
    '/contact',
    '/privacy',
    '/terms',
    '/company/about-us',
    '/company/team',
    '/services/custom-web-development',
    '/services/headless-commerce',
    '/services/mvp-development',
    '/services/ui-ux-redesign',
    '/services/maintenance-optimization',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Query dynamic blog article paths directly from Sanity CDN
  let dynamicBlogRoutes: MetadataRoute.Sitemap = [];
  try {
    const apiVersion = '2026-07-04';
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    
    const query = encodeURIComponent(`*[_type == "post"]{ "slug": slug.current, publishedAt }`);
    const endpoint = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
    
    const res = await fetch(endpoint, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (res.ok) {
      const json = await res.json();
      dynamicBlogRoutes = (json.result || []).map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Failed to build dynamic dynamic sitemap routes:", error);
  }

  return [...staticRoutes, ...dynamicBlogRoutes];
}