"use client"

import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Check, Star, Menu, X, ArrowRight, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// SmartFinanzLogo Component
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" aria-label="Zurück zur Startseite">
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">
              S
            </text>
          </svg>
          <span className="font-bold">martFinanz</span>
        </div>
        <span className="text-sm mt-1">unser-vergleichsportal.de</span>
      </div>
    </Link>
  );
};

// Header Component
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("versicherungen");

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ["versicherungen", "banking", "tierversicherungen", "trading"].includes(hash)) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <SmartFinanzLogo className="text-xl" />
          </div>
          <button
            className="sm:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen/schließen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-6 py-4 space-y-6" aria-label="Mobile Menü">
              <div>
                <span className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</span>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: "banking", label: "Banking", url: "/banking", isInternal: true },
                    { key: "haustierversicherung", label: "Haustierversicherung", url: "/tierversicherungen", isInternal: true },
                    { key: "trading", label: "Trading", url: "/trading", isInternal: true },
                    { key: "versicherungen", label: "Versicherungen", url: "/versicherungen", isInternal: true },
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveCategory(key);
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-2xl mb-3 text-left ml-2">Weitere Produkte</span>
                <div className="grid grid-cols-2 gap-2">
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: "dsl", label: "DSL", url: "https://www.c24n.de/ducwCtq", isInternal: false },
                      { key: "gas", label: "Gas", url: "https://www.c24n.de/Uxudvkj", isInternal: false },
                      { key: "handytarif", label: "Handytarif", url: "https://www.c24n.de/5R17qbN", isInternal: false },
                      { key: "kreditkarte", label: "Kreditkarte", url: "https://www.tarifcheck.com/NMXe4cX", isInternal: false },
                    ].map(({ key, label, url }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener sponsored noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveCategory(key);
                          }}
                          aria-label={`${label} vergleichen (externer Link)`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: "mietwagen", label: "Mietwagen", url: "https://www.c24n.de/FZ9nd0R", isInternal: false },
                      { key: "oekostrom", label: "Ökostrom", url: "https://www.c24n.de/zxy0WKh", isInternal: false },
                      { key: "reise", label: "Reise", url: "https://www.c24n.de/EieKR0E", isInternal: false },
                      { key: "strom", label: "Strom", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
                    ].map(({ key, label, url }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener sponsored noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveCategory(key);
                          }}
                          aria-label={`${label} vergleichen (externer Link)`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <span className="font-semibold text-2xl mb-3 text-left ml-2">Unternehmen</span>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: "karriere", label: "Karriere", url: "/karriere", isInternal: true },
                    { key: "kontakt", label: "Kontakt", url: "/kontakt", isInternal: true },
                    { key: "partnerprogramm", label: "Partnerprogramm", url: "/partnerprogramme", isInternal: true },
                    { key: "ueber-uns", label: "Über uns", url: "/ueber-uns", isInternal: true },
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveCategory(key);
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-2xl mb-3 text-left ml-2">Rechtliches</span>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: "agb", label: "AGB", url: "/agb", isInternal: true },
                    { key: "cookie-richtlinie", label: "Cookie-Richtlinie", url: "/cookie-richtlinie", isInternal: true },
                    { key: "datenschutz", label: "Datenschutz", url: "/datenschutz", isInternal: true },
                    { key: "impressum", label: "Impressum", url: "/impressum", isInternal: true },
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveCategory(key);
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-4">
                <Button
                  className="w-auto bg-green-600 text-white font-medium text-sm sm:text-base px-4 py-2 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Startseite
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Kategorie-Navigation */}
      <section className="bg-white py-4 border-b" id="versicherungen">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-base">
            {[
              { key: "banking", label: "Banking", url: "/banking", isInternal: true },
              { key: "haustierversicherung", label: "Haustierversicherung", url: "/tierversicherungen", isInternal: true },
              { key: "trading", label: "Trading", url: "/trading", isInternal: true },
              { key: "versicherungen", label: "Versicherung", url: "/versicherungen", isInternal: true },
              { key: "dsl", label: "DSL", url: "https://www.c24n.de/ducwCtq", isInternal: false },
              { key: "gas", label: "Gas", url: "https://www.c24n.de/Uxudvkj", isInternal: false },
              { key: "handytarif", label: "Handytarif", url: "https://www.c24n.de/5R17qbN", isInternal: false },
              { key: "kreditkarte", label: "Kreditkarte", url: "https://www.tarifcheck.com/NMXe4cX", isInternal: false },
              { key: "mietwagen", label: "Mietwagen", url: "https://www.c24n.de/FZ9nd0R", isInternal: false },
              { key: "oekostrom", label: "Ökostrom", url: "https://www.c24n.de/zxy0WKh", isInternal: false },
              { key: "reise", label: "Reise", url: "https://www.c24n.de/EieKR0E", isInternal: false },
              { key: "strom", label: "Strom", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
            ].map(({ key, label, url, isInternal }) => (
              <li key={key}>
                {isInternal ? (
                  <Link
                    href={url}
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`Zu ${label} navigieren`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener sponsored noreferrer"
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`${label} vergleichen (externer Link)`}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Grüner Value-/Trust-Bereich ohne Überschrift */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="ml-3 text-base sm:text-lg">
                  Über <strong className="font-semibold">100.000</strong> zufriedene Nutzer
                </p>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="ml-3 text-base sm:text-lg">
                  Mehr als <strong className="font-semibold">500 Anbieter</strong> im direkten Vergleich
                </p>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="ml-3 text-base sm:text-lg">
                  Im Durchschnitt <strong className="font-semibold">850 € Ersparnis pro Jahr</strong> bei Top-Tarifen
                </p>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="ml-3 text-base sm:text-lg">
                  <strong className="font-semibold">4,8★</strong> Zufriedene Kundenstimmen
                </p>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="ml-3 text-base sm:text-lg">
                  Schnell, sicher &amp; <strong className="font-semibold">kostenlos</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export interface Provider {
  name: string;
  rating: number;
  features: string[];
  price: string;
  bonus: string;
  logo: string;
  url: string;
}

const providerData: { [key: string]: Provider[] } = {
  versicherungen: [
    {
      name: "Tarifcheck.de",
      rating: 4.5,
      features: [
        "Bis zu 1.000€ jährlich sparen möglich",
        "100% kostenloser und unverbindlicher Vergleich",
        "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
        "Mehrfach ausgezeichnet mit 'sehr gut'",
        "eKomi Silber Siegel mit 4,5/5 Sternen",
        "Über 3.194 Kundenbewertungen",
        "Deutschlands drittgrößtes Vergleichsportal",
        "Vertrauen von Millionen Verbrauchern",
        "Über 20 Jahre Erfahrung als Vergleichsportal",
      ],
      price: "100% kostenlos",
      bonus: "Bis zu 120€ Neukundenbonus",
      logo: "🏆",
      url: "https://www.tarifcheck.de/girokonto/",
    },
    {
      name: "freenet",
      rating: 4.7,
      features: [
        "Flexible Mobilfunktarife mit bis zu 40 GB Datenvolumen",
        "Kostenloser Wechselservice für Mobilfunkverträge",
        "5G-Unterstützung in allen Tarifen",
        "Kombi-Vorteile mit DSL- und Festnetzanschluss",
        "Bis zu 100€ Startguthaben für Neukunden",
        "Kostenlose Hotline für Kunden",
        "Schnelle Vertragsabwicklung online",
        "Testsieger für Kundenservice (connect 2025)",
        "Zusätzliche Rabatte für junge Kunden unter 28",
        "Umweltfreundliche Tarife mit CO₂-Kompensation",
      ],
      price: "ab 9,99€/Monat",
      bonus: "Bis zu 100€ Startguthaben",
      logo: "📱",
      url: "https://www.awin1.com/awclick.php?gid=392137&mid=11420&awinaffid=2524533&linkid=3572260&clickref=",
    },
  ],
  tierversicherungen: [
    {
      name: "PetProtect",
      rating: 4.9,
      features: ["Vollschutz", "Ohne Wartezeit", "Freie Tierarztwahl"],
      price: "ab 8€/Monat",
      bonus: "1. Monat gratis",
      logo: "🐕",
      url: "/anbieter/petprotect",
    },
    {
      name: "FigoPet",
      rating: 4.6,
      features: ["Moderne Plattform", "Schnelle Erstattung", "Präventionsschutz"],
      price: "ab 12€/Monat",
      bonus: "Willkommensgeschenk",
      logo: "🐱",
      url: "/anbieter/figopet",
    },
  ],
  banking: [
    {
      name: "Tarifcheck.de",
      rating: 4.5,
      features: [
        "Über 20 Jahre Erfahrung als Vergleichsportal",
        "100% kostenloser und unverbindlicher Vergleich",
        "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
        "Mehrfach ausgezeichnet mit 'sehr gut'",
        "eKomi Silber Siegel mit 4,5/5 Sternen",
        "Über 3.194 Kundenbewertungen",
        "Deutschlands drittgrößtes Vergleichsportal",
        "Vertrauen von Millionen Verbrauchern",
        "Bis zu 1.000€ jährlich sparen möglich",
      ],
      price: "100% kostenlos",
      bonus: "Bis zu 120€ Neukundenbonus",
      logo: "🏆",
      url: "https://www.tarifcheck.de/girokonto/",
    },
    {
      name: "XTB",
      rating: 4.5,
      features: [
        "Gratis Aktie für neue Investoren",
        "Bis zu 2,3% p.a. Zinsen auf Guthaben",
        "Über 8000 Aktien & ETFs",
        "Über 2600 CFD-Instrumente (Forex, Rohstoffe, Indizes)",
        "Über 40 Krypto-CFDs (BTC, ETH, etc.)",
        "eWallet mit virtueller Mastercard",
        "Smarte ETF-Sparpläne",
        "0% Kommission bis 100.000€ Umsatz",
        "Kostenlose Ein- & Auszahlungen",
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
        "Platz 1 CFD-Broker 2024/25",
      ],
      price: "0€ Kommission",
      bonus: "Demo-Konto",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
    },
    {
      name: "Credimaxx",
      rating: 4.9,
      features: [
        "Kredite von 4.000€ bis 50.000€ mit sozialer Verantwortung",
        "Sofortvermittlung durch erfahrene Kreditprofis",
        "Digitaler Abschluss mit WebID oder VideoIdent",
        "Kredit ohne Schufa, Sofortkredit oder Umschuldung möglich",
        "Keine Zusatzprodukte wie Versicherungen oder Fondssparpläne",
        "TÜV Kundenzufriedenheit: 1.9 (sehr gut), eKomi 4.9/5",
        "Vermittlung in bis zu 1 Minute",
        "100% Sicherheit mit 256-Bit-SSL-Verschlüsselung",
        "Anschlussfinanzierungen und Immobilienkredite verfügbar",
        "25 Jahre Erfahrung in der Kreditvermittlung",
      ],
      price: "ab 10,99% eff. Zins p.a.",
      bonus: "Schnelle Auszahlung",
      logo: "💳",
      url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D",
    },
    {
      name: "freenet",
      rating: 4.7,
      features: [
        "Flexible Mobilfunktarife mit bis zu 40 GB Datenvolumen",
        "Kostenloser Wechselservice für Mobilfunkverträge",
        "5G-Unterstützung in allen Tarifen",
        "Kombi-Vorteile mit DSL- und Festnetzanschluss",
        "Bis zu 100€ Startguthaben für Neukunden",
        "Kostenlose Hotline für Kunden",
        "Schnelle Vertragsabwicklung online",
        "Testsieger für Kundenservice (connect 2025)",
        "Zusätzliche Rabatte für junge Kunden unter 28",
        "Umweltfreundliche Tarife mit CO₂-Kompensation",
      ],
      price: "ab 9,99€/Monat",
      bonus: "Bis zu 100€ Startguthaben",
      logo: "📱",
      url: "https://www.awin1.com/awclick.php?gid=392137&mid=11420&awinaffid=2524533&linkid=3572260&clickref=",
    },
  ],
  trading: [
    {
      name: "XTB",
      rating: 4.5,
      features: [
        "Gratis Aktie für neue Investoren",
        "Bis zu 2,3% p.a. Zinsen auf Guthaben",
        "Über 8000 Aktien & ETFs",
        "Über 2600 CFD-Instrumente (Forex, Rohstoffe, Indizes)",
        "Über 40 Krypto-CFDs (BTC, ETH, etc.)",
        "eWallet mit virtueller Mastercard",
        "Smarte ETF-Sparpläne",
        "0% Kommission bis 100.000€ Umsatz",
        "Kostenlose Ein- & Auszahlungen",
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
        "Platz 1 CFD-Broker 2024/25",
      ],
      price: "0€ Kommission",
      bonus: "Demo-Konto",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
    },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("versicherungen");

  return (
    <>
      <Head>
        {/* --- Meta Basics (bereinigt) --- */}
        <title>Transparenter Finanzvergleich Oktober 2025 | Finden Sie den besten Anbieter</title>
        <meta
          name="description"
          content="Unabhängiger Finanzvergleich 2025: Über 500 geprüfte Anbieter für Versicherungen, Banking, Trading, DSL & mehr. Kostenlos vergleichen & bis zu 1.000€ sparen!"
        />
        {/* Entfernt: meta keywords (obsolet), revisit-after (ohne Wirkung) */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* Accessibility: Zoom wieder erlaubt */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="do7wLkAw67zaDPOv09_PXGQaI2LAKpw5cTkmkjgRe6E" />
        <meta name="author" content="SmartFinanz" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://unser-vergleichsportal.de" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="alternate icon" href="/images/favicon.ico" />

        {/* Hreflang (Basis) */}
        <link rel="alternate" href="https://unser-vergleichsportal.de/" hrefLang="de-DE" />
        <link rel="alternate" href="https://unser-vergleichsportal.de/" hrefLang="x-default" />

        {/* --- Open Graph --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transparenter Finanzvergleich Oktober 2025 | Finden Sie den besten Anbieter" />
        <meta
          property="og:description"
          content="Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de" />
        <meta property="og:site_name" content="SmartFinanz" />
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
        <meta property="og:locale" content="de_DE" />
        <meta property="article:author" content="SmartFinanz" />
        <meta property="og:updated_time" content="2025-10-19T00:27:16+00:00" />
        <meta property="article:published_time" content="2025-10-01T00:00:00+00:00" />
        <meta property="article:modified_time" content="2025-10-19T00:27:16+00:00" />

        {/* --- Twitter Cards --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transparenter Finanzvergleich Oktober 2025 | Finden Sie den besten Anbieter" />
        <meta name="twitter:description" content="Über 500 Anbieter im Vergleich: Versicherungen, Banking, Trading, DSL, Strom & mehr. Kostenlos, unabhängig & ohne versteckte Kosten." />
        <meta
          name="twitter:image"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta name="twitter:image:alt" content="SmartFinanz - Transparenter Finanzvergleich" />
        <meta name="twitter:site" content="@unservergleich" />
        <meta name="twitter:creator" content="@unservergleich" />

        {/* --- Preloads & Resource Hints (bereinigt) --- */}
        <link rel="preload" href="/logo.png" as="image" />
        {/* bevorzugt preconnect für Domains mit früher Verbindung */}
        <link rel="preconnect" href="https://www.awin1.com" crossOrigin="" />
        <link rel="preconnect" href="https://link-pso.xtb.com" crossOrigin="" />
        <link rel="preconnect" href="https://private.vodafone-affiliate.de" crossOrigin="" />
        {/* unnötige dns-prefetch reduziert */}
        <link rel="dns-prefetch" href="https://www.tarifcheck.de" />
        <link rel="dns-prefetch" href="https://www.c24n.de" />

        <meta name="impact-site-verification" content="f34232c9-40b1-4773-b281-9b596b88cd82" />

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

        {/* ---- Schema.org: FAQPage (einmalig, im Head belassen) ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Wie funktioniert der Finanzvergleich?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unser Expertenteam vergleicht täglich über 500 Finanzprodukte von führenden Anbietern. Sie erhalten kostenlose, unabhängige Empfehlungen basierend auf Ihren individuellen Bedürfnissen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ist der Finanzvergleich auf unser-vergleichsportal.de kostenlos?",
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
                  "name": "Wie schnell bekomme ich die Empfehlungen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Die meisten Vergleiche sind sofort verfügbar. Bei komplexeren Anfragen erhalten Sie binnen weniger Minuten personalisierte Empfehlungen."
                  }
                }
              ]
            }),
          }}
        />

        {/* ---- Schema.org: BreadcrumbList (Home) ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://unser-vergleichsportal.de/" }
              ]
            }),
          }}
        />
      </Head>
      <main>
        <div className="min-h-screen bg-white">
          <Header />

          {/* Hauptüberschrift */}
          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Transparenter Finanzvergleich Oktober 2025 | Finden Sie den besten Anbieter</h1>
              <p className="text-lg font-semibold mb-4" itemScope itemType="http://schema.org/Brand">
                <span itemProp="name">unser-vergleichsportal.de</span> | einfach sparen
              </p>
              <p className="text-base sm:text-lg mb-4">Perfekt für Berufseinsteiger, Familien und Selbstständige, die ihre Finanzen optimieren wollen.</p>
              <p className="text-base sm:text-lg mb-4">Finden Sie in 3 Minuten das passende Finanzprodukt – transparent, unabhängig, ohne Kosten. Unser Vergleich spart Zeit, Geld und schützt vor Fehlentscheidungen.</p>
              <p className="text-base sm:text-lg mb-4">Unübersichtlicher Markt? Wir liefern Klarheit und die besten Konditionen – schnell und zuverlässig.</p>
              <p className="text-base sm:text-lg mb-4">Über 500 Produkte täglich geprüft – 100.000+ zufriedene Nutzer.</p>
              <a
                rel="sponsored"
                href="https://www.awin1.com/awclick.php?gid=373003&mid=14797&awinaffid=2524533&linkid=2676754&clickref="
                aria-label="Verivox - die Tarifexperten"
              >
                <Button
                  size="lg"
                  className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                >
                  BESTEN TARIF BERECHNEN
                </Button>
              </a>
             {/* Trust Signals hinzugefügt - genau wie in Code 1 */}
          <div className="mt-6 mb-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Image
              src="/images/5.png"
              alt="Vertrauenssignal 5"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/1.png"
              alt="Vertrauenssignal 1"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/2.png"
              alt="Vertrauenssignal 2"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/3.png"
              alt="Vertrauenssignal 3"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/4.png"
              alt="Vertrauenssignal 4"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
              </div>
            </div>
          </section>

        
