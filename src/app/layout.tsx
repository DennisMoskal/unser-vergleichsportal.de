import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import CanonicalTag from "@/components/CanonicalTag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Bevorzugte Domain - IMMER ohne www und mit https
const PREFERRED_DOMAIN = "https://unser-vergleichsportal.de";

// Statische Metadata für das Root Layout
// Der Canonical wird automatisch für die Homepage gesetzt
export const metadata: Metadata = {
  title: "UNSER-VERGLEICHSPORTAL.DE | einfach sparen",
  description:
    "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
  metadataBase: new URL(PREFERRED_DOMAIN),
  alternates: {
    canonical: PREFERRED_DOMAIN, // Canonical für die Homepage
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "UNSER-VERGLEICHSPORTAL.DE | einfach sparen",
    description:
      "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
    url: PREFERRED_DOMAIN,
    siteName: "SmartFinanz",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: `${PREFERRED_DOMAIN}/images/og/unser-vergleichsportal-og-1200x630.jpg`,
        width: 1200,
        height: 627,
        alt: "SmartFinanz - Transparenter Finanzvergleich",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unservergleich",
    creator: "@unservergleich",
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

        {/* Standard robots meta tag - kann von einzelnen Seiten überschrieben werden */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartFinanz" />
        <meta name="revisit-after" content="7 days" />
        <meta charSet="UTF-8" />

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

        {/* ---- Google Analytics Tag (gtag.js) ---- */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RG2RPFD2J9" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RG2RPFD2J9', { 'anonymize_ip': true });
          `}
        </Script>

        {/* ---- Schema.org: Organization ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SmartFinanz – unser-vergleichsportal.de",
              url: PREFERRED_DOMAIN,
              logo: `${PREFERRED_DOMAIN}/logo.png`,
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
                  url: `${PREFERRED_DOMAIN}/kontakt`,
                },
              ],
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
              name: "SmartFinanz",
              url: PREFERRED_DOMAIN,
              inLanguage: "de",
              potentialAction: {
                "@type": "SearchAction",
                target: `${PREFERRED_DOMAIN}/suche?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>

      <body suppressHydrationWarning className="antialiased">
        <CanonicalTag />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
