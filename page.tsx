import { Hero } from "@/components/sections/hero"
import { ChallengeSection } from "@/components/sections/challenge-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { LinkedInSection } from "@/components/sections/linkedin-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProcessSection } from "@/components/sections/process-section"
import { SchedulingSection } from "@/components/sections/scheduling-section"
import { CaseStudySection } from "@/components/sections/case-study-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ChallengeSection />
      <BenefitsSection />
      <LinkedInSection />
      <TestimonialsSection />
      <ProcessSection />
      <SchedulingSection />
      <CaseStudySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
