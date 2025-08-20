"use client"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Impressum</h1>

        <div className="space-y-4 text-gray-700">
          <p>Angaben gemäß § 5 TMG</p>

          <p>
            <strong>Smart-Finanz</strong><br />
            Dennis Moskal<br />
            Westpreußenstraße 26<br />
            53119 Bonn<br />
            Deutschland
          </p>

          <p>
            <strong>Kontakt:</strong><br />
            Telefon: [Telefonnummer einfügen]<br />
            E-Mail: dennismoskal@yahoo.com
          </p>

          <p>
            <strong>Vertreten durch:</strong><br />
            Dennis Moskal
          </p>

          <p>
            <strong>Umsatzsteuer-ID:</strong><br />
            61 479 320 456<br />
            (gemäß § 27a Umsatzsteuergesetz)
          </p>

          <h2 className="text-xl font-semibold mt-8">Haftungsausschluss</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für Inhalte externer Links. 
            Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>

          <h2 className="text-xl font-semibold mt-8">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem 
            deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. 
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
            des jeweiligen Autors bzw. Erstellers.
          </p>

          <h2 className="text-xl font-semibold mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Dennis Moskal<br />
            Westpreußenstraße 26<br />
            53119 Bonn
          </p>
        </div>
      </div>
    </div>
  )
}
