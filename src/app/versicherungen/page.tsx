import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/Footer"

const providerData = {
  versicherungen: [
    { name: "GVV", rating: 4.8, features: ["24/7 Support", "Online-Abschluss", "Sofortschutz"], price: "ab 12€/Monat", bonus: "3 Monate kostenlos", logo: "🛡️" },
    { name: "DA-Direkt", rating: 4.6, features: ["Telefonberatung", "Schnelle Abwicklung", "Flexible Tarife"], price: "ab 15€/Monat", bonus: "Willkommensbonus", logo: "🚗" },
    { name: "Münchener Verein", rating: 4.7, features: ["Traditionsunternehmen", "Persönliche Beratung", "Umfassender Schutz"], price: "ab 18€/Monat", bonus: "Familienrabatt", logo: "🏛️" },
    { name: "Maxcare", rating: 4.5, features: ["Digitale Services", "Günstige Prämien", "Schnelle Regulierung"], price: "ab 14€/Monat", bonus: "Online-Rabatt", logo: "💊" },
    { name: "Tarifcheck", rating: 4.4, features: ["Vergleichsportal", "Viele Anbieter", "Transparente Preise"], price: "ab 10€/Monat", bonus: "Cashback", logo: "💰" },
    { name: "eRecht24", rating: 4.3, features: ["Rechtssicherheit", "DSGVO-konform", "Beratung inklusive"], price: "ab 20€/Monat", bonus: "Gratis Rechtscheck", logo: "⚖️" },
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
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Zum Anbieter</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/" className="mt-6 inline-block text-green-600 hover:underline p-4">
        Zurück zur Startseite
      </Link>
      <Footer />
    </div>
  )
}
