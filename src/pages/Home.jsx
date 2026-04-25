import CreativePreviewSection from '../components/home/CreativePreviewSection'
import FeaturedProjectSection from '../components/home/FeaturedProjectSection'
import FinalCtaSection from '../components/home/FinalCtaSection'
import HeroSection from '../components/home/HeroSection'
import SectionDivider from '../components/home/SectionDivider'
import SkillsSection from '../components/home/SkillsSection'
import SystemProjectsSection from '../components/home/SystemProjectsSection'
import TaglineSection from '../components/home/TaglineSection'
import WhyMeSection from '../components/home/WhyMeSection'

function Home() {
  return (
    <div className="space-y-10 py-8 md:space-y-14 md:py-12">
      <HeroSection />
      <SectionDivider />
      <TaglineSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <FeaturedProjectSection />
      <SectionDivider />
      <CreativePreviewSection />
      <SectionDivider />
      <SystemProjectsSection />
      <SectionDivider />
      <WhyMeSection />
      <SectionDivider />
      <FinalCtaSection />
    </div>
  )
}

export default Home
