"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" loading="lazy">
        <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
      </svg>
      <span className="font-bold">martFinanz</span>
    </div>
  )
}

const providerData = {
  trading: [
    {
      name: "TradingView",
      rating: 4.8,
      features: [
        "Über 100 Mio. Nutzer weltweit für Trading und Analysen",
        "Kostenloses Konto ohne Kreditkarte, ab $0 für immer",
        "Supercharts mit Echtzeit-Daten für Aktien, Krypto, Forex",
        "Social Trading: Ideen von Top-Tradern folgen",
        "Erweiterte Indikatoren und Strategien für alle Märkte",
        "Kostenloses Demo-Konto für risikofreies Testen",
        "Integration mit verifizierten Brokern wie OKX, AMP Futures",
        "Mobile App für Trading unterwegs",
        "Krypto-Screener für Bitcoin, Ethereum, Memecoins",
        "Regulierte Plattform mit hoher Benutzerfreundlichkeit"
      ],
      price: "Kostenlos ab $0",
      bonus: "Kostenloses Konto ohne Kreditkarte",
      logo: "📈",
      url: "https://de.tradingview.com/?aff_id=156504",
      metaTitle: "TradingView: Beste Plattform für Krypto- und Aktien-Trading 2025",
      metaDescription: "TradingView bietet Supercharts, Echtzeit-Daten und Social Trading für über 100 Mio. Nutzer. Starten Sie kostenlos mit Aktien, Krypto und Forex!",
      isTopRecommendation: true
    }
  ]
}

export default function DeFi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup für SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "TradingView: Beste Trading-Plattform für DeFi & Krypto 2025 | SmartFinanz",
          "description": providerData.trading[0].metaDescription,
          "url": "https://www.smartfinanz.de/defi",
          "publisher": {
            "@type": "Organization",
            "name": "SmartFinanz",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.smartfinanz.de/logo.png"
            }
          },
          "mainEntity": {
            "@type": "Product",
            "name": providerData.trading[0].name,
            "description": providerData.trading[0].metaDescription,
            "offers": {
              "@type": "Offer",
              "price": providerData.trading[0].price,
              "url": providerData.trading[0].url
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": providerData.trading[0].rating,
              "reviewCount": "100"
            }
          }
        })}
      </script>

      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
            <span className="text-xs text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/versicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Versicherungen
            </Link>
            <Link href="/banking" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Banking
            </Link>
            <Link href="/tierversicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Tierversicherung
            </Link>
            <Link href="/trading" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Trading
            </Link>
            <Link href="/#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:block bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2" 
              onClick={() => window.open("https://de.tradingview.com/?aff_id=156504", "_blank")}
            >
              Vergleich starten
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu öffnen/schließen"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/versicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Versicherungen
              </Link>
              <Link
                href="/banking"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Banking
              </Link>
              <Link
                href="/tierversicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tierversicherung
              </Link>
              <Link
                href="/trading"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                href="/#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                onClick={() => window.open("https://de.tradingview.com/?aff_id=156504", "_blank")}
              >
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Anbieterübersicht */}
      <section id="anbieter" className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">TradingView: Testsieger für Trading 2025</h2>
          <div className="grid gap-6 max-w-2xl mx-auto">
            {providerData.trading.map((provider) => (
              <Card 
                key={provider.name} 
                className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative touch-manipulation"
              >
                {provider.isTopRecommendation && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    Top Empfehlung
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-center border-b pb-2 mb-4">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
                  </div>
                  <ul className="space-y-1 flex-1 overflow-auto text-sm">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={provider.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2">
                      Zum Anbieter*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center text-xs text-gray-600 p-4">
            <p>
              *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <SmartFinanzLogo className="text-xl mb-4" />
            <p className="text-gray-400 text-sm text-center">
              Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland. Über Uns: SmartFinanz ist ein unabhängiges Vergleichsportal für Finanzprodukte.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
