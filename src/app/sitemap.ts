import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unser-vergleichsportal.de';

  // ============================================
  // STRATEGISCHE PRIORITÄTEN FÜR MAXIMALES RANKING
  // ============================================
  
  const staticPages = [
    // === EBENE 1: KERN-UMSEITE (1.0) ===
    { path: '', priority: 1.0, changefreq: 'daily' as const },
    
    // === EBENE 2: HAUPTKATEGORIEN (0.9) ===
    // Achtung: Hier liegt Ihr Umsatz - höchste Priorität nach Startseite
    { path: 'versicherungen', priority: 0.9, changefreq: 'weekly' as const },
    { path: 'banking', priority: 0.9, changefreq: 'weekly' as const },
    { path: 'trading', priority: 0.9, changefreq: 'weekly' as const },
    { path: 'tierversicherungen', priority: 0.9, changefreq: 'weekly' as const },
    
    // === EBENE 3: WICHTIGE KONVERSIONSSEITEN (0.7-0.8) ===
    { path: 'kontakt', priority: 0.75, changefreq: 'weekly' as const }, // Vertrauenssignal für Google
    
    // === EBENE 4: UNTERNEHMENSVORSTELLUNG (0.5) ===
    { path: 'ueber-uns', priority: 0.5, changefreq: 'monthly' as const },
    
    // === EBENE 5: SUPPORT-SEITEN (0.3) ===
    // Für Karriere & Partnerprogramme völlig ausreichend, da kein direkter Umsatz
    { path: 'karriere', priority: 0.3, changefreq: 'monthly' as const },
    { path: 'partnerprogramme', priority: 0.3, changefreq: 'monthly' as const },
    
    // === EBENE 6: RECHTLICHE PFLICHTSEITEN (0.1-0.2) ===
    // Wichtig: Diese Seiten sind für Trust-Signale relevant, aber nicht für Rankings
    // Google bewertet deren Existenz, nicht deren Crawling-Priorität
    { path: 'impressum', priority: 0.2, changefreq: 'yearly' as const },   // ⬆️ von 0.1 auf 0.2 für Trust
    { path: 'datenschutz', priority: 0.2, changefreq: 'yearly' as const },  // ⬆️ von 0.1 auf 0.2 für Trust
    { path: 'agb', priority: 0.15, changefreq: 'yearly' as const },         // minimal höher für Vollständigkeit
    { path: 'cookie-richtlinie', priority: 0.1, changefreq: 'yearly' as const }, // reine Compliance
  ].map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority,
  }));

  return [...staticPages];
}
