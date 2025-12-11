import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 text-white flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Logo and text */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center font-bold text-primary">
                  A
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Adimized</h1>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-balance">
            Werden Sie melden Ihre Kunden durch Mundpropaganda auf Sie aufmerksam!
          </h2>

          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-md">
            Damit haben Sie die Geheimnis hinter-nachhaltisches Marketing wissen richtig bringt.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Kostenlos Starten
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Demo buchen
            </Button>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center">
              <div className="text-6xl">👤</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
