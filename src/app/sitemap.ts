import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.unser-vergleichsportal.de'; // Neue Domain

  // Statische Seiten
  const staticPages = [
    '', // Startseite
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
    lastModified: new Date(),
    changeFrequency: path === '' || path === 'versicherungen' || path === 'trading' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1.0 :
              ['versicherungen', 'trading', 'banking'].includes(path) ? 0.9 : 0.6,
  }));

  // Dynamische Anbieterseiten
  const providerPages = [
    { path: 'anbieter/petprotect', priority: 0.7 },
    { path: 'anbieter/figopet', priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  return [...staticPages, ...providerPages];
}
