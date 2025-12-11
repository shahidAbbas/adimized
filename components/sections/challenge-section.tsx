import { Card } from "@/components/ui/card"

export function ChallengeSection() {
  const challenges = [
    {
      title: "Ihre Zielgruppe wird nicht ausreichend erreicht",
      description: "Traditionelle Werbung verliert an Wirksamkeit in der modernen digitalen Landschaft.",
    },
    {
      title: "Authentische Vertrauen aufzubauen ist schwierig",
      description: "Kunden vertrauen eher Empfehlungen von anderen als direkter Werbung.",
    },
    {
      title: "Verträge werden neben ollen auf automatisiert",
      description: "Langfristige Kundenbeziehungen erfordern kontinuierliche Engagement und Pflege.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihre Herausforderungen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Darum haben Sie das richtige Mundpropaganda auf Sie aufmerksam!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-primary text-white p-6 border-0 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">{challenge.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
