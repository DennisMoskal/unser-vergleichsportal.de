import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check } from "lucide-react"
import Link from "next/link"

const providerData = {
  banking: [
    { name: "Postbank", rating: 4.4, features: ["Filialnetz", "Kostenloses Girokonto", "Mobile App"], price: "0€ Kontoführung", bonus: "50€ Startguthaben", logo: "📮" },
    { name: "Deutsche Bank", rating: 4.3, features: ["Premium Service", "Internationale Präsenz", "Anlageberatung"], price: "ab 6,90€/Monat", bonus: "Willkommenspaket", logo: "🏦" },
    { name: "TradeRepublic", rating: 4.7, features: ["Provisionsfreier Handel", "Intuitive App", "ETF-Sparpläne"], price: "Niedrige Ordergebühren", bonus: "2,2% für Guthaben", logo: "📱" },
    { name: "XTB", rating: 4.5, features: ["CFD Trading", "Forex", "Professionelle Tools"], price: "0€ Kommission", bonus: "Demo-Konto", logo: "📊" },
    { name: "Credimax", rating: 4.2, features: ["Schnelle Kredite", "Online-Beantragung", "Flexible Rückzahlung"], price: "ab 2,99% p.a.", bonus: "Zinsrabatt", logo: "💳" },
  ],
}

export default function Banking() {
  return (
    <div className="min-h-screen p-4 bg-white">
      <h1 className="text-3xl font-bold mb-6">Banking</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {providerData.banking.map((provider, index) => (
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
      <Link href="/" className="mt-6 inline-block text-green-600 hover:underline">
        Zurück zur Startseite
      </Link>
    </div>
  )
}
