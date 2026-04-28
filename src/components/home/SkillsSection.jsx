import { IconMicRound, IconPalette, IconUsersRound } from '../icons/LineIcons'

const skillCards = [
  {
    Icon: IconPalette,
    title: 'Creative',
    items: 'Photography, Videography, Editing, Graphic Design & Layouting',
  },
  {
    Icon: IconUsersRound,
    title: 'Leadership',
    items: 'Project Management, System Analysis',
  },
  {
    Icon: IconMicRound,
    title: 'Communication',
    items: 'On-Camera Presentation',
  },
]

function SkillsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-cute-gradient font-display text-2xl font-bold md:text-3xl">Skills at a Glance</h2>
      <div className="grid gap-5 sm:grid-cols-3">
        {skillCards.map(({ Icon, title, items }) => (
          <article
            key={title}
            className="card-cute animate-fadeInUp p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-diffuse-lg"
          >
            <div className="inline-flex rounded-2xl border border-lilac-200/60 bg-gradient-to-br from-lilac-50 to-white p-2.5 text-lilac-500">
              <Icon className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="text-cute-gradient mt-4 font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-lilac-900/85">{items}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
