import { writeFileSync } from 'fs';
import { ROUTES_A, ROUTES_B } from '../config/routes.ts';
const now = new Date().toISOString();
const all = Array.from(new Set([...ROUTES_A, ...ROUTES_B]));
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(p => `  <url><loc>https://example.org${p}</loc><lastmod>${now}</lastmod><priority>${p === '/' ? '1.0':'0.8'}</priority></url>`).join('\n')}
</urlset>`;
writeFileSync('public/sitemap.xml', xml);
console.log('sitemap.xml generated');
