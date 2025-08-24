import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, PiggyBank, Shield, Award, Clock } from "lucide-react"
import Link from "next/link"

const providerData = {
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
        "Bis zu 1.000€ jährlich sparen möglich"
      ], 
      price: "100% kostenlos", 
      bonus: "Bis zu 120€ Neukundenbonus", 
      logo: "🏆",
      category: "vergleich"
    },
    { 
      name: "DA-Direkt Versicherungen", 
      rating: 4.8, 
      features: [
        "Online-Direktversicherer mit über 100 Jahren Erfahrung",
        "Teil der internationalen Zurich Insurance Group",
        "Testsieger bei Stiftung Warentest (Zahnzusatzversicherung)",
        "Beliebtester Kfz-Direktversicherer laut €uro-Magazin",
        "24/7 Kundenservice an 365 Tagen im Jahr",
        "Smarte Online-Services ohne Papierkrieg",
        "Sofortiger Versicherungsschutz ohne Wartezeit",
        "Flexible monatliche Kündigungsmöglichkeit",
        "Ausgezeichneter Versicherungsschutz zu günstigen Preisen",
        "Über 500 Partner-Zahnärzte im Premium-Netzwerk"
      ], 
      price: "Günstige Direktversicherer-Preise", 
      bonus: "15€ Neukundenbonus + Sofortschutz", 
      logo: "🛡️",
      category: "versicherung",
      specialOffer: "TESTSIEGER 2024"
    },
    { name: "Postbank", rating: 4.4, features: ["Filialnetz", "Kostenloses Girokonto", "Mobile App"], price: "0€ Kontoführung", bonus: "50€ Startguthaben", logo: "📮", category: "bank" },
    { name: "Deutsche Bank", rating: 4.3, features: ["Premium Service", "Internationale Präsenz", "Anlageberatung"], price: "ab 6,90€/Monat", bonus: "Willkommenspaket", logo: "🏦", category: "bank" },
    { name: "TradeRepublic", rating: 4.7, features: ["Provisionsfreier Handel", "Intuitive App", "ETF-Sparpläne"], price: "Niedrige Ordergebühren", bonus: "2,2% für Guthaben", logo: "📱", category: "broker" },
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
      bonus: "Demo-Konto", 
      logo: "📊",
      category: "broker"
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
        "25 Jahre Erfahrung in der Kreditvermittlung"
      ], 
      price: "ab 10,99% eff. Zins p.a.", 
      bonus: "Schnelle Auszahlung", 
      logo: "💳",
      category: "kredit"
    },
  ],
}

export default function Banking() {
  const getBadgeColor = (category) => {
    switch(category) {
      case "versicherung": return "bg-blue-500"
      case "bank": return "bg-green-500"
      case "broker": return "bg-purple-500"
      case "kredit": return "bg-orange-500"
      case "vergleich": return "bg-yellow-500"
      default: return "bg-gray-500"
    }
  }

  const getCategoryText = (category) => {
    switch(category) {
      case "versicherung": return "Versicherung"
      case "bank": return "Banking"
      case "broker": return "Trading"
      case "kredit": return "Kredit"
      case "vergleich": return "Vergleich"
      default: return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Banking & Finanzdienstleistungen
          </h1>
          <p className="text-xl text-center mb-8 opacity-90">
            Vergleichen Sie die besten Banken, Broker und Finanzdienstleister Deutschlands
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Kostenlos</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Service</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">Testsieger</div>
              <div className="text-sm">Qualität</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {providerData.banking.map((provider, index) => (
            <Card key={provider.name} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 flex flex-col relative overflow-hidden group">
              {/* Top Badges */}
              <div className="absolute top-0 left-0 right-0 z-10">
                {index === 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs animate-pulse">
                    <Award className="w-3 h-3 mr-1" />
                    Top Empfehlung
                  </Badge>
                )}
                {provider.specialOffer && (
                  <Badge className="absolute -top-2 -left-2 bg-red-500 text-xs">
                    {provider.specialOffer}
                  </Badge>
                )}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${getBadgeColor(provider.category)} text-white text-xs`}>
                  {getCategoryText(provider.category)}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4 pt-8">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {provider.logo}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{provider.name}</CardTitle>
                
                {/* Rating */}
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                </div>

                {/* Trust Indicators */}
                {provider.name === "DA-Direkt Versicherungen" && (
                  <div className="flex justify-center space-x-2 mt-2">
                    <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                      <Shield className="w-3 h-3 mr-1" />
                      Zurich Group
                    </Badge>
                    <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                      <Clock className="w-3 h-3 mr-1" />
                      100+ Jahre
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex flex-col flex-1 space-y-4">
                {/* Price Section */}
                <div className="text-center border-b pb-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                  <p className="text-xl font-bold text-green-600 mb-2">{provider.price}</p>
                  <Badge variant="outline" className="border-green-200 text-green-700 text-sm">
                    {provider.bonus}
                  </Badge>
                  
                  {provider.name === "DA-Direkt Versicherungen" && (
                    <div className="mt-2 text-xs text-blue-600 font-medium">
                      Sofortschutz ohne Wartezeit verfügbar
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 flex-1">
                  {provider.features.slice(0, 6).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {provider.features.length > 6 && (
                    <li className="text-xs text-gray-500 font-medium">
                      +{provider.features.length - 6} weitere Vorteile
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto space-y-2">
                  <Link href={
                    provider.name === "DA-Direkt Versicherungen" ? "https://www.da-direkt.de/" :
                    provider.name === "Credimaxx" ? "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D" :
                    provider.name === "Tarifcheck.de" ? "https://www.tarifcheck.de/girokonto/" :
                    provider.name === "XTB" ? "https://link-pso.xtb.com/pso/lMDhc" : "#"
                  } target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full text-white transform hover:scale-105 transition-all ${
                      provider.name === "DA-Direkt Versicherungen" ? 'bg-blue-600 hover:bg-blue-700' :
                      'bg-green-600 hover:bg-green-700'
                    }`}>
                      {provider.category === "versicherung" ? "Zum Versicherer" : 
                       provider.category === "vergleich" ? "Jetzt Vergleichen" :
                       "Zum Anbieter"}
                      {provider.name === "DA-Direkt Versicherungen" && (
                        <Shield className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </Link>
                  
                  {/* Disclaimer */}
                  {(provider.name === "Credimaxx" || provider.name === "DA-Direkt Versicherungen") && (
                    <p className="text-xs text-gray-500 text-center">
                      *Wir erhalten eine Provision für Käufe über diesen Link
                    </p>
                  )}

                  {/* Special Info for DA-Direkt */}
                  {provider.name === "DA-Direkt Versicherungen" && (
                    <div className="text-xs text-center space-y-1">
                      <div className="text-blue-600 font-medium">
                        ✓ Beliebtester Kfz-Direktversicherer (€uro-Magazin)
                      </div>
                      <div className="text-green-600 font-medium">
                        ✓ Stiftung Warentest Testsieger
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Warum SmartFinanz für Ihre Finanzentscheidungen?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Vertrauenswürdig</h3>
              <p className="text-sm text-gray-600">Alle Partner sind sorgfältig ausgewählt und reguliert</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Ausgezeichnet</h3>
              <p className="text-sm text-gray-600">Testsieger und mehrfach prämierte Anbieter</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Schnell</h3>
              <p className="text-sm text-gray-600">Sofortiger Online-Abschluss in wenigen Minuten</p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Warning */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-4 mb-6">
        <div className="text-xs sm:text-sm text-gray-700">
          <p className="font-medium mb-2">Risikohinweise:</p>
          <p className="mb-2">
            CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu verlieren. 
            72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter. 
            Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.
          </p>
          <p>
            Versicherungen: Bitte prüfen Sie die jeweiligen Versicherungsbedingungen sorgfältig. 
            Die Darstellung stellt keine Anlage- oder Versicherungsberatung dar.
          </p>
        </div>
      </div>

      <Link href="/" className="mt-6 inline-block text-green-600 hover:underline p-4 font-medium">
        ← Zurück zur Startseite
      </Link>

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <PiggyBank className="h-5 w-5 sm:h-6 w-6 text-green-500" />
                <h5 className="text-lg sm:text-xl font-bold">SmartFinanz</h5>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland. 
                Wir arbeiten nur mit regulierten und ausgezeichneten Anbietern zusammen.
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
            <p className="mt-2 text-xs">
              Alle Angaben ohne Gewähr. Bitte prüfen Sie die aktuellen Konditionen direkt beim jeweiligen Anbieter.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
