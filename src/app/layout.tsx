"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrendingUp, Shield } from "lucide-react";

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
  const pathname = usePathname();

  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
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
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
            </div>
          </div>
        </header>

        {/* Seiteninhalt */}
        <main className="flex-1">{children}</main>

        {/* Zurück zur Startseite Button nur auf Unterseiten */}
        {pathname !== "/" && (
          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-block text-green-600 hover:underline p-4"
            >
              Zurück zur Startseite
            </Link>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
              <div>
                <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 w-6 text-green-500" />
                  <h5 className="text-lg sm:text-xl font-bold">SmartFinanz</h5>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland.
                </p>
              </div>

              <div>
                <h6 className="font-semibold mb-2 sm:mb-4">Produkte</h6>
                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                  <li><Link href="/versicherungen" className="hover:text-white transition-colors">Versicherungen</Link></li>
                  <li><Link href="/banking" className="hover:text-white transition-colors">Banking</Link></li>
                  <li><Link href="/tierversicherungen" className="hover:text-white transition-colors">Tierversicherung</Link></li>
                  <li><Link href="/krypto" className="hover:text-white transition-colors">Krypto Trading</Link></li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-2 sm:mb-4">Unternehmen</h6>
                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                  <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                  <li><Link href="/partnerprogramme" className="hover:text-white transition-colors">Partnerprogramme</Link></li>
                  <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
                  <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-2 sm:mb-4">Rechtliches</h6>
                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                  <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                  <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                  <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                  <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
              <p>&copy; 2025 SmartFinanz. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
