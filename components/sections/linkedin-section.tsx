export function LinkedInSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mundpropaganda digital gedacht: LinkedIn als Tool für B2B-Marketing
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="text-6xl">in</div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <div>
            <label className="text-sm font-semibold mb-2 block">Wo ist Netzwerk?</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block">Unternehmens-Link</label>
            <input
              type="text"
              placeholder="https://linkedin.com/company/..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block">Welcher genus LinkedIn?</label>
            <input
              type="text"
              placeholder="Beschreibung..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
