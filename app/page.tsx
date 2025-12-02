import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MoneySection } from "@/components/money-section"
import { StepsSection } from "@/components/steps-section"
import { RequirementsSection } from "@/components/requirements-section"
import { DoubtSection } from "@/components/doubt-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <MoneySection />
      <StepsSection />
      <RequirementsSection />
      <DoubtSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
