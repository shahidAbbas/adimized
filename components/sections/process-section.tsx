import { Card } from "@/components/ui/card"

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Analyse",
      description: "Wir schaffenest beste Kundennetzwerk-Struktur für Ihre Geschäft.",
    },
    {
      number: "2",
      title: "Strategie",
      description: "Wir entwickeln eine maßgeschneiderte Mundpropaganda-Kampagne für Ihre Zielgruppe.",
    },
    {
      number: "3",
      title: "Aktivierung",
      description: "Wir unterstützen die Aktivierung Ihrer Botschafter und Kundenverbindungen.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unterstützen Sie Ihren Vertriebsprozess durch digitale Mundpropaganda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">3-Schritte-Komplettlösung</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-primary text-white p-8 border-0 text-center">
                <div className="text-5xl font-bold mb-4 text-accent">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/90 leading-relaxed">{step.description}</p>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary transform -translate-y-1/2">
                  ➜
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
