import { Card } from "@/components/ui/card"

export function BenefitsSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Gezielte Reichweite",
      description: "Erreichen Sie Ihre ideale Zielgruppe mit präzisionierter Mundpropaganda-Strategie.",
    },
    {
      icon: "👍",
      title: "Unverfälschte positive Sinn",
      description: "Echte Kundenbewertungen und Empfehlungen bauen authentische Vertrauen auf.",
    },
    {
      title: "Skalierbare Verträge",
      description: "Wachsen Sie Ihr Geschäft durch systematisierte Kundennetzwerk-Aktivierung.",
      icon: "📈",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Dies ist bei Mundpropaganda anders.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl mb-4">
                {benefit.icon}
              </div>
              <Card className="w-full bg-white border-0 p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
