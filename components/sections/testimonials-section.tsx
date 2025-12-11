import { Card } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Durch die Mundpropaganda-Strategie ist Unsere Kundennetzwerk exponentiell gewachsen.",
      author: "CEO, Tech Startup",
    },
    {
      text: "Die authentischen Bewertungen haben unser Vertrauen im Markt gestärkt.",
      author: "Marketing Lead, Enterprise",
    },
    {
      text: "Unser Verkaufsprozess wurde durch Kundenempfehlungen verkürzt.",
      author: "VP Sales, B2B Unternehmen",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Positive Mund-zu-Mund Propaganda wird der Verkaufsprozess
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              <p className="text-white mb-4 leading-relaxed italic">"{testimonial.text}"</p>
              <p className="text-accent font-semibold">{testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
