// app/layout.tsx
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

/**
 * Bevorzugte (canonical) Domain — immer ohne "www" und mit https
 */
const PREFERRED_DOMAIN = "https://unser-vergleichsportal.de";

/**
 * Dynamisch erzeugte Metadata für jede Request (serverseitig)
 * -> erzeugt <link rel="canonical" href="..."> automatisch im Head
 * -> canonical enthält nur origin + pathname (keine Query-Strings, keine Hashes)
 */
export async function generateMetadata({
  request,
}: {
  request: Request;
}): Promise<Metadata> {
  const reqUrl = new URL(request.url);

  // Erzeuge canonical auf Basis der bevorzugten Domain + pathname (ohne Query, ohne Hash)
  const canonical = new URL(reqUrl.pathname, PREFERRED_DOMAIN).toString();

  return {
    title: "UNSER-VERGLEICHSPORTAL.DE | einfach sparen",
    description:
      "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
    metadataBase: new URL(PREFERRED_DOMAIN),
    alternates: {
      canonical,
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
      url: canonical,
      siteName: "SmartFinanz",
      images: [
        {
          url: `${PREFERRED_DOMAIN}/images/og/unser-vergleichsportal-og-1200x630.jpg`,
          width: 1200,
          height: 627,
          alt: "SmartFinanz - Transparenter Finanzvergleich",
          type: "image/jpeg",
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "UNSER-VERGLEICHSPORTAL.DE | einfach sparen",
      description:
        "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
      images: [`${PREFERRED_DOMAIN}/images/og/unser-vergleichsportal-og-1200x630.jpg`],
      site: "@unservergleich",
      creator: "@unservergleich",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* generateMetadata() erzeugt Title / OG / Canonical automatisch im Head */}
      <head>
        {/* Verifizierungs-Meta Tags */}
        <meta name="msvalidate.01" content="5201AAEF61BC57DF0BFD9257B6E8B51A" />
        <meta
          name="google-site-verification"
          content="gSAsxWmOFdGA-fzAf37lxqrJyMnFL-TiscNlX5FRriI"
        />
        <meta name="impact-site-verification" content="f34232c9-40b1-4773-b281-9b596b88cd82" />
        <meta name="verification" content="f97e97c1e8f6cf5274f5d6d0cc18505c" />

        {/* Fallback / legacy icons */}
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Sitemap (Crawler-Hilfe) */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Robots / Author */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartFinanz" />
        <meta charSet="UTF-8" />

        {/* Open Graph Defaults (werden durch generateMetadata / OG überschrieben) */}
        <meta property="og:site_name" content="SmartFinanz" />
        <meta property="og:locale" content="de_DE" />

        {/* Preloads / Prefetch Hints */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="dns-prefetch" href="https://www.tarifcheck.de" />
        <link rel="dns-prefetch" href="https://partner.e-recht24.de" />

        {/* Google Analytics (gtag) - asynchron, mit anonymize option */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RG2RPFD2J9" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RG2RPFD2J9', { 'anonymize_ip': true });
          `}
        </Script>

        {/* Schema.org: Organization (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SmartFinanz – unser-vergleichsportal.de",
              url: PREFERRED_DOMAIN,
              logo: `${PREFERRED_DOMAIN}/logo.png`,
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
      </head>

      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
