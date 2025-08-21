import Link from "next/link"
import { Handshake } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-2 sm:mb-4">
              <Handshake className="h-5 w-5 sm:h-6 w-6 text-green-500" />
              <h5 className="text-lg sm:text-xl font-bold">SmartFinanz</h5>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-2 sm:mb-4">Produkte</h6>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#versicherungen" className="hover:text-white transition-colors">Versicherungen</a></li>
              <li><a href="#banking" className="hover:text-white transition-colors">Banking</a></li>
              <li><a href="#tierversicherungen" className="hover:text-white transition-colors">Tierversicherung</a></li>
              <li><a href="#krypto" className="hover:text-white transition-colors">Krypto Trading</a></li>
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
  )
}
