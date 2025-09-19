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
  title: "SmartFinanz",
  description: "Vergleich und Anbieter für Finanzen",
  icons: {
    icon: "/favicon.svg",
  },
  // Dynamischer Canonical Tag über metadata
  metadataBase: new URL('https://unser-vergleichsportal.de'),
  alternates: {
    canonical: './', // Relativ - zeigt immer auf aktuelle Seite
  },
  // Open Graph Tags hinzufügen
  openGraph: {
    title: "Transparenter Finanzvergleich September 2025 | Ohne versteckte Kosten",
    description: "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
    url: "https://unser-vergleichsportal.de",
    siteName: "SmartFinanz",
    images: [
      {
        url: "https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "SmartFinanz - Transparenter Finanzvergleich",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Transparenter Finanzvergleich September 2025 | Ohne versteckte Kosten",
    description: "Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten.",
    images: ["https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"],
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
        
        {/* LinkedIn-spezifischer Fallback - nur falls Next.js Metadata API nicht funktioniert */}
        <meta name="image" content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg" />
        
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
