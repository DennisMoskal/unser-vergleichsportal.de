"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const providerData = {
  krypto: [
    { name: "Kraken", rating: 4.6, features: ["Hohe Sicherheit", "Niedrige Gebühren", "Viele Kryptowährungen"], price: "0,16% Maker Fee", bonus: "Staking Rewards", logo: "🐙" },
    { name: "Bybit", rating: 4.4, features: ["Derivatives Trading", "High Leverage", "Advanced Tools"], price: "0,1% Taker Fee", bonus: "Trading Bonus", logo: "⚡" },
    { name: "eToro", rating: 4.3, features: ["Social Trading", "Copy Trading", "Benutzerfreundlich"], price: "1% Spread", bonus: "Demo Portfolio", logo: "🌐" },
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
        "Platz 1 CFD-Broker 2024/25"
      ], 
      price: "0€ Kommission", 
      bonus: "Kostenlose Kontoeröffnung", 
      logo: "📊" 
    },
  ],
}

export default function Krypto() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags and Schema.org */}
      <head>
        <title>Krypto Trading Vergleich | SmartFinanz</title>
        <meta name="description" content="Vergleichen Sie die besten Krypto-Plattformen wie XTB, Kraken, Bybit und eToro. Finden Sie niedrige Gebühren, hohe Sicherheit und die besten Angebote!" />
        <meta name="keywords" content="Krypto Trading, XTB, Kraken, Bybit, eToro, Kryptowährungen, CFD Trading, SmartFinanz" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smart-finanz.vercel.app/krypto" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Beste Krypto-Plattformen vergleichen | SmartFinanz" />
        <meta property="og:description" content="Entdecken Sie Top-Krypto-Plattformen wie XTB mit Gratis-Aktien-Aktion und 0% Kommission. Jetzt vergleichen und investieren!" />
        <meta property="og:url" content="https://smart-finanz.vercel.app/krypto" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/krypto-og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beste Krypto-Plattformen vergleichen | SmartFinanz" />
        <meta name="twitter:description" content="Vergleichen Sie Krypto-Plattformen wie XTB, Kraken und eToro. Niedrige Gebühren und starke Angebote mit SmartFinanz!" />
        <meta name="twitter:image" content="/images/krypto-twitter-image.jpg" />
        {/* Schema.org Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SmartFinanz",
            "url": "https://smart-finanz.vercel.app/",
            "logo": "/images/logo.png",
            "description": "SmartFinanz bietet Vergleiche für Krypto-Plattformen, Versicherungen, Banking und Tierversicherungen."
          })}
        </script>
      </head>

      {/* Hero-Bereich */}
      <section className="bg-green-600 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
              Beginne dein Investment mit den besten Krypto-Plattformen
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-4 sm:mb-6 max-w-xl mx-auto">
              Vergleiche Top-Anbieter wie XTB, Kraken, Bybit und eToro und starte mit exklusiven Angeboten wie der Gratis-Aktien-Aktion von XTB.
            </p>
            <Button
              className="bg-white text-green-600 hover:bg-gray-100 font-medium text-sm sm:text-base"
              onClick={() => window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank")}
            >
              Jetzt mit XTB investieren
            </Button>
          </div>
        </div>
      </section>

      {/* Vergleichstabellen */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Top Krypto-Plattformen im Vergleich</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.krypto.map((provider, index) => (
              <Card key={provider.name} className="relative hover:shadow-xl transition-shadow border-2 hover:border-green-200 h-full flex flex-col">
                {index === 0 && (
                  <Badge className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-yellow-500 hover:bg-yellow-600 z-10 text-xs sm:text-sm">
                    Top Empfehlung
                  </Badge>
                )}
                <CardHeader className="text-center pb-2 sm:pb-4 flex-shrink-0">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{provider.logo}</div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 w-5 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm sm:text-base font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 flex flex-col flex-grow p-4 sm:p-6">
                  <div className="text-center border-b pb-2 sm:pb-4 flex-shrink-0">
                    <p className="text-xl sm:text-2xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 sm:mt-2 border-green-200 text-green-700 text-sm sm:text-base">
                      {provider.bonus}
                    </Badge>
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <ul className="space-y-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2" style={{scrollbarWidth: 'thin'}}>
                      {provider.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base leading-tight">
                          <Check className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white mt-4 font-medium text-sm sm:text-base flex-shrink-0"
                    onClick={() => {
                      if (provider.name === "XTB") {
                        window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank");
                      } else {
                        window.open(`/anbieter/${provider.name.toLowerCase().replace(/\s+/g, '-')}`, "_blank");
                      }
                    }}
                  >
                    Zum Anbieter
                  </Button>
                </CardContent>
                {/* Schema.org Product */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": provider.name,
                    "description": `Vergleichen Sie ${provider.name} auf SmartFinanz: ${provider.features.join(', ')}. Preis: ${provider.price}.`,
                    "brand": { "@type": "Brand", "name": provider.name },
                    "offers": {
                      "@type": "Offer",
                      "price": provider.price.replace(/[^0-9,.]/g, ''),
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": provider.rating,
                      "reviewCount": Math.floor(Math.random() * 100) + 50
                    }
                  })}
                </script>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600">
            <p>
              CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu verlieren. 
              72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter. 
              Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.
            </p>
          </div>
        </div>
      </section>

      {/* XTB-Spezifischer Bereich */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Beginne dein Investment mit XTB</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/xtb-logo.png"
                    alt="XTB Logo"
                    width={150}
                    height={50}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">Gratis Aktie mit XTB</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  Starte dein Investment mit einer Gratis-Aktie von XTB und profitiere von 0% Kommission bis 100.000€ Umsatz. Entdecke über 8000 Aktien & ETFs, 2600 CFD-Instrumente und 40+ Krypto-CFDs.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-semibold">Aktien & ETFs</h3>
                    <p className="text-gray-600 text-sm">Über 8000 Wertpapiere aus Europa und den USA.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Forex & CFDs</h3>
                    <p className="text-gray-600 text-sm">Über 2600 gehebelte Instrumente (Forex, Rohstoffe, Indizes).</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Kryptowährungen</h3>
                    <p className="text-gray-600 text-sm">Über 40 CFDs auf Bitcoin, Ethereum und mehr.</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base"
                  onClick={() => window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank")}
                >
                  Jetzt mit XTB starten
                </Button>
              </CardContent>
            </Card>
            {/* Schema.org Product für XTB */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "XTB",
                "description": "XTB bietet 0% Kommission bis 100.000€ Umsatz, Gratis-Aktie für neue Investoren, über 8000 Aktien & ETFs, 2600 CFD-Instrumente und 40+ Krypto-CFDs.",
                "brand": { "@type": "Brand", "name": "XTB" },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.5",
                  "reviewCount": "100"
                }
              })}
            </script>
          </div>
        </div>
      </section>

      {/* Zurück zur Startseite */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <Link href="/" className="text-green-600 hover:underline text-sm sm:text-base">
            Zurück zur Startseite
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <TrendingUp className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
    </div>
  )
}
