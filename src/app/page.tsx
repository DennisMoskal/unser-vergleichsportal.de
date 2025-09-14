"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Check, Star, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// SmartFinanzLogo Component
const SmartFinanzLogo = ({ className }) => {
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
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("versicherungen");

  const scrollToSection = (sectionId) => {
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
    <React.Fragment>
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
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                      { key: "kreditkarte", label: "Kreditkarte", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  className="w-auto bg-green-600 text-white font-medium text-base px-4 py-2 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
              { key: "kreditkarte", label: "Kreditkarte", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
              { key: "mietwagen", label: "Mietwagen", url: "https://www.c24n.de/FZ9nd0R", isInternal: false },
              { key: "oekostrom", label: "Ökostrom", url: "https://www.c24n.de/zxy0WKh", isInternal: false },
              { key: "reise", label: "Reise", url: "https://www.c24n.de/EieKR0E", isInternal: false },
              { key: "strom", label: "Strom", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
            ].map(({ key, label, url, isInternal }) => (
              <li key={key}>
                {isInternal ? (
                  <Link
                    href={url}
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`Zu ${label} navigieren`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  Ø <strong className="font-semibold">850 € Ersparnis pro Jahr</strong> bei Top-Tarifen
                </p>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="ml-3 text-base sm:text-lg">
                  <strong className="font-semibold">4,8★</strong> verivizierte Kundenstimmen
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
    </React.Fragment>
  );
};

const providerData = {
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
      name: "eRecht24",
      rating: 4.3,
      features: [
        "Rechtssicherheit für Webseiten",
        "DSGVO-konform mit Premium Tools",
        "Automatische Rechtstext-Generatoren",
        "Abmahnschutz inklusive",
        "Praxis-Tools für Social Media",
        "Kostenlose Erstberatung",
        "NEU: KI-gestützte Lösungen",
        "Zentraler Projekt Manager",
        "Online Vertragsmanagement",
        "Muster-Verträge & Checklisten",
      ],
      price: "ab 20€/Monat",
      bonus: "Gratis Rechtscheck",
      logo: "⚖️",
      url: "https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default",
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
    <React.Fragment>
      <Head>
        <title>SmartFinanz - Finanzvergleich 2025: Versicherungen, Banking & mehr</title>
        <meta
          name="description"
          content="Kostenloser Finanzvergleich 2025: Über 500 Anbieter für Versicherungen, Banking, Tierversicherungen, DSL & mehr. Bis zu 1.000€ sparen!"
        />
        <meta
          name="keywords"
          content="Finanzvergleich 2025, günstige Versicherungen, kostenloses Banking, Tierversicherung Hund, Trading Plattform, DSL Vergleich, SmartFinanz"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="google-site-verification" content="do7wLkAw67zaDPOv09_PXGQaI2LAKpw5cTkmkjgRe6E" />
        <meta name="author" content="SmartFinanz" />
        <meta name="revisit-after" content="7 days" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://unser-vergleichsportal.de" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="alternate icon" href="/images/favicon.ico" />
        <meta property="og:title" content="SmartFinanz - Finanzvergleich 2025: Versicherungen, Banking & mehr" />
        <meta
          property="og:description"
          content="Kostenloser Finanzvergleich 2025: Über 500 Anbieter für Versicherungen, Banking, Tierversicherungen, DSL & mehr. Bis zu 1.000€ sparen!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unser-vergleichsportal.de" />
        <meta property="og:image" content="https://unser-vergleichsportal.de/og-image.jpg" />
        <meta property="og:site_name" content="SmartFinanz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartFinanz - Finanzvergleich 2025: Versicherungen, Banking & mehr" />
        <meta
          name="twitter:description"
          content="Kostenloser Finanzvergleich 2025: Über 500 Anbieter für Versicherungen, Banking, Tierversicherungen, DSL & mehr. Bis zu 1.000€ sparen!"
        />
        <meta name="twitter:image" content="https://unser-vergleichsportal.de/og-image.jpg" />
        <meta name="twitter:site" content="@smartfinanz" />
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
        <meta name="impact-site-verification" content="f34232c9-40b1-4773-b281-9b596b88cd82" />
      </Head>
      <main>
        <div className="min-h-screen bg-white">
          <Header />

          {/* Hauptüberschrift */}
          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Transparenter Finanzvergleich September 2025 | Ohne versteckte Kosten</h1>
              <p className="text-lg font-semibold mb-4" itemScope itemType="http://schema.org/Brand">
                <span itemProp="name">unser-vergleichsportal.de</span> | einfach sparen!
              </p>
              <Button
                size="lg"
                className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                aria-label="Beste Finanzprodukte ansehen"
              >
                Jetzt vergleichen
              </Button>
            </div>
          </section>

          {/* Vergleichstabellen */}
          <section className="py-12 sm:py-16 px-4 bg-gray-50" id="comparison-section">
            <div className="container mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                Testsieger September 2025: Top-Anbieter für Finanzprodukte
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
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
                    name: "eRecht24",
                    rating: 4.3,
                    features: [
                      "Rechtssicherheit für Webseiten",
                      "DSGVO-konform mit Premium Tools",
                      "Automatische Rechtstext-Generatoren",
                      "Abmahnschutz inklusive",
                      "Praxis-Tools für Social Media",
                      "Kostenlose Erstberatung",
                      "NEU: KI-gestützte Lösungen",
                      "Zentraler Projekt Manager",
                      "Live-Webinare zu Internetrecht",
                      "Muster-Verträge & Checklisten",
                    ],
                    price: "ab 20€/Monat",
                    bonus: "Gratis Rechtscheck",
                    logo: "⚖️",
                    url: "https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default",
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
                    name: "HanseMerkur",
                    rating: 4.7,
                    features: [
                      "Umfassender Schutz für Hunde und Katzen",
                      "Bis zu 100% Kostenerstattung",
                      "Freie Tierarztwahl",
                      "Keine Altersbeschränkung",
                      "Schnelle Schadensbearbeitung",
                      "Flexible Tarifoptionen",
                      "Zusatzleistungen wie Physiotherapie",
                      "Online-Vertragsmanagement",
                      "24/7 Kundenhotline",
                    ],
                    price: "ab 10€/Monat",
                    bonus: "Kostenloser Gesundheitscheck",
                    logo: "🐾",
                    url: "https://www.hansemerkur.de/tierkrankenversicherung",
                  },
                  {
                    name: "CHECK24",
                    rating: 4.8,
                    features: [
                      "Kostenloser Kontowechselservice",
                      "Über 50 Banken im Vergleich",
                      "Bis zu 250€ Willkommensbonus",
                      "Kostenlose Kontoführung",
                      "Schnelle Kontoeröffnung",
                      "TÜV-geprüfter Vergleich",
                      "24/7 Kundensupport",
                      "Mobile Banking App",
                      "Kreditkartenoptionen verfügbar",
                      "Attraktive Zinsen auf Tagesgeld",
                    ],
                    price: "0€ Kontoführung",
                    bonus: "Bis zu 250€ Bonus",
                    logo: "🏦",
                    url: "https://www.check24.de/girokonto/",
                  },
                  {
                    name: "Vodafone",
                    rating: 4.6,
                    features: [
                      "Highspeed Kabel-Internet mit bis zu 1.000 MBit/s",
                      "Günstige Mobilfunktarife mit 5G-Unterstützung",
                      "Spezielle Angebote für Selbstständige und Geschäftskunden",
                      "Kombi-Vorteile für DSL und Mobilfunk",
                      "Kostenloser WLAN-Router bei Vertragsabschluss",
                      "Flexibles Streaming mit GigaTV",
                      "24/7 Kundenhotline für schnellen Support",
                      "Bis zu 100€ Startguthaben für Neukunden",
                      "Schnelle Installation und Einrichtung",
                      "Testsieger für Kundenservice (connect 2025)",
                    ],
                    price: "ab 9,99€/Monat",
                    bonus: "Bis zu 100€ Startguthaben",
                    logo: "📡",
                    url: "https://private.vodafone-affiliate.de/tc.php?t=126731C2369176269T&cons=",
                  },
                  {
                    name: "1&1",
                    rating: 4.7,
                    features: [
                      "Highspeed DSL-Tarife mit bis zu 250 MBit/s",
                      "Testsieger für Internetgeschwindigkeit (connect 2025)",
                      "Kostenloser HomeServer für optimales WLAN",
                      "Spezielle Angebote für Selbstständige und Firmen",
                      "Kombi-Vorteile mit Mobilfunktarifen",
                      "30 Tage Testphase für alle Tarife",
                      "Bis zu 50€ Startguthaben für junge Kunden",
                      "24h Austausch-Service bei Defekten",
                      "Umfassender Umzugsservice",
                      "Attraktive Bundle-Angebote mit Smartphones",
                    ],
                    price: "ab 9,99€/Monat",
                    bonus: "Bis zu 50€ Startguthaben",
                    logo: "🌐",
                    url: "https://www.awin1.com/awclick.php?gid=347927&mid=12554&awinaffid=2524533&linkid=2259270&clickref=",
                  },
                  {
                    name: "Verivox",
                    rating: 4.9,
                    features: [
                      "Vergleich von Wohngebäudeversicherungen für optimalen Schutz",
                      "Über 800 Anbieter für Strom, Gas, DSL und Versicherungen",
                      "Spezielle Angebote für Selbstständige und Unternehmen",
                      "TÜV-geprüfter Vergleichsportal mit 4.9/5 Bewertung",
                      "Bis zu 200€ Prämie für Freundschaftswerbung",
                      "Kostenloser Wechselservice für Tarife",
                      "Transparente Tarifübersicht in der Verivox-App",
                      "Schneller Online-Abschluss für Versicherungen",
                      "Über 25 Jahre Erfahrung im Vergleichsmarkt",
                      "Bis zu 1.000€ jährliche Einsparungen möglich",
                    ],
                    price: "100% kostenlos",
                    bonus: "Bis zu 200€ Prämie",
                    logo: "🏠",
                    url: "https://www.awin1.com/awclick.php?gid=373003&mid=14797&awinaffid=2524533&linkid=2691475&clickref=",
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
                ].map((provider, index) => (
                  <Card
                    key={provider.name}
                    className="relative hover:shadow-xl transition-shadow bg-white border-2 hover:border-green-200 h-full flex flex-col overflow-hidden"
                  >
                    <Badge className="absolute top-0 right-0 bg-yellow-500 text-xs sm:text-sm px-3 py-1 transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 z-10">
                      Top Empfehlung
                    </Badge>
                    <CardHeader className="text-center pb-2 sm:pb-4 flex-shrink-0">
                      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{provider.logo}</div>
                      <CardTitle className="text-lg sm:text-xl font-bold break-words">{provider.name}</CardTitle>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 sm:h-4 w-4 ${i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-600">{provider.rating}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
                      <div className="text-center border-b pb-3 sm:pb-4 mb-3 sm:mb-4 flex-shrink-0">
                        <p className="text-xl sm:text-2xl font-bold text-green-600 break-words">{provider.price}</p>
                        <Badge variant="outline" className="mt-1 sm:mt-2 border-green-200 text-green-700 text-xs sm:text-sm break-words">
                          {provider.bonus}
                        </Badge>
                      </div>
                      <div className="flex-grow overflow-hidden">
                        <div className="max-h-48 overflow-y-auto mb-4 pr-2" style={{ scrollbarWidth: "thin" }}>
                          <ul className="space-y-1.5">
                            {provider.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-xs sm:text-sm leading-tight">
                                <Check className="mr-2 h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <p className="break-words overflow-wrap-anywhere">{feature}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a
                        href={provider.url}
                        target={provider.url.startsWith("http") ? "_blank" : "_self"}
                        rel={provider.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={`Zum Anbieter ${provider.name}`}
                      >
                        <Button
                          className="w-full bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-auto flex-shrink-0"
                        >
                          Jetzt abschließen*
                          {provider.name === "Vodafone" && (
                            <Image
                              src="https://private.vodafone-affiliate.de/tb.php?t=126731V2369176269T"
                              alt=""
                              width={0}
                              height={0}
                              className="border-0"
                            />
                          )}
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center text-xs sm:text-sm text-gray-600">
                <p>
                  CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu verlieren.
                  72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
                  Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.
                </p>
                <p className="mt-4">
                  *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
                </p>
              </div>
            </div>
          </section>

          {/* New Content Sections for Subpages */}
          <section className="py-12 sm:py-16 bg-white" id="content-sections">
            <div className="container mx-auto px-4">
              {/* Banking Section */}
              <div className="mb-12" id="banking-content">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">So finden Sie den richtigen Banking Anbieter</h2>
                <p className="mb-4 text-gray-700" itemProp="description">
                  Die Wahl der richtigen Bank entscheidet über Gebühren, Servicequalität und langfristige Zufriedenheit. Ein durchdachter Vergleich spart bares Geld und vermeidet versteckte Kosten. Unsere{" "}
                  <Link href="/banking" className="text-green-600 hover:underline">
                    Banking-Vergleichsseite
                  </Link>{" "}
                  hilft Ihnen, das optimale Konto zu finden.
                </p>
                <h3 className="text-xl font-semibold mb-3">Darauf sollten Sie achten</h3>
                <p className="mb-4 text-gray-700">
                  Moderne Banken bieten kostenlose Kontoführung, attraktive Neukundenboni und innovative Banking-Apps. Achten Sie auf monatliche Gebühren, Dispozinskonditionen und die Qualität des Mobile Bankings. Top-Anbieter wie{" "}
                  <a href="https://www.check24.de/girokonto/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    CHECK24
                  </a>{" "}
                  bieten bis zu 250€ Bonus.
                </p>
                <h3 className="text-xl font-semibold mb-3">So viel kann ein Tagesgeldkonto bringen</h3>
                <p className="mb-4 text-gray-700">
                  Mit Zinsen von bis zu 4% p.a. sind Tagesgeldkonten 2025 wieder attraktiv. Eine Anlage von 10.000€ kann bis zu 400€ jährlich bringen – steuerfrei dank Sparerpauschbetrag. Vergleichen Sie{" "}
                  <Link href="/banking#tagesgeld" className="text-green-600 hover:underline">
                    Tagesgeldkonten
                  </Link>{" "}
                  für maximale Erträge.
                </p>
                <h3 className="text-xl font-semibold mb-3">Wichtige Kriterien für ein kostenloses Konto</h3>
                <p className="mb-4 text-gray-700">
                  Ein wirklich kostenloses Konto hat keine Grundgebühr, bietet eine kostenlose EC-Karte, gratis Online-Banking und mobile Nutzung. Achten Sie auf versteckte Kosten bei Überweisungen oder Kontoauszügen.{" "}
                  <a href="https://www.tarifcheck.de/girokonto/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    Tarifcheck.de
                  </a>{" "}
                  bietet kostenlose Vergleiche.
                </p>
                <Link href="/banking">
                  <Button className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-4">
                    Jetzt Konto wählen
                  </Button>
                </Link>
              </div>

              {/* Trading Section */}
              <div className="mb-12" id="trading-content">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Selber die Altersvorsorge in die Hand nehmen?</h2>
                <p className="mb-4 text-gray-700" itemProp="description">
                  Immer mehr Menschen bauen ihre Altersvorsorge aktiv auf. Moderne Trading-Plattformen machen den Einstieg einfach. Entdecken Sie passende Optionen auf unserer{" "}
                  <Link href="/trading" className="text-green-600 hover:underline">
                    Trading-Seite
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">Das Rentenloch verstehen</h3>
                <p className="mb-4 text-gray-700">
                  Die gesetzliche Rente deckt nur etwa 48% des letzten Nettoeinkommens. Für einen sorgenfreien Ruhestand ist private Vorsorge essenziell, um die Lücke von über 50% zu schließen. Informieren Sie sich über{" "}
                  <Link href="/trading#rentenloch" className="text-green-600 hover:underline">
                    Altersvorsorge-Optionen
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">Welche Möglichkeiten gibt es?</h3>
                <p className="mb-4 text-gray-700">
                  Aktien, ETFs, Immobilienfonds, Kryptowährungen und Robo-Advisor bieten vielfältige Chancen. Diversifikation reduziert Risiken und stabilisiert Erträge. Plattformen wie{" "}
                  <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    XTB
                  </a>{" "}
                  bieten 0% Kommission bis 100.000€ Umsatz.
                </p>
                <h3 className="text-xl font-semibold mb-3">Sind Bitcoin und andere Kryptowährungen sicher?</h3>
                <p className="mb-4 text-gray-700">
                  Kryptowährungen bieten hohe Renditechancen, aber auch Risiken. Regulierte Plattformen mit sicherer Verwahrung minimieren Gefahren. Erfahren Sie mehr über{" "}
                  <Link href="/trading#krypto" className="text-green-600 hover:underline">
                    sicheres Krypto-Trading
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">Vermögen aufbauen kann jeder</h3>
                <p className="mb-4 text-gray-700">
                  Mit nur 25€ monatlich können Sie in ETFs investieren. Der Cost-Average-Effekt nutzt Kursschwankungen für langfristigen Vermögensaufbau. Starten Sie mit{" "}
                  <Link href="/trading#etfs" className="text-green-600 hover:underline">
                    ETF-Sparplänen
                  </Link>
                  .
                </p>
                <Link href="/trading">
                  <Button className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-4">
                    Jetzt vorsorgen
                  </Button>
                </Link>
              </div>

              {/* Versicherungen Section */}
              <div className="mb-12" id="versicherungen-content">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Diese Versicherungen sollten Sie mindestens haben</h2>
                <p className="mb-4 text-gray-700" itemProp="description">
                  Der richtige Versicherungsschutz schützt vor finanziellen Risiken. Erfahren Sie auf unserer{" "}
                  <Link href="/versicherungen" className="text-green-600 hover:underline">
                    Versicherungsseite
                  </Link>
                  , welche Policen unverzichtbar sind.
                </p>
                <h3 className="text-xl font-semibold mb-3">Privathaftpflichtversicherung</h3>
                <p className="mb-4 text-gray-700">
                  Die Privathaftpflicht schützt vor Schadensersatzansprüchen Dritter. Ein kleiner Unfall kann hohe Kosten verursachen – eine gute Police kostet nur 50-100€ jährlich. Vergleichen Sie bei{" "}
                  <a
                    href="https://www.awin1.com/awclick.php?gid=373003&mid=14797&awinaffid=2524533&linkid=2691475&clickref="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Verivox
                  </a>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">KFZ-Versicherung</h3>
                <p className="mb-4 text-gray-700">
                  Pflicht für Autobesitzer, aber die Unterschiede sind groß. Eine Vollkasko schützt auch bei Eigenverschulden und Diebstahl. Sparen Sie mit unserem{" "}
                  <Link href="/versicherungen#kfz" className="text-green-600 hover:underline">
                    KFZ-Vergleich
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">Rechtschutzversicherung</h3>
                <p className="mb-4 text-gray-700">
                  Rechtstreitigkeiten sind teuer. Eine Rechtschutzversicherung deckt Anwalts- und Gerichtskosten in privaten, beruflichen und Verkehrsstreitigkeiten. Besonders wichtig für Mieter und Selbstständige.
                </p>
                <Link href="/versicherungen">
                  <Button className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-4">
                    Jetzt absichern
                  </Button>
                </Link>
              </div>

              {/* Tierversicherungen Section */}
              <div className="mb-12" id="tierversicherungen-content">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Warum eine Tierversicherung wichtig ist</h2>
                <p className="mb-4 text-gray-700" itemProp="description">
                  Tiere sind Familienmitglieder – ihre Gesundheit sollte abgesichert sein. Hohe Tierarztkosten können Sie finanziell belasten. Entdecken Sie passende Tarife auf unserer{" "}
                  <Link href="/tierversicherungen" className="text-green-600 hover:underline">
                    Tierversicherungsseite
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">Operationen und Notfallbehandlungen</h3>
                <p className="mb-4 text-gray-700">
                  Eine Operation kann 1.000-2.000€ oder mehr kosten. Gute Versicherungen wie{" "}
                  <a href="https://www.hansemerkur.de/tierkrankenversicherung" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    HanseMerkur
                  </a>{" "}
                  decken bis zu 100% der Kosten ab.
                </p>
                <h3 className="text-xl font-semibold mb-3">Vorsorge und Routineuntersuchungen</h3>
                <p className="mb-4 text-gray-700">
                  Impfungen, Parasitenprophylaxe und Gesundheitschecks werden von modernen Policen übernommen. Sparen Sie bei der Vorsorge mit{" "}
                  <Link href="/tierversicherungen#vorsorge" className="text-green-600 hover:underline">
                    Tierversicherungen
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3">Alternative Behandlungsmethoden</h3>
                <p className="mb-4 text-gray-700">
                  Physiotherapie oder Akupunktur sind bei chronischen Beschwerden wichtig. Premium-Tarife erstatten 80-100% dieser Kosten. Informieren Sie sich über{" "}
                  <Link href="/tierversicherungen#alternativ" className="text-green-600 hover:underline">
                    alternative Behandlungen
                  </Link>
                  .
                </p>
                <Link href="/tierversicherungen">
                  <Button className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-4">
                    Jetzt Tier versichern
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Kundenbewertungen */}
          <section className="py-12 sm:py-16 bg-gray-50" id="kundenbewertungen">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Kundenbewertungen zu SmartFinanz</h2>
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/kundenbewertungen/anna.jpg"
                        alt="Kundenbewertung von Anna, 30"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0 border-0"
                      />
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Anna, 30</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Günstige Kfz-Versicherung mit 300€ Ersparnis</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      "Ich habe eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/kundenbewertungen/markus.jpg"
                        alt="Kundenbewertung von Aaron, 42"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0 border-0"
                      />
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Aaron, 42</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 sm:h-5 w-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Beste Tierversicherung für Hunde</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      "Unser-vergleichsportal.de hat uns die perfekte Tierversicherung für unsere Hunde empfohlen. Jetzt sind wir beruhigt, dass Dana & Paco bestens versorgt sind!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/kundenbewertungen/helga.jpg"
                        alt="Kundenbewertung von Helga, 60"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0 border-0"
                      />
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Helga, 60</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Sicheres Banking mit Bonus</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      "Ich war skeptisch, aber der Vergleich hat mir eine sichere Banklösung gezeigt. Der Prozess war klar, und ich habe 50€ Bonus erhalten!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/kundenbewertungen/lukas.jpg"
                        alt="Kundenbewertung von Lukas, 29"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0 border-0"
                      />
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Lukas, 29</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Kostengünstige Trading-Plattform finden</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      "Mit den Trading Top Empfehlungen habe ich die beste Trading-Plattform gefunden. Die Empfehlungen waren super, und ich spare jetzt Gebühren!"
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Schema.org Markup für SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "SmartFinanz",
                    url: "https://smartfinanz.de",
                    potentialAction: {
                      "@type": "SearchAction",
                      target: "https://smartfinanz.de/suche?q={search_term_string}",
                      "query-input": "required name=search_term_string",
                    },
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: "4.8",
                      reviewCount: "100000",
                    },
                    review: [
                      {
                        "@type": "Review",
                        author: { "@type": "Person", name: "Anna" },
                        reviewRating: { "@type": "Rating", ratingValue: "5" },
                        reviewBody:
                          "Dank SmartFinanz habe ich eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell.",
                      },
                      {
                        "@type": "Review",
                        author: { "@type": "Person", name: "Aaron" },
                        reviewRating: { "@type": "Rating", ratingValue: "4" },
                        reviewBody:
                          "SmartFinanz hat uns die perfekte Tierversicherung für unseren Hund empfohlen. Jetzt fühlen wir uns sicher, dass Max bestens versorgt ist!",
                      },
                      {
                        "@type": "Review",
                        author: { "@type": "Person", name: "Helga" },
                        reviewRating: { "@type": "Rating", ratingValue: "5" },
                        reviewBody: "Ich war skeptisch, aber SmartFinanz hat mir eine sichere Banklösung gezeigt. Der Prozess war klar, und ich habe 50€ Bonus erhalten!",
                      },
                      {
                        "@type": "Review",
                        author: { "@type": "Person", name: "Lukas" },
                        reviewRating: { "@type": "Rating", ratingValue: "5" },
                        reviewBody: "Mit SmartFinanz habe ich die beste Trading-Plattform gefunden. Die Empfehlungen waren punktgenau, und ich spare jetzt Gebühren!",
                      },
                    ],
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
                          text: "Ja, alle unsere Vergleiche sind 100% kostenlos und unverbindlich. Wir erhalten Provisionen von unseren Partnern, aber dies beeinflusst niemals Ihre Kosten oder unsere Bewertungen.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Welche Finanzprodukte kann ich bei SmartFinanz vergleichen?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Wir vergleichen Versicherungen, Banking-Produkte, Tierversicherungen, Trading-Plattformen, DSL-Tarife, Handytarife, Strom, Gas, Ökostrom, Reisen, Kreditkarten und Mietwagen.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Wie schnell bekomme ich Empfehlungen bei SmartFinanz?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Die meisten Vergleiche sind sofort verfügbar. Bei komplexeren Anfragen erhalten Sie binnen weniger Minuten personalisierte Empfehlungen von unseren Experten.",
                        },
                      },
                    ],
                  }),
                }}
              />
            </div>
          </section>

          {/* Schlanker CTA-Block unten ohne Buttons */}
          <section className="py-12 sm:py-16 bg-green-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Jetzt Finanzprodukte vergleichen und sparen</h2>
              <p className="mt-4 text-green-100 text-sm sm:text-base">Schnell, sicher & kostenlos – mit nur wenigen Klicks zum besten Angebot.</p>
            </div>
          </section>

          {/* FAQ Section für bessere SEO */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Häufige Fragen zum Finanzvergleich</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Wie funktioniert der Finanzvergleich bei SmartFinanz?</h3>
                  <p className="text-gray-700">Unser Expertenteam vergleicht täglich über 500 Finanzprodukte von führenden Anbietern. Sie erhalten kostenlose, unabhängige Empfehlungen basierend auf Ihren individuellen Bedürfnissen.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Ist der Finanzvergleich bei SmartFinanz kostenlos?</h3>
                  <p className="text-gray-700">Ja, alle unsere Vergleiche sind 100% kostenlos und unverbindlich. Wir erhalten Provisionen von unseren Partnern, aber dies beeinflusst niemals Ihre Kosten oder unsere Bewertungen.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Welche Finanzprodukte kann ich bei SmartFinanz vergleichen?</h3>
                  <p className="text-gray-700">Wir vergleichen Versicherungen, Banking-Produkte, Tierversicherungen, Trading-Plattformen, DSL-Tarife, Handytarife, Strom, Gas, Ökostrom, Reisen, Kreditkarten und Mietwagen.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Wie schnell bekomme ich Empfehlungen bei SmartFinanz?</h3>
                  <p className="text-gray-700">Die meisten Vergleiche sind sofort verfügbar. Bei komplexeren Anfragen erhalten Sie binnen weniger Minuten personalisierte Empfehlungen von unseren Experten.</p>
                </div>
              </div>
            </div>
          </section>
<footer className="bg-gray-900 text-white py-8 sm:py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5">
      <div className="col-span-2 md:col-span-1">
        <div className="flex flex-col items-start mb-4">
          <SmartFinanzLogo className="text-xl" />
        </div>
      </div>
      
      <div>
        <span className="font-semibold mb-3 text-xl">Finanzprodukte</span>
        <ul className="space-y-2 text-base text-gray-400">
          <li>
            <Link 
              href="/banking" 
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Banking"
            >
              Banking
            </Link>
          </li>
          <li>
            <Link 
              href="/tierversicherungen" 
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Haustierversicherung"
            >
              Haustierversicherung
            </Link>
          </li>
          <li>
            <Link 
              href="/trading" 
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Trading"
            >
              Trading
            </Link>
          </li>
          <li>
            <Link 
              href="/versicherungen" 
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Versicherungen"
            >
              Versicherungen
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <span className="font-semibold mb-3 text-xl">Weitere Produkte</span>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2 text-base text-gray-400">
            <li>
              <a 
                href="https://www.c24n.de/ducwCtq" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="DSL Vergleich (externer Link)"
              >
                DSL
              </a>
            </li>
            <li>
              <a 
                href="https://www.c24n.de/Uxudvkj" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Gasvergleich (externer Link)"
              >
                Gas
              </a>
            </li>
            <li>
              <a 
                href="https://www.c24n.de/5R17qbN" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Handytarif vergleichen (externer Link)"
              >
                Handytarif
              </a>
            </li>
            <li>
              <a 
                href="https://www.c24n.de/RYXPGyh" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Kreditkarten vergleichen (externer Link)"
              >
                Kreditkarte
              </a>
            </li>
          </ul>
          <ul className="space-y-2 text-base text-gray-400">
            <li>
              <a 
                href="https://www.c24n.de/FZ9nd0R" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Mietwagen vergleichen (externer Link)"
              >
                Mietwagen
              </a>
            </li>
            <li>
              <a 
                href="https://www.c24n.de/zxy0WKh" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Ökostrom vergleichen (externer Link)"
              >
                Ökostrom
              </a>
            </li>
            <li>
              <a 
                href="https://www.c24n.de/EieKR0E" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Reise vergleichen (externer Link)"
              >
                Reise
              </a>
            </li>
            <li>
              <a 
                href="https://www.c24n.de/RYXPGyh" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Stromvergleich (externer Link)"
              >
                Strom
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <span className="font-semibold mb-3 text-xl">Unternehmen</span>
        <ul className="space-y-2 text-base text-gray-400">
          <li>
            <Link 
              href="/karriere" 
              rel="nofollow"
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Karriere"
            >
              Karriere
            </Link>
          </li>
          <li>
            <Link 
              href="/kontakt" 
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Kontakt"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link 
              href="/partnerprogramme" 
              rel="nofollow"
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Partnerprogramm"
            >
              Partnerprogramm
            </Link>
          </li>
          <li>
            <Link 
              href="/ueber-uns" 
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Über uns"
            >
              Über uns
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <span className="font-semibold mb-3 text-xl">Rechtliches</span>
        <ul className="space-y-2 text-base text-gray-400">
          <li>
            <Link 
              href="/agb" 
              rel="nofollow"
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="AGB"
            >
              AGB
            </Link>
          </li>
          <li>
            <Link 
              href="/cookie-richtlinie" 
              rel="nofollow"
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Cookie-Richtlinie"
            >
              Cookie-Richtlinie
            </Link>
          </li>
          <li>
            <Link 
              href="/datenschutz" 
              rel="nofollow"
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Datenschutz"
            >
              Datenschutz
            </Link>
          </li>
          <li>
            <Link 
              href="/impressum" 
              rel="nofollow"
              className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
              aria-label="Impressum"
            >
              Impressum
            </Link>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-gray-800 mt-8 pt-6 text-center">
      <p className="text-base text-gray-400 mb-4">
        © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
      </p>
      <Link href="/" aria-label="Zurück zur Startseite">
        <Button 
          className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
        >
          Startseite
        </Button>
      </Link>
    </div>
  </div>
</footer>
        </div>
      </main>
    </>
  )
}
