const skillCards = [
  {
    icon: '🎨',
    title: 'Creative',
    items: 'Photography, Videography, Editing, Graphic Design & Layouting',
  },
  {
    icon: '🧠',
    title: 'Leadership',
    items: 'Project Management, System Analysis',
  },
  {
    icon: '🎤',
    title: 'Communication',
    items: 'On-Camera Presentation',
  },
]

function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-black md:text-3xl">Skills at a Glance</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {skillCards.map((card) => (
          <article
            key={card.title}
            className="animate-fadeInUp rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-soft"
          >
            <p className="text-2xl">{card.icon}</p>
            <h3 className="mt-3 text-lg font-semibold text-purple-700">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{card.items}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
