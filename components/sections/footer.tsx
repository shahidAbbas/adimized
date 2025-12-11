export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-foreground">
                A
              </div>
              <h3 className="font-bold text-lg">Adimized</h3>
            </div>
            <p className="text-sm text-background/80">Word-of-Mouth Marketing für B2B-Unternehmen</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Preise
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-sm text-background/80 text-center">© 2025 Adimized. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
