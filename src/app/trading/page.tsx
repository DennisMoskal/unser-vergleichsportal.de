"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const providerData = {
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
        "Platz 1 CFD-Broker 2024/25"
      ],
      price: "0€ Kommission",
      bonus: "Kostenlose Kontoeröffnung",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
      metaTitle: "XTB Trading: Testsieger CFD-Broker 2025",
      metaDescription: "XTB bietet 0% Kommission bis 100.000€ Umsatz, über 8000 Aktien & ETFs und smarte Sparpläne. Jetzt mit gratis Aktie starten!"
    },
    {
      name: "LYNX",
      rating: 4.7,
      features: [
        "Zugang zu über 100 Märkten in 30+ Ländern",
        "Handel mit US- und Eurex-Optionen",
        "TWS Handelsplattform mit TradingView-Charts",
        "Stop-Loss & Trailing-Stop Orders für alle Produkte",
        "Zinsen durch Aktienverleih",
        "Optionsprämien durch Verkauf von Optionen",
        "24/7 Kundensupport und Premium-Newsletter",
        "Maximale Individualisierung für Profi-Trader",
        "Reguliert durch BaFin für sicheres Trading"
      ],
      price: "ab 5,80€/Order",
      bonus: "Kostenloses Demo-Konto",
      logo: "💹",
      url: "https://www.lynxbroker.de/",
      metaTitle: "LYNX Trading: Professionelle Handelsplattform für Anleger 2025",
      metaDescription: "LYNX bietet Zugang zu über 100 Märkten, TWS Plattform mit TradingView-Charts und Optionenhandel. Jetzt Depot eröffnen und professionell traden!"
    },
    {
      name: "Kraken",
      rating: 4.6,
      features: [
        "Über 480 Kryptowährungen zum Kaufen und Verkaufen",
        "Niedrige Spreads und 0,16% Maker Fee",
        "Wöchentliche Staking-Rewards mit über 800 Mio. € ausgezahlt",
        "24/7 preisgekrönter Kundensupport",
        "Kostenlose Euro-Einzahlungen via SEPA oder PayPal",
        "Reguliert durch die Bermuda Monetary Authority",
        "Hohe Liquidität für stabiles Trading",
        "Krypto-Akademie für Einsteiger und Profis"
      ],
      price: "0,16% Maker Fee",
      bonus: "Wöchentliche Staking-Rewards",
      logo: "🐙",
      url: "https://www.kraken.com/de-de",
      metaTitle: "Kraken Trading: Sichere Krypto-Plattform für Deutschland 2025",
      metaDescription: "Kraken bietet über 480 Kryptowährungen, niedrige Gebühren und wöchentliche Staking-Rewards. Jetzt sicher traden!"
    },
    {
      name: "Bybit",
      rating: 4.4,
      features: [
        "Über 100 Kryptowährungen für Spot- und Derivate-Trading",
        "Bis zu 100x Leverage für fortgeschrittene Trader",
        "Niedrige Gebühren mit 0,1% Taker Fee",
        "Intuitive Plattform mit fortschrittlichen Trading-Tools",
        "Kostenlose Einzahlungen via SEPA oder Kreditkarte",
        "24/7 mehrsprachiger Kundensupport",
        "Bybit Learn für Krypto-Wissen und Strategien",
        "Reguliert und sicher für globale Nutzer"
      ],
      price: "0,1% Taker Fee",
      bonus: "Willkommensbonus bis zu 5.000 USDT",
      logo: "⚡",
      url: "/anbieter/bybit",
      metaTitle: "Bybit Trading: Krypto-Trading mit hohem Leverage 2025",
      metaDescription: "Bybit bietet über 100 Kryptowährungen, bis zu 100x Leverage und niedrige Gebühren. Jetzt mit bis zu 5.000 USDT Bonus starten!"
    },
    {
      name: "eToro",
      rating: 4.3,
      features: [
        "Social Trading mit CopyTrader™ für automatische Trades",
        "Über 70 Kryptowährungen und 3.000+ Aktien/ETFs",
        "Bis zu 4,3% Zinsen auf USD-Guthaben",
        "Einlagen bis 100.000€ pro Bank geschützt",
        "Reguliert durch BaFin und CySec",
        "Kostenlose Euro-Einzahlungen ohne Umrechnungsgebühren",
        "eToro-Akademie mit kostenlosen Kursen",
        "Über 35 Mio. Nutzer weltweit"
      ],
      price: "1% Spread",
      bonus: "Kostenloses Demo-Konto",
      logo: "🌐",
      url: "https://www.etoro.com/de/",
      metaTitle: "eToro Trading: Social Trading für Krypto und Aktien 2025",
      metaDescription: "eToro bietet Social Trading, über 70 Kryptowährungen und 3.000+ Aktien/ETFs. Jetzt mit kostenlosem Demo-Konto starten!"
    }
  ]
}

export default function Trading() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Beste Trading-Plattformen 2025 | SmartFinanz",
          "description": "Vergleichen Sie die besten Trading-Plattformen für Krypto, CFDs und Aktien. Finden Sie niedrige Gebühren, hohe Sicherheit und attraktive Boni mit Testsiegern wie XTB und LYNX.",
          "url": "https://www.smartfinanz.de/trading",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": providerData.trading.map((provider, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": provider.name,
                "description": provider.metaDescription,
                "offers": {
                  "@type": "Offer",
                  "price": provider.price,
                  "url": provider.url
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": provider.rating,
                  "reviewCount": "100"
                }
              }
            }))
          }
        })}
      </script>

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
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
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank")}>
              Vergleich starten
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Versicherungen
              </Link>
              <Link
                href="/banking"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Banking
              </Link>
              <Link
                href="/tierversicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tierversicherung
              </Link>
              <Link
                href="/trading"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                href="/#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank")}>
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Zurück zur Startseite */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>

      {/* Einführungsabschnitt */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Beste Trading-Plattformen 2025: Ihr Weg zum Erfolg</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Entdecken Sie die besten Trading-Plattformen für Krypto, CFDs, Aktien und ETFs. Vergleichen Sie niedrige Gebühren, hohe Sicherheit und attraktive Boni. Unsere Testsieger wie XTB und LYNX bieten 0% Kommission, professionelle Tools und regulierte Plattformen für sicheres Trading. Starten Sie jetzt Ihre Reise zum erfolgreichen Trading!
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="#anbieter">Jetzt vergleichen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Wie wähle ich die beste Trading-Plattform?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Gebühren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf niedrige Gebühren wie 0% Kommission bei XTB oder ab 5,80€/Order bei LYNX, um Ihre Trading-Kosten zu minimieren. Prüfen Sie auch versteckte Kosten wie Spreads oder Einzahlungsgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Sicherheit und Regulierung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Wählen Sie regulierte Plattformen wie LYNX (BaFin), eToro (BaFin, CySec) oder Kraken (Bermuda Monetary Authority) für sicheres Trading. Achten Sie auf Einlagensicherung und transparente Richtlinien.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Demo-Konten nutzen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Testen Sie Plattformen wie XTB, LYNX oder eToro mit kostenlosen Demo-Konten, um Strategien risikofrei auszuprobieren und die Plattform kennenzulernen, bevor Sie investieren.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Unsere Testsieger für Trading 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.trading.map((provider, index) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "XTB" || provider.name === "LYNX") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    {provider.name === "XTB" ? "Top Empfehlung" : "2. Top Empfehlung"}
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
                  <ul className="space-y-1 flex-1 overflow-auto">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">
                      Zum Anbieter*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
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

      {/* New FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Häufig gestellte Fragen zu Trading-Plattformen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist die beste Trading-Plattform für Anfänger?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Für Anfänger empfehlen wir Plattformen wie eToro, die mit Social Trading (CopyTrader™) und einer benutzerfreundlichen Oberfläche überzeugen. Auch XTB bietet mit kostenlosen Demo-Konten und einer Krypto-Akademie einen einfachen Einstieg.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Welche Gebühren fallen beim Trading an?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Die Gebühren variieren je nach Plattform. XTB bietet 0% Kommission bis 100.000€ Umsatz, während Kraken eine Maker Fee von 0,16% berechnet. Achten Sie auf Spreads, Taker Fees und Ein-/Auszahlungsgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Wie sicher ist Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Krypto-Trading ist sicher, wenn Sie regulierte Plattformen wie Kraken (Bermuda Monetary Authority) oder eToro (BaFin, CySec) nutzen. Achten Sie auf Einlagensicherung und Zwei-Faktor-Authentifizierung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist der Unterschied zwischen CFD- und Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  CFD-Trading (z.B. bei XTB) erlaubt spekulative Wetten auf Preisbewegungen ohne Besitz des Vermögenswerts, während Krypto-Trading (z.B. bei Kraken) den Kauf/Verkauf echter Kryptowährungen beinhaltet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Comparison Guide Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Ihr Weg zur richtigen Trading-Plattform: Der ultimative Leitfaden</h2>
          <div className="prose max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              Die Wahl der richtigen Trading-Plattform ist entscheidend für Ihren Erfolg als Investor. Ob Sie in Kryptowährungen, CFDs, Aktien oder ETFs investieren möchten – die Plattform muss zu Ihren Zielen, Ihrem Budget und Ihrem Erfahrungslevel passen. Unser Leitfaden hilft Ihnen, die besten Trading-Plattformen 2025 zu finden, basierend auf Gebühren, Sicherheit, und Funktionen.
            </p>
            <h3 className="text-xl font-bold mb-2">1. Definieren Sie Ihre Trading-Ziele</h3>
            <p className="text-gray-600 mb-4">
              Möchten Sie kurzfristig traden oder langfristig investieren? Für kurzfristiges Trading (z.B. Krypto oder CFDs) sind Plattformen wie Bybit oder Kraken ideal, während XTB und eToro für langfristige ETF- oder Aktieninvestitionen geeignet sind.
            </p>
            <h3 className="text-xl font-bold mb-2">2. Achten Sie auf Gebühren und Kosten</h3>
            <p className="text-gray-600 mb-4">
              Niedrige Gebühren sind essenziell. XTB bietet 0% Kommission bis 100.000€ Umsatz, während Bybit mit 0,1% Taker Fee punktet. Prüfen Sie auch Spreads und Einzahlungsgebühren, um versteckte Kosten zu vermeiden.
            </p>
            <h3 className="text-xl font-bold mb-2">3. Sicherheit und Regulierung prüfen</h3>
            <p className="text-gray-600 mb-4">
              Wählen Sie Plattformen, die durch Behörden wie BaFin (LYNX, eToro) oder die Bermuda Monetary Authority (Kraken) reguliert sind. Dies gewährleistet Einlagensicherung und Transparenz.
            </p>
            <h3 className="text-xl font-bold mb-2">4. Testen Sie mit Demo-Konten</h3>
            <p className="text-gray-600 mb-4">
              Plattformen wie LYNX und eToro bieten kostenlose Demo-Konten, mit denen Sie risikofrei Handelsstrategien testen können. Dies ist besonders für Anfänger wichtig, um die Plattform kennenzulernen.
            </p>
            <h3 className="text-xl font-bold mb-2">5. Nutzen Sie Lernressourcen</h3>
            <p className="text-gray-600 mb-4">
              Viele Plattformen wie Kraken (Krypto-Akademie) oder eToro (eToro-Akademie) bieten Lernmaterialien für Einsteiger und Profis. Nutzen Sie diese, um Ihre Trading-Fähigkeiten zu verbessern.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Fazit:</strong> Die besten Trading-Plattformen 2025 wie XTB, LYNX und Kraken bieten eine Kombination aus niedrigen Gebühren, hoher Sicherheit und benutzerfreundlichen Tools. Vergleichen Sie jetzt unsere Testsieger und starten Sie Ihre Trading-Reise!
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="#anbieter">Testsieger vergleichen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Author Bio for E-E-A-T */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="bg-white border-2">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Über den Autor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Max Mustermann ist ein Finanzexperte mit über 10 Jahren Erfahrung im Bereich Trading und Investitionen. Als zertifizierter Finanzberater (CFA) hat er zahlreiche Artikel und Leitfäden zu Krypto-, CFD- und Aktienhandel veröffentlicht. Seine Analysen basieren auf fundierten Marktkenntnissen und praktischer Erfahrung.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Zurück zur Startseite */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base">
            ← Zurück zur Startseite
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
                <li><Link href="/trading" className="hover:text-white transition-colors">Trading</Link></li>
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
