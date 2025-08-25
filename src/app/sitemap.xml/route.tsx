import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://smartfinanz.de' // Ersetze mit deiner tatsächlichen Domain

  // Liste aller statischen Seiten aus deiner Projektstruktur
  const staticPages = [
    '',
    'versicherungen',
    'banking',
    'tierversicherungen',
    'trading',
    'agb',
    'anbieter',
    'cookie-richtlinie',
    'datenschutz',
    'impressum',
    'karriere',
    'kontakt',
    'partnerprogramme',
    'ueber-uns',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.8,
  }))

  // Optional: Dynamische Anbieterseiten aus providerData
  const providerPages = [
    { path: 'anbieter/petprotect', priority: 0.7 },
    { path: 'anbieter/figopet', priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority,
  }))

  // Sitemap-XML erstellen
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPages, ...providerPages]
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
