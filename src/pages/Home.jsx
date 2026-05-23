import AboutPreviewSection from '../components/home/AboutPreviewSection'
import CertificatesSection from '../components/home/CertificatesSection'
import ContactSection from '../components/home/ContactSection'
import HeroSection from '../components/home/HeroSection'
import SkillsSection from '../components/home/SkillsSection'

function Home() {
  return (
    <div className="space-y-14 py-10 md:space-y-18 md:py-14">
      <HeroSection />
      <AboutPreviewSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  )
}

export default Home
