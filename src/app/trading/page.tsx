"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp } from "lucide-react"
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
      url: "https://link-pso.xtb.com/pso/lMDhc"
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
      url: "https://www.kraken.com/de-de"
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
      url: "/anbieter/bybit"
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
      url: "https://www.etoro.com/de/"
    }
  ]
}

export default function Trading() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 p-4">Trading Anbieter</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {providerData.trading.map((provider, index) => (
          <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 relative">
            {index === 0 && (
              <Badge className="absolute top-0 right-0 bg-yellow-500 text-xs px-3 py-1">Top Empfehlung</Badge>
            )}
            <CardHeader className="text-center pb-2">
              <div className="text-3xl mb-2">{provider.logo}</div>
              <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-center border-b pb-2">
                <p className="text-xl font-bold text-green-600">{provider.price}</p>
                <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
              </div>
              <ul className="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {provider.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                  Zum Anbieter
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
      <Link href="/" className="mt-6 inline-block text-green-600 hover:underline p-4">
        Zurück zur Startseite
      </Link>
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
