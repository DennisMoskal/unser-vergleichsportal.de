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
  title: "UNSER-VERGLEICHSPORTAL.DE | einfach sparen",
  description:
    "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://unser-vergleichsportal.de"),
  alternates: {
    canonical: "https://unser-vergleichsportal.de/", // Explizite kanonische URL
    sitemap: "https://unser-vergleichsportal.de/sitemap.xml",
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    title: "Transparenter Finanzvergleich September 2025 | SmartFinanz",
    description:
      "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
    url: "https://unser-vergleichsportal.de/",
    siteName: "SmartFinanz",
    images: [
      {
        url: "https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg",
        secureUrl: "https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg",
        width: 1200,
        height: 627,
        alt: "SmartFinanz - Transparenter Finanzvergleich",
        type: "image/jpeg",
      },
      // Fallback-Bild für Robustheit
      {
        url: "https://unser-vergleichsportal.de/images/og/fallback-og-1200x630.jpg",
        width: 1200,
        height: 627,
        alt: "SmartFinanz Fallback",
        type: "image/jpeg",
      },
    ],
    locale: "de_DE",
    publishedTime: "2025-09-01T00:00:00+00:00",
    modifiedTime: "2025-09-19T00:27:16+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparenter Finanzvergleich September 2025 | SmartFinanz",
    description:
      "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
    images: ["https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"],
    site: "@unservergleich",
    creator: "@unservergleich",
  },
  other: {
    "msvalidate.01": "5201AAEF61BC57DF0BFD9257B6E8B51A", // Bing-Verifizierung
    "impact-site-verification": "f34232c9-40b1-4773-b281-9b596b88cd82",
    "google-site-verification": "gSAsxWmOFdGA-fzAf37lxqrJyMnFL-TiscNlX5FRriI",
    verification: "f97e97c1e8f6cf5274f5d6d0cc18505c",
    author: "SmartFinanz",
    "revisit-after": "7 days",
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
        {/* Zusätzliche Meta-Tags, die nicht in metadata definiert werden können */}
        <meta charSet="UTF-8" />
        {/* Preloads & Prefetch */}
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

        {/* Google Analytics Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RG2RPFD2J9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RG2RPFD2J9');
          `}
        </Script>

        {/* Schema.org: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SmartFinanz – unser-vergleichsportal.de",
              url: "https://unser-vergleichsportal.de/",
              logo: "https://unser-vergleichsportal.de/logo.png",
              brand: {
                "@type": "Brand",
                name: "unser-vergleichsportal.de",
              },
              sameAs: [
                "https://www.linkedin.com/in/unservergleichsportalde",
                "https://x.com/unservergleich",
                "https://medium.com/@unser-vergleichsportal.de",
                "https://www.facebook.com/profile.php?id=61580338356626",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  availableLanguage: ["de"],
                  url: "https://unser-vergleichsportal.de/kontakt",
                },
              ],
            }),
          }}
        />

        {/* Schema.org: WebSite + SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SmartFinanz",
              url: "https://unser-vergleichsportal.de/",
              inLanguage: "de",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://unser-vergleichsportal.de/suche?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Schema.org: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Wie funktioniert der Finanzvergleich bei SmartFinanz?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unser Expertenteam vergleicht täglich über 500 Finanzprodukte von führenden Anbietern. Sie erhalten kostenlose, unabhängige Empfehlungen basierend auf Ihren individuellen Bedürfnissen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist der Finanzvergleich bei SmartFinanz kostenlos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, alle unsere Vergleiche sind 100% kostenlos und unverbindlich. Wir erhalten Provisionen von Partnern; das beeinflusst weder Ihre Kosten noch unsere Bewertungen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Finanzprodukte kann ich bei SmartFinanz vergleichen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Versicherungen, Banking-Produkte, Tierversicherungen, Trading-Plattformen, DSL, Handytarife, Strom, Gas, Ökost
