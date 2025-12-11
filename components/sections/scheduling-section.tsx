export function SchedulingSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In einem persönlichen Gespräch zeigen wir Ihnen Möglichkeiten
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            wie LinkedIn Nutzer auf sich ziehen und ein Netzwerk aufbauen können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-accent/10 p-8 rounded-2xl">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold">Umfassende Beratung</p>
                  <p className="text-sm text-muted-foreground">Eine vollständige Analyse Ihrer aktuellen Situation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold">Maßgeschneiderte Strategie</p>
                  <p className="text-sm text-muted-foreground">Spezifisch auf Ihre Geschäftsziele abgestimmt</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold">Implementierungsplan</p>
                  <p className="text-sm text-muted-foreground">Schritt-für-Schritt Umsetzungsplanung</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Nächste Schritte</h3>
              <p className="text-muted-foreground">
                Egal, ob es um Analyse oder Implementierung geht - wir unterstützen Sie mit unserer Erfahrung.
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <input
                type="date"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Termin buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
