import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transparenter Finanzvergleich September 2025 | Ohne versteckte Kosten"
  description: "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
  icons: {
    icon: "/favicon.svg",
  },
  // Dynamischer Canonical Tag über metadata
  metadataBase: new URL('https://unser-vergleichsportal.de'),
  alternates: {
    canonical: './', // Relativ - zeigt immer auf aktuelle Seite
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Bing-Verifizierung für Yahoo/Bing */}
        <meta name="msvalidate.01" content="5201AAEF61BC57DF0BFD9257B6E8B51A" />
        {/* Impact Site Verification Tag */}
        <meta name="impact-site-verification" content="f34232c9-40b1-4773-b281-9b596b88cd82" />
        {/* Google Verification Tag */}
        <meta
          name="google-site-verification"
          content="gSAsxWmOFdGA-fzAf37lxqrJyMnFL-TiscNlX5FRriI"
        />
        <meta name="verification" content="f97e97c1e8f6cf5274f5d6d0cc18505c" />
        {/* Favicon für ältere Browser und Suchmaschinen */}
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        {/* Apple Touch Icon für iOS-Geräte */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Sitemap für Suchmaschinen */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Zusätzliche SEO-Meta-Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartFinanz" />
        <meta name="revisit-after" content="7 days" />
        <meta charSet="UTF-8" />

        {/* --- Open Graph - LinkedIn optimiert --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transparenter Finanzvergleich September 2025 | Ohne versteckte Kosten" />
        <meta
          property="og:description"
          content="Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de" />
        <meta property="og:site_name" content="SmartFinanz" />

        {/* Bild für Social Sharing - LinkedIn optimiert mit angepasster Größe */}
        <meta
          property="og:image"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:alt" content="SmartFinanz - Transparenter Finanzvergleich" />

        {/* Zusätzliche LinkedIn-spezifische Meta Tags */}
        <meta property="og:locale" content="de_DE" />
        <meta property="article:author" content="SmartFinanz" />
        <meta property="og:updated_time" content="2025-09-19T00:27:16+00:00" />
        <meta property="article:published_time" content="2025-09-01T00:00:00+00:00" />
        <meta property="article:modified_time" content="2025-09-19T00:27:16+00:00" />

        {/* --- Twitter Cards - ebenfalls optimiert --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transparenter Finanzvergleich September 2025 | Ohne versteckte Kosten" />
        <meta name="twitter:description" content="Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten." />
        <meta
          name="twitter:image"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta name="twitter:image:alt" content="SmartFinanz - Transparenter Finanzvergleich" />
        <meta name="twitter:site" content="@unservergleich" />
        <meta name="twitter:creator" content="@unservergleich" />

        {/* --- Preloads & Prefetch --- */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="dns-prefetch" href="https://www.tarifcheck.de" />
        <link rel="dns-prefetch" href="https://partner.e-recht24.de" />
        <link rel="dns-prefetch" href="https://link-pso.xtb.com" />
        <link rel="dns-prefetch" href="https://www.credimaxx.de" />
        <link rel="dns-prefetch" href="https://www.hansemerkur.de" />
        <link rel="dns-prefetch" href="https://www.check24.de" />
        <link rel="dns-prefetch" href="https://private.vodafone-affiliate.de" />
        <link rel="dns-prefetch" href="https://www.awin1.com" />
        <link rel="dns-prefetch" href="https://www.freenet.de" />

        {/* ---- Schema.org: Organization ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SmartFinanz – unser-vergleichsportal.de",
              "url": "https://unser-vergleichsportal.de",
              "logo": "https://unser-vergleichsportal.de/logo.png",
              "brand": {
                "@type": "Brand",
                "name": "unser-vergleichsportal.de"
              },
              "sameAs": [
                "https://www.linkedin.com/in/unservergleichsportalde",
                "https://x.com/unservergleich",
                "https://medium.com/@unser-vergleichsportal.de",
                "https://www.facebook.com/profile.php?id=61580338356626"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "customer support",
                "availableLanguage": ["de"],
                "url": "https://unser-vergleichsportal.de/kontakt"
              }]
            }),
          }}
        />

        {/* ---- Schema.org: WebSite + SearchAction ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SmartFinanz",
              "url": "https://unser-vergleichsportal.de",
              "inLanguage": "de",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://unser-vergleichsportal.de/suche?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* ---- Schema.org: FAQPage ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Wie funktioniert der Finanzvergleich bei SmartFinanz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unser Expertenteam vergleicht täglich über 500 Finanzprodukte von führenden Anbietern. Sie erhalten kostenlose, unabhängige Empfehlungen basierend auf Ihren individuellen Bedürfnissen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ist der Finanzvergleich bei SmartFinanz kostenlos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, alle unsere Vergleiche sind 100% kostenlos und unverbindlich. Wir erhalten Provisionen von Partnern; das beeinflusst weder Ihre Kosten noch unsere Bewertungen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Welche Finanzprodukte kann ich bei SmartFinanz vergleichen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Versicherungen, Banking-Produkte, Tierversicherungen, Trading-Plattformen, DSL, Handytarife, Strom, Gas, Ökostrom, Reisen, Kreditkarten und Mietwagen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie schnell bekomme ich die Empfehlungen bei SmartFinanz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Die meisten Vergleiche sind sofort verfügbar. Bei komplexeren Anfragen erhalten Sie binnen weniger Minuten personalisierte Empfehlungen."
                  }
                }
              ]
            }),
          }}
        />

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
