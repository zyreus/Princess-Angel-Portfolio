import PortfolioCard from '../components/PortfolioCard'
import SectionTitle from '../components/SectionTitle'
import { creativeSections } from '../data/content'

function CreativePortfolio() {
  return (
    <section className="py-10 md:py-14">
      <SectionTitle
        eyebrow="Creative Portfolio"
        title="Visual Work and Storytelling"
        subtitle="Each section includes clean placeholders so you can quickly replace them with your real photos and videos."
      />
      <div className="grid gap-6">
        {creativeSections.map((section) => (
          <PortfolioCard
            key={section.title}
            title={section.title}
            description={section.description}
            skills={section.skills}
          />
        ))}
      </div>
    </section>
  )
}

export default CreativePortfolio
