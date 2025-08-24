import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Check, PiggyBank } from "lucide-react";
import Link from "next/link";

const providerData = {
  trading: [
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
      logo: "🏆" 
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
        "Ausgezeichneter Versicherungsschutz zu günstigen Preisen"
      ], 
      price: "Günstige Direktversicherer-Preise", 
      bonus: "15€ Neukundenbonus + Sofortschutz", 
      logo: "🛡️"
    },
    { name: "Postbank", rating: 4.4, features: ["Filialnetz", "Kostenloses Girokonto", "Mobile App"], price: "0€ Kontoführung", bonus: "50€ Startguthaben", logo: "📮" },
    { name: "Deutsche Bank", rating: 4.3, features: ["Premium Service", "Internationale Präsenz", "Anlageberatung"], price: "ab 6,90€/Monat", bonus: "Willkommenspaket", logo: "🏦" },
    { name: "TradeRepublic", rating: 4.7, features: ["Provisionsfreier Handel", "Intuitive App", "ETF-Sparpläne"], price: "Niedrige Ordergebühren", bonus: "2,2% für Guthaben", logo: "📱" },
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
      logo: "📊" 
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
      logo: "💳" 
    },
  ],
}

export default function Trading() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 p-4">Trading Anbieter</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {providerData.trading.map((provider, index) => (
          <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col">
            {index === 0 && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs">Top Empfehlung</Badge>
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

            <CardContent className="flex flex-col flex-1 space-y-2">
              <div className="text-center border-b pb-2">
                <p className="text-xl font-bold text-green-600">{provider.price}</p>
                <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
              </div>
              <ul className="space-y-1 flex-1">
                {provider.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href={
                  provider.name === "DA-Direkt Versicherungen" ? "https://www.da-direkt.de/" :
                  provider.name === "Credimaxx" ? "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D" :
                  provider.name === "Tarifcheck.de" ? "https://www.tarifcheck.de/girokonto/" :
                  provider.name === "XTB" ? "https://link-pso.xtb.com/pso/lMDhc" : "#"
                } target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Zum Anbieter*</Button>
                </Link>
              </div>
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
                <PiggyBank className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
            <p>&copy; 2025 SmartFinanz. Alle Rechte vorbehalten</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
