import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Link from "next/link";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* ✅ Dein Google Verification Tag */}
        <meta
          name="google-site-verification"
          content="gSAsxWmOFdGA-fzAf37lxqrJyMnFL-TiscNlX5FRriI"
        />

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased flex flex-col min-h-screen">
        <ClientBody>{children}</ClientBody>

        {/* ✅ Footer */}
        <footer className="mt-auto p-6 bg-gray-100">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Unternehmen */}
            <div>
              <h4 className="font-semibold mb-2">Unternehmen</h4>
              <ul className="space-y-1">
                <li><Link href="/ueber-uns">Über uns</Link></li>
                <li><Link href="/partnerprogramme">Partnerprogramme</Link></li>
                <li><Link href="/karriere">Karriere</Link></li>
                <li><Link href="/kontakt">Kontakt</Link></li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="font-semibold mb-2">Rechtliches</h4>
              <ul className="space-y-1">
                <li><Link href="/datenschutz">Datenschutz</Link></li>
                <li><Link href="/impressum">Impressum</Link></li>
                <li><Link href="/agb">AGB</Link></li>
                <li><Link href="/cookie-richtlinie">Cookie-Richtlinie</Link></li>
                <li>
                  <a
                    href="https://partner.e-recht24.de/go.cgi?pid=912&wmid=16&cpid=1&prid=1&subid=&target=eRecht24_Startseite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    eRecht24
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
