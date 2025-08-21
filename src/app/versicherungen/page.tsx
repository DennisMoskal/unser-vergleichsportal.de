import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Shield } from "lucide-react"
import Link from "next/link"

const providerData = {
  versicherungen: [
    { name: "GVV", rating: 4.8, features: ["24/7 Support", "Online-Abschluss", "Sofortschutz"], price: "ab 12€/Monat", bonus: "3 Monate kostenlos", logo: "🛡️" },
    { name: "DA-Direkt", rating: 4.6, features: ["Telefonberatung", "Schnelle Abwicklung", "Flexible Tarife"], price: "ab 15€/Monat", bonus: "Willkommensbonus", logo: "🚗" },
    { name: "Münchener Verein", rating: 4.7, features: ["Traditionsunternehmen", "Persönliche Beratung", "Umfassender Schutz"], price: "ab 18€/Monat", bonus: "Familienrabatt", logo: "🏛️" },
    { name: "Maxcare", rating: 4.5, features: ["Digitale Services", "Günstige Prämien", "Schnelle Regulierung"], price: "ab 14€/Monat", bonus: "Online-Rabatt", logo: "💊" },
    { name: "Tarifcheck", rating: 4.4, features: ["Vergleichsportal", "Viele Anbieter", "Transparente Preise"], price: "ab 10€/Monat", bonus: "Cashback", logo: "💰" },
    { name: "eRecht24", rating: 4.3, features: ["Rechtssicherheit", "DSGVO-konform", "Social Media", "Marketing", "Generator für AGB, Impressum", "Neu:KI"], price: "ab 15€/Monat", bonus: "Jährlich 50% sparen", logo: "⚖️" },
    { name: "BavariaDirekt", rating: 4.5, features: ["Regional stark", "Persönlicher Service", "Faire Preise"], price: "ab 16€/Monat", bonus: "Treuebonus", logo: "🍺" },
  ],
}

export default function Versicherungen() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 p-4">Versicherungen</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {providerData.versicherungen.map((provider, index) => (
          <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
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
            <CardContent className="space-y-2">
              <div className="text-center border-b pb-2">
                <p className="text-xl font-bold text-green-600">{provider.price}</p>
                <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
              </div>
              <ul className="space-y-1">
                {provider.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                onClick={() =>
                  provider.name === "eRecht24"
                    ? window.open("https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default", "_blank")
                    : window.open("/anbieter", "_blank")
                }
              >
                Zum Anbieter
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/" className="mt-6 inline-block text-green-600 hover:underline p-4">
        Zurück zur Startseite
      </Link>
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
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
    </div>
  )
}
