"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Shield, Check, Star, TrendingUp, Heart, Zap, Car, PiggyBank, Menu, X, Calculator, CreditCard, Banknote } from "lucide-react"
import { useState } from "react"

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
  banking: [
    { name: "Postbank", rating: 4.4, features: ["Filialnetz", "Kostenloses Girokonto", "Mobile App"], price: "0€ Kontoführung", bonus: "50€ Startguthaben", logo: "📮" },
    { name: "Deutsche Bank", rating: 4.3, features: ["Premium Service", "Internationale Präsenz", "Anlageberatung"], price: "ab 6,90€/Monat", bonus: "Willkommenspaket", logo: "🏦" },
    { name: "TradeRepublic", rating: 4.7, features: ["Provisionsfreier Handel", "Intuitive App", "ETF-Sparpläne"], price: "0€ Ordergebühren", bonus: "Gratisaktie", logo: "📱" },
    { name: "XTB", rating: 4.5, features: ["CFD Trading", "Forex", "Professionelle Tools"], price: "0€ Kommission", bonus: "Demo-Konto", logo: "📊" },
    { name: "Credimax", rating: 4.2, features: ["Schnelle Kredite", "Online-Beantragung", "Flexible Rückzahlung"], price: "ab 2,99% p.a.", bonus: "Zinsrabatt", logo: "💳" },
  ],
  tierversicherungen: [
    { name: "PetProtect", rating: 4.9, features: ["Vollschutz", "Ohne Wartezeit", "Freie Tierarztwahl"], price: "ab 8€/Monat", bonus: "1. Monat gratis", logo: "🐕" },
    { name: "FigoPet", rating: 4.6, features: ["Moderne Plattform", "Schnelle Erstattung", "Präventionsschutz"], price: "ab 12€/Monat", bonus: "Willkommensgeschenk", logo: "🐱" },
  ],
  krypto: [
    { name: "Kraken", rating: 4.6, features: ["Hohe Sicherheit", "Niedrige Gebühren", "Viele Kryptowährungen"], price: "0,16% Maker Fee", bonus: "Staking Rewards", logo: "🐙" },
    { name: "Bybit", rating: 4.4, features: ["Derivatives Trading", "High Leverage", "Advanced Tools"], price: "0,1% Taker Fee", bonus: "Trading Bonus", logo: "⚡" },
    { name: "eToro", rating: 4.3, features: ["Social Trading", "Copy Trading", "Benutzerfreundlich"], price: "1% Spread", bonus: "Demo Portfolio", logo: "🌐" },
  ]
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")
  const [selectedProduct, setSelectedProduct] = useState("")

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById('comparison-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            <button
              onClick={() => scrollToSection('versicherungen')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Versicherungen
            </button>
            <button
              onClick={() => scrollToSection('banking')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Banking
            </button>
            <button
              onClick={() => scrollToSection('tierversicherungen')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Tierversicherung
            </button>
            <button
              onClick={() => scrollToSection('krypto')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Krypto
            </button>
            <a href="#ratgeber" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Ratgeber</a>
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => {scrollToSection('versicherungen'); setMobileMenuOpen(false)}}
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Versicherungen
              </button>
              <button
                onClick={() => {scrollToSection('banking'); setMobileMenuOpen(false)}}
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Banking
              </button>
              <button
                onClick={() => {scrollToSection('tierversicherungen'); setMobileMenuOpen(false)}}
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Tierversicherung
              </button>
              <button
                onClick={() => {scrollToSection('krypto'); setMobileMenuOpen(false)}}
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
              >
                Krypto
              </button>
              <a href="#ratgeber" className="block text-gray-600 hover:text-green-600 transition-colors">Ratgeber</a>
              <Button className="w-full bg-green-600 hover:bg-green-700">Vergleich starten</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - NerdWallet Style */}
      <section className="bg-green-600 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Finanzentscheidungen leicht gemacht? Lassen Sie uns das für Sie erledigen.
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Beantworten Sie ein paar Fragen. Erhalten Sie personalisierte Empfehlungen.
            </p>

            {/* Interactive Widget */}
            <div className="bg-white rounded-lg p-4 sm:p-8 text-gray-900 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                Nach welchem Produkt oder Service suchen Sie?
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <Button
                  variant={selectedProduct === "versicherung" ? "default" : "outline"}
                  className="h-12 sm:h-16 text-left justify-start sm:justify-center"
                  onClick={() => {setSelectedProduct("versicherung"); scrollToSection('versicherungen')}}
                >
                  <Shield className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  VERSICHERUNG
                </Button>
                <Button
                  variant={selectedProduct === "banking" ? "default" : "outline"}
                  className="h-12 sm:h-16 text-left justify-start sm:justify-center"
                  onClick={() => {setSelectedProduct("banking"); scrollToSection('banking')}}
                >
                  <PiggyBank className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  BANKING
                </Button>
                <Button
                  variant={selectedProduct === "tierversicherung" ? "default" : "outline"}
                  className="h-12 sm:h-16 text-left justify-start sm:justify-center"
                  onClick={() => {setSelectedProduct("tierversicherung"); scrollToSection('tierversicherungen')}}
                >
                  <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  TIERVERSICHERUNG
                </Button>
                <Button
                  variant={selectedProduct === "krypto" ? "default" : "outline"}
                  className="h-12 sm:h-16 text-left justify-start sm:justify-center"
                  onClick={() => {setSelectedProduct("krypto"); scrollToSection('krypto')}}
                >
                  <TrendingUp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  KRYPTO TRADING
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {[
              { key: 'versicherungen', label: 'VERSICHERUNGEN', icon: Shield },
              { key: 'banking', label: 'BANKING', icon: PiggyBank },
              { key: 'tierversicherungen', label: 'TIERVERSICHERUNG', icon: Heart },
              { key: 'krypto', label: 'KRYPTO', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-colors flex items-center text-xs sm:text-sm ${
                  activeCategory === key
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Headline */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Unsere Experten haben 500+ Finanzprodukte recherchiert, damit Sie es nicht tun müssen.</h3>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            BESTE EMPFEHLUNGEN ANSEHEN
          </Button>
        </div>
      </section>

      {/* Trust Badges */}
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

      {/* Search Section */}
      <section className="py-8 sm:py-12 bg-white" id="search-section">
        <div className="container mx-auto px-4">
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Finden Sie das perfekte Angebot</h3>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 sm:h-5 w-5 text-gray-400" />
              <Input
                placeholder="Suchen Sie nach Versicherungen, Konten, oder Anbietern..."
                className="pl-10 py-2 sm:py-3 text-sm sm:text-lg border-2 border-gray-200 focus:border-green-500 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
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
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {providers.map((provider, index) => (
                    <Card key={provider.name} className="relative hover:shadow-xl transition-shadow bg-white border-2 hover:border-green-200">
                      {index === 0 && (
                        <Badge className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-yellow-500 hover:bg-yellow-600 z-10 text-xs sm:text-sm">
                          Top Empfehlung
                        </Badge>
                      )}
                      <CardHeader className="text-center pb-2 sm:pb-4">
                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{provider.logo}</div>
                        <CardTitle className="text-lg sm:text-xl font-bold">{provider.name}</CardTitle>
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
                      <CardContent className="space-y-2 sm:space-y-4">
                        <div className="text-center border-b pb-2 sm:pb-4">
                          <p className="text-xl sm:text-2xl font-bold text-green-600">{provider.price}</p>
                          <Badge variant="outline" className="mt-1 sm:mt-2 border-green-200 text-green-700 text-xs sm:text-sm">{provider.bonus}</Badge>
                        </div>
                        <ul className="space-y-1 sm:space-y-2">
                          {provider.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-xs sm:text-sm">
                              <Check className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 w-4 text-green-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 font-medium text-sm sm:text-base"
                          onClick={() => window.open('/anbieter', '_blank')}
                        >
                          Zum Anbieter
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Advisor Section */}
      <section className="py-12 sm:py-16 bg-white" id="ratgeber">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Ratgeber & Tipps</h3>
          <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Heart className="h-6 w-6 sm:h-8 w-8 text-red-500" />
                  <CardTitle>Tierversicherung Guide</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 sm:mb-4">
                  Schritt-für-Schritt Anleitung: So finden Sie die perfekte Tierversicherung für Ihren vierbeinigen Freund.
                </p>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50 text-sm sm:text-base">
                  Guide lesen
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <PiggyBank className="h-6 w-6 sm:h-8 w-8 text-blue-500" />
                  <CardTitle>Konto eröffnen in 3 Schritten</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 sm:mb-4">
                  Einfach erklärt: Wie Sie schnell und sicher ein neues Bankkonto online eröffnen.
                </p>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50 text-sm sm:text-base">
                  Anleitung ansehen
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <TrendingUp className="h-6 w-6 sm:h-8 w-8 text-green-500" />
                  <CardTitle>Krypto Trading Deutschland</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 sm:mb-4">
                  Was Sie über Kryptowährungen wissen müssen: Rechtslage, Steuern und beste Plattformen.
                </p>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50 text-sm sm:text-base">
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                <li><button onClick={() => scrollToSection('versicherungen')} className="hover:text-white transition-colors">Versicherungen</button></li>
                <li><button onClick={() => scrollToSection('banking')} className="hover:text-white transition-colors">Banking</button></li>
                <li><button onClick={() => scrollToSection('tierversicherungen')} className="hover:text-white transition-colors">Tierversicherung</button></li>
                <li><button onClick={() => scrollToSection('krypto')} className="hover:text-white transition-colors">Krypto Trading</button></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Unternehmen</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerprogramme</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Rechtliches</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie-Richtlinie</a></li>
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
