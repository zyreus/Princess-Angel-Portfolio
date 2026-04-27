import { Link } from 'react-router-dom'
import PortfolioCard from '../components/PortfolioCard'
import SectionTitle from '../components/SectionTitle'
import { creativeSections } from '../data/content'

function AllWorks() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 right-0 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl" />
      </div>
      <SectionTitle
        eyebrow="All Works"
        title="Complete Creative Collection"
        subtitle="Browse all creative categories in one dedicated page."
      />
      <div className="mb-6">
        <Link
          to="/creative-portfolio"
          className="inline-flex items-center rounded-xl border border-purple-200 px-5 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
        >
          Back to Creative Area
        </Link>
      </div>
      <div className="grid gap-6">
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
            mediaOnly
            placeholderCount={6}
          />
        ))}
      </div>
    </section>
  )
}

export default AllWorks
