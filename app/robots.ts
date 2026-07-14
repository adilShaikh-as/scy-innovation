import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/studio/',        // Blocks crawlers from wasting indexing budget parsing your embedded Sanity Studio panel
        '/_next/',        // Blocks internal compilation directory structures
      ],
    },
    sitemap: 'https://scyinnovation.com/sitemap.xml',
  };
}