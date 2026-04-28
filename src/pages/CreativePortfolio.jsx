import PortfolioCard from '../components/PortfolioCard'
import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/home/SectionDivider'
import { creativeSections } from '../data/content'
import { Link } from 'react-router-dom'

function CreativePortfolio() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 h-56 w-56 rounded-full bg-lilac-200/30 blur-3xl" />
      </div>
      <SectionTitle
        eyebrow="Creative Portfolio"
        title="Visual Work and Storytelling"
        subtitle="Each section includes clean placeholders so you can quickly replace them with your real photos and videos."
      />
      <div className="mb-8 flex justify-start">
        <Link to="/all-works" className="btn-gradient-soft text-sm">
          View all works
        </Link>
      </div>
      <div className="grid gap-8">
        {creativeSections.map((section) => (
          <PortfolioCard
            key={section.title}
            title={section.title}
            description={section.description}
            skills={section.skills}
            mediaEmbeds={section.mediaEmbeds}
            mediaImages={section.mediaImages}
            mediaLinks={section.mediaLinks}
            hintText={section.hintText}
          />
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}

export default CreativePortfolio
