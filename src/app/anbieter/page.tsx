"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Shield, Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AnbieterPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ExternalLink className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Weiterleitung zu Ihrem Anbieter</CardTitle>
              <p className="text-gray-600">
                Sie werden gleich zu dem von Ihnen gewählten Anbieter weitergeleitet.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  <Shield className="inline mr-2 h-5 w-5" />
                  Sicher & Vertrauenswürdig
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Alle Partner sind geprüft und zertifiziert
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Ihre Daten werden verschlüsselt übertragen
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Kostenloser Service von SmartFinanz
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Dies ist eine Platzhalterseite. In der finalen Version werden hier
                  echte Affiliate-Links zu den Anbietern eingefügt.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Zur Anbieter-Website
                </Button>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs text-gray-400 text-center">
                  SmartFinanz erhält eine Provision, wenn Sie über unseren Link abschließen.
                  Dies beeinflusst nicht unsere unabhängige Bewertung.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
