import { motion } from 'framer-motion'
import { BadgeCheck, BriefcaseBusiness, Crown, Trophy } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import { achievements } from '../data/portfolio'

const counters = [
  { label: 'Timeline milestones', value: achievements.length },
  { label: 'Leadership roles', value: '2+' },
  { label: 'System projects', value: '4+' },
  { label: 'Recognition areas', value: '6' },
]

function Achievements() {
  return (
    <section className="space-y-12 py-12 md:py-16">
      <SectionHeading
        eyebrow="Achievements"
        title="Professional Milestones"
        subtitle="A timeline of key work experiences, project contributions, and academic achievements."
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {counters.map((counter) => (
          <article key={counter.label} className="card p-5 text-center">
            <p className="page-heading text-3xl">{counter.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-lilac-900/55">{counter.label}</p>
          </article>
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-lilac-400 via-lilac-200 to-transparent md:left-6" aria-hidden />

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full border border-lilac-200/70 bg-white text-lilac-600 shadow-card md:left-1 md:h-11 md:w-11">
                {index === 0
                  ? <Crown className="h-4 w-4" aria-hidden />
                  : index === 1
                    ? <BriefcaseBusiness className="h-4 w-4" aria-hidden />
                    : <BadgeCheck className="h-4 w-4" aria-hidden />}
              </div>

              <div className="card p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200/60 bg-lilac-50 px-3 py-1 text-xs font-semibold text-lilac-700">
                    <Trophy className="h-3.5 w-3.5" aria-hidden />
                    {achievement.year}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-lilac-500">
                    {achievement.type}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-lilac-900">{achievement.title}</h3>
                <p className="mt-2 text-sm leading-6 text-lilac-900/60">{achievement.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
