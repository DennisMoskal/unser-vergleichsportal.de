"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Shield, Check, Star, TrendingUp, Heart, Zap, PiggyBank, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Import provider data from subpages
import { providerData as versicherungenData } from "@/app/versicherungen/page"
import { providerData as bankingData } from "@/app/banking/page"
import { providerData as tierversicherungenData } from "@/app/tierversicherungen/page"
import { providerData as kryptoData } from "@/app/krypto/page"

// Combine provider data into a single object
const providerData = {
  versicherungen: versicherungenData,
  banking: bankingData,
  tierversicherungen: tierversicherungenData,
  krypto: kryptoData,
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")
  const [selectedProduct, setSelectedProduct] = useState("")

  // Funktion zum Scrollen zu einem Abschnitt
  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Hash-Änderung verarbeiten, wenn die Seite geladen wird
  useEffect(() => {
    const hash = window.location.hash.substring(1) // Entferne das '#' aus dem Hash
    if (hash && ["versicherungen", "banking", "tierversicherungen", "krypto"].includes(hash)) {
      scrollToSection(hash)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
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
            <Link href="/krypto" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Krypto
            </Link>
            <Link href="#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block bg-green-600 hover:bg-green-700">Vergleich starten</Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menü */}
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
                href="/krypto"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Krypto
              </Link>
              <Link
                href="#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700">Vergleich starten</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero-Bereich */}
      <section className="bg-green-600 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
              Finanzentscheidungen leicht gemacht? Lassen Sie uns das für Sie erledigen.
            </h2>
            <p className="text-sm sm:text-base text-green-100 mb-4 sm:mb-6 max-w-xl mx-auto">
              Beantworten Sie ein paar Fragen. Erhalten Sie personalisierte Empfehlungen.
            </p>

            {/* Interaktives Widget */}
            <div className="bg-white rounded-lg p-4 sm:p-6 text-gray-900 max-w-md sm:max-w-xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                Nach welchem Produkt oder Service suchen Sie?
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button
                  variant={selectedProduct === "versicherung" ? "default" : "outline"}
                  className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base"
                  onClick={() => { setSelectedProduct("versicherung"); window.location.href = "/versicherungen"; }}
                >
                  <Shield className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                  Versicherung
                </Button>
                <Button
                  variant={selectedProduct === "banking" ? "default" : "outline"}
                  className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base"
                  onClick={() => { setSelectedProduct("banking"); window.location.href = "/banking"; }}
                >
                  <PiggyBank className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                  Banking
                </Button>
                <Button
                  variant={selectedProduct === "tierversicherung" ? "default" : "outline"}
                  className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base"
                  onClick={() => { setSelectedProduct("tierversicherung"); window.location.href = "/tierversicherungen"; }}
                >
                  <Heart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                  Tierversicherung
                </Button>
                <Button
                  variant={selectedProduct === "krypto" ? "default" : "outline"}
                  className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base"
                  onClick={() => { setSelectedProduct("krypto"); window.location.href = "/krypto"; }}
                >
                  <TrendingUp className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                  Krypto Trading
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorie-Navigation */}
      <section className="bg-gray-50 py-4 border-b" id="versicherungen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {[
              { key: 'versicherungen', label: 'VERSICHERUNGEN', icon: Shield },
              { key: 'banking', label: 'BANKING', icon: PiggyBank },
              { key: 'tierversicherungen', label: 'TIERVERSICHERUNG', icon: Heart },
              { key: 'krypto', label: 'KRYPTO', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <Link
                key={key}
                href={`/${key}`}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-colors flex items-center text-xs sm:text-sm ${
                  activeCategory === key
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hauptüberschrift */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Unsere Experten haben 500+ Finanzprodukte recherchiert, damit Sie es nicht tun müssen.</h3>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Beste Empfehlungen ansehen
          </Button>
        </div>
      </section>

      {/* Vertrauensabzeichen */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
              <Check className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" />
              Geprüft & Sicher
            </Badge>
            <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
              <Shield className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" />
              TÜV Zertifiziert
            </Badge>
            <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
              <Star className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" />
              Top Empfohlen
            </Badge>
            <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
              <Zap className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" />
              Blitzschnell
            </Badge>
          </div>
        </div>
      </section>

      {/* Suchbereich */}
      <section className="py-8 sm:py-12 bg-white" id="search-section">
        <div className="container mx-auto px-4">
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Finden Sie das perfekte Angebot</h3>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 sm:h-5 w-5 text-gray-400" />
              <Input
                placeholder="Suchen Sie nach Versicherungen, Konten, oder Anbietern..."
                className="pl-10 py-2 sm:py-3 text-sm sm:text-lg border-2 border-gray-200 focus:border-green-500 w-full"
                onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vergleichstabellen */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50" id="comparison-section">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Anbieter im Vergleich</h3>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-8 h-10 sm:h-12">
              <TabsTrigger value="versicherungen" className="flex items-center text-xs sm:text-sm">
                <Shield className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4" />
                Versicherungen
              </TabsTrigger>
              <TabsTrigger value="banking" className="flex items-center text-xs sm:text-sm">
                <PiggyBank className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4" />
                Banking
              </TabsTrigger>
              <TabsTrigger value="tierversicherungen" className="flex items-center text-xs sm:text-sm">
                <Heart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4" />
                Tierversicherung
              </TabsTrigger>
              <TabsTrigger value="krypto" className="flex items-center text-xs sm:text-sm">
                <TrendingUp className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4" />
                Krypto
              </TabsTrigger>
            </TabsList>

            {Object.entries(providerData).map(([category, providers]) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {providers.map((provider, index) => (
                    <Card key={provider.name} className="relative hover:shadow-xl transition-shadow bg-white border-2 hover:border-green-200 h-full flex flex-col overflow-hidden">
                      {index === 0 && (
                        <Badge className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-yellow-500 hover:bg-yellow-600 z-10 text-xs sm:text-sm">
                          Top Empfehlung
                        </Badge>
                      )}
                      <CardHeader className="text-center pb-2 sm:pb-4 flex-shrink-0">
                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{provider.logo}</div>
                        <CardTitle className="text-lg sm:text-xl font-bold break-words">{provider.name}</CardTitle>
                        <div className="flex items-center justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 sm:h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
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
                          <div className="max-h-48 overflow-y-auto mb-4 pr-2" style={{scrollbarWidth: 'thin'}}>
                            <ul className="space-y-1.5">
                              {provider.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-xs sm:text-sm leading-tight">
                                  <Check className="mr-2 h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="break-words overflow-wrap-anywhere">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 font-medium text-sm sm:text-base mt-auto flex-shrink-0"
                          onClick={() => {
                            if (provider.url) {
                              window.open(provider.url, provider.url.startsWith('http') ? '_blank' : '_self')
                            } else if (provider.name === "eRecht24") {
                              window.open("https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default", "_blank")
                            } else if (provider.name === "Tarifcheck") {
                              window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")
                            } else {
                              window.open("/anbieter", "_blank")
                            }
                          }}
                        >
                          Zum Anbieter
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {category === 'krypto' && (
                  <div className="mt-6 text-center text-xs sm:text-sm text-gray-600">
                    <p>
                      CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu verlieren. 
                      71% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter. 
                      Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Kundenbewertungen */}
      <section className="py-12 sm:py-16 bg-gray-50" id="kundenbewertungen">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Das sagen unsere Kunden über SmartFinanz</h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/kundenbewertungen/anna.jpg"
                    alt="Anna, Kundin von SmartFinanz"
                    width={80}
                    height={80}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-green-100 flex-shrink-0"
                    priority
                  />
                  <div className="flex-grow min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Anna, 30</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  "Dank SmartFinanz habe ich eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell."
                </p>
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                  onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                >
                  Jetzt vergleichen
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/kundenbewertungen/markus.jpg"
                    alt="Markus, Kunde von SmartFinanz"
                    width={80}
                    height={80}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-green-100 flex-shrink-0"
                    priority
                  />
                  <div className="flex-grow min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Markus, 42</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 sm:h-5 sm:w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  "SmartFinanz hat uns die perfekte Tierversicherung für unseren Hund empfohlen. Jetzt fühlen wir uns sicher, dass Max bestens versorgt ist!"
                </p>
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                  onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                >
                  Jetzt vergleichen
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/kundenbewertungen/helga.jpg"
                    alt="Helga, Kundin von SmartFinanz"
                    width={80}
                    height={80}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-green-100 flex-shrink-0"
                    priority
                  />
                  <div className="flex-grow min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Helga, 60</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  "Ich war skeptisch, aber SmartFinanz hat mir eine sichere Banklösung gezeigt. Der Prozess war klar, und ich habe 50€ Bonus erhalten!"
                </p>
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                  onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                >
                  Jetzt vergleichen
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/kundenbewertungen/lukas.jpg"
                    alt="Lukas, Kunde von SmartFinanz"
                    width={80}
                    height={80}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-green-100 flex-shrink-0"
                    priority
                  />
                  <div className="flex-grow min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Lukas, 29</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  "Mit SmartFinanz habe ich die beste Krypto-Plattform gefunden. Die Empfehlungen waren punktgenau, und ich spare jetzt Gebühren!"
                </p>
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                  onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                >
                  Jetzt vergleichen
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Schema.org Markup für SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Organization",
                "name": "SmartFinanz"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Anna" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Dank SmartFinanz habe ich eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell."
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Markus" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "4" },
                  "reviewBody": "SmartFinanz hat uns die perfekte Tierversicherung für unseren Hund empfohlen. Jetzt fühlen wir uns sicher, dass Max bestens versorgt ist!"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Helga" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Ich war skeptisch, aber SmartFinanz hat mir eine sichere Banklösung gezeigt. Der Prozess war klar, und ich habe 50€ Bonus erhalten!"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Lukas" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Mit SmartFinanz habe ich die beste Krypto-Plattform gefunden. Die Empfehlungen waren punktgenau, und ich spare jetzt Gebühren!"
                }
              ]
            })}
          </script>
        </div>
      </section>

      {/* Statistik-Bereich */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">500+</h4>
              <p className="text-green-100 text-sm sm:text-base">Anbieter verglichen</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">100.000+</h4>
              <p className="text-green-100 text-sm sm:text-base">Zufriedene Kunden</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">€2.5M</h4>
              <p className="text-green-100 text-sm sm:text-base">Gespart insgesamt</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">4.8★</h4>
              <p className="text-green-100 text-sm sm:text-base">Durchschnittsbewertung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-green-400" />
                <h4 className="text-xl font-bold">SmartFinanz</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Produkte</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/versicherungen" className="hover:text-white transition-colors text-left">
                    Versicherungen
                  </Link>
                </li>
                <li>
                  <Link href="/banking" className="hover:text-white transition-colors text-left">
                    Banking
                  </Link>
                </li>
                <li>
                  <Link href="/tierversicherungen" className="hover:text-white transition-colors text-left">
                    Tierversicherung
                  </Link>
                </li>
                <li>
                  <Link href="/krypto" className="hover:text-white transition-colors text-left">
                    Krypto Trading
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Unternehmen</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link href="/partnerprogramme" className="hover:text-white transition-colors">Partnerprogramme</Link></li>
                <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Rechtliches</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 SmartFinanz. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
