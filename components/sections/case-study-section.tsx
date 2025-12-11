export function CaseStudySection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Erfolgsgeschichte: LinkedIn-basierte Mundpropaganda</h2>
          <p className="text-muted-foreground text-lg">
            Wie ein B2B-Unternehmen 300% mehr Leads durch Kundennetzwerk-Aktivierung generierte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Die Situation</h3>
              <p className="text-muted-foreground">
                Traditionelle Akquisitionskanäle waren erschöpft und teuer geworden.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Unsere Lösung</h3>
              <p className="text-muted-foreground">
                Implementierung eines systematischen LinkedIn-basierten Mundpropaganda-Programms mit aktiver
                Kundeneinbindung.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Ergebnisse nach 6 Monaten</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent font-bold">✓</span> 300% mehr Leads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent font-bold">✓</span> 45% höhere Konversionsrate
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent font-bold">✓</span> 50% reduzierte Akquisitionskosten
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-muted-foreground">Visualisierung der Erfolgskennzahlen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
