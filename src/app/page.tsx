import { useState } from 'react';
import { Link } from 'next/link'; // Annahme: Next.js wird verwendet
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Check, Shield, Star, Zap, PiggyBank, Heart, TrendingUp } from 'lucide-react';

// Beispiel-Daten für Anbieter
const providerData = {
  versicherungen: [
    { name: 'Anbieter A', logo: '🛡', rating: 4.8, price: '€19,99/Monat', bonus: '3 Monate gratis', features: ['Umfassender Schutz', 'Schnelle Abwicklung', '24/7 Support'] },
    { name: 'Anbieter B', logo: '🛡', rating: 4.5, price: '€24,99/Monat', bonus: '€50 Bonus', features: ['Flexible Tarife', 'Online-Verwaltung', 'Hohe Deckung'] },
  ],
  banking: [
    { name: 'Bank X', logo: '🏦', rating: 4.7, price: '€0,00/Monat', bonus: 'Kostenlos', features: ['Kostenloses Girokonto', 'Mobile Banking', 'Keine Gebühren'] },
    { name: 'Bank Y', logo: '🏦', rating: 4.4, price: '€4,99/Monat', bonus: '€100 Bonus', features: ['Zinsen auf Guthaben', 'Kreditkarte inkl.', 'Schnelle Überweisungen'] },
  ],
  tierversicherungen: [
    { name: 'PetCare', logo: '🐾', rating: 4.9, price: '€14,99/Monat', bonus: 'Erste Monat gratis', features: ['OP-Schutz', 'Tierarztkosten', '24/7 Hotline'] },
    { name: 'AnimalSafe', logo: '🐾', rating: 4.6, price: '€17,99/Monat', bonus: '€20 Bonus', features: ['Vollschutz', 'Flexible Zahlung', 'Schnelle Erstattung'] },
  ],
  krypto: [
    { name: 'CryptoPro', logo: '₿', rating: 4.8, price: '€9,99/Monat', bonus: '0 Gebühren', features: ['Sichere Wallet', 'Schnelle Trades', '24/7 Support'] },
    { name: 'CoinBase', logo: '₿', rating: 4.5, price: '€12,99/Monat', bonus: '€10 Bonus', features: ['Breite Auswahl', 'Einfache Nutzung', 'Hohe Sicherheit'] },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('versicherungen');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'search-section', label: 'Suche', icon: Search },
    { key: 'comparison-section', label: 'Vergleich', icon: Shield },
    { key: 'ratgeber', label: 'Ratgeber', icon: Heart },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <TrendingUp className="h-6 w-6 sm:h-8 w-8 text-green-600" />
            <span className="text-lg sm:text-xl font-bold">SmartFinanz</span>
          </div>
          <nav className="hidden sm:flex space-x-4 sm:space-x-8">
            {navItems.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-sm sm:text-base font-medium transition-colors ${
                  activeCategory === key ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Icon className="inline-block mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                {label}
              </button>
            ))}
          </nav>
          <Button className="bg-green-600 hover:bg-green-700 text-sm sm:text-base">
            Angebote finden
          </Button>
        </div>
        <div className="sm:hidden container mx-auto px-4 pb-4">
          <div className="flex justify-between space-x-2">
            {navItems.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-colors flex items-center text-xs sm:text-sm ${
                  activeCategory === key ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>
      {/* Hauptüberschrift */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Unsere Experten haben 500+ Finanzprodukte recherchiert, damit Sie es nicht tun müssen.
          </h3>
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
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
              Finden Sie das perfekte Angebot
            </h3>
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
      {/* Vergleichstabellen */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50" id="comparison-section">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Anbieter im Vergleich
          </h3>
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
                    <Card
                      key={provider.name}
                      className="relative hover:shadow-xl transition-shadow bg-white border-2 hover:border-green-200"
                    >
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
                              className={`h-3 w-3 sm:h-4 w-4 ${
                                i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-600">
                            {provider.rating}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 sm:space-y-4">
                        <div className="text-center border-b pb-2 sm:pb-4">
                          <p className="text-xl sm:text-2xl font-bold text-green-600">{provider.price}</p>
                          <Badge variant="outline" className="mt-1 sm:mt-2 border-green-200 text-green-700 text-xs sm:text-sm">
                            {provider.bonus}
                          </Badge>
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
      {/* Beratungsbereich */}
      <section className="py-12 sm:py-16 bg-white" id="ratgeber">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Ratgeber & Tipps
          </h3>
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
                <li>
                  <button onClick={() => scrollToSection('versicherungen')} className="hover:text-white transition-colors">
                    Versicherungen
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('banking')} className="hover:text-white transition-colors">
                    Banking
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tierversicherungen')} className="hover:text-white transition-colors">
                    Tierversicherung
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('krypto')} className="hover:text-white transition-colors">
                    Krypto Trading
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Unternehmen</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="/ueber-uns" className="hover:text-white transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/partnerprogramme" className="hover:text-white transition-colors">
                    Partnerprogramme
                  </Link>
                </li>
                <li>
                  <Link href="/karriere" className="hover:text-white transition-colors">
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Rechtliches</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="/datenschutz" className="hover:text-white transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="hover:text-white transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="hover:text-white transition-colors">
                    AGB
                  </Link>
                </li>
                <li>
                  <a
                    href="https://partner.e-recht24.de/go.cgi?pid=912&wmid=16&cpid=1&prid=1&subid=&target=eRecht24_Startseite"
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    eRecht24
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 SmartFinanz. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
