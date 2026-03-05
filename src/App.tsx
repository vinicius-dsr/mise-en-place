import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CasesSection } from '@/components/sections/CasesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { WhatsAppFloatButton } from '@/components/ui/WhatsAppFloatButton'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const SECTION_IDS = ['inicio', 'sobre', 'servicos', 'cases', 'depoimentos', 'contato'] as const

export type SectionId = (typeof SECTION_IDS)[number]

function App() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <div className="min-h-screen bg-brand-cream text-brand-green">
      <Navbar activeId={activeId} />
      <main>
        <HeroSection id="inicio" />
        <AboutSection id="sobre" />
        <ServicesSection id="servicos" />
        <CasesSection id="cases" />
        <TestimonialsSection id="depoimentos" />
        <ContactSection id="contato" />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  )
}

export default App

