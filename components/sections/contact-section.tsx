import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kontaktieren Sie uns bei Fragen über unser Kontaktformular.
          </h2>
        </div>

        <Card className="bg-white text-foreground border-0 p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Ihr Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">E-Mail Adresse *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Nachricht *</label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-3">
              Senden
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
