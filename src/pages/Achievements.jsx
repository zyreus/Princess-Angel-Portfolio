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
        title="A premium timeline of academic, leadership, OJT, and system-building milestones."
        subtitle="Structured for recruiters to quickly understand impact, direction, leadership, and hands-on project experience."
      />

      <div className="grid gap-4 md:grid-cols-4">
        {counters.map((counter) => (
          <article key={counter.label} className="glass-card p-5 text-center">
            <p className="text-3xl font-bold text-lilac-800">{counter.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-lilac-700/75">{counter.label}</p>
          </article>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-lilac-400 via-lilac-300 to-transparent md:left-1/2" />
        <div className="space-y-7">
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className={`relative grid gap-4 pl-16 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2'}`}
            >
              <div className={`glass-card glass-card-hover p-6 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                <span className="premium-pill">
                  <Trophy className="h-4 w-4 text-lilac-500" />
                  {achievement.year}
                </span>
                <h3 className="mt-4 text-xl font-bold text-lilac-900">{achievement.title}</h3>
                <p className="mt-2 text-sm font-semibold text-lilac-600">{achievement.type}</p>
                <p className="mt-3 text-sm leading-7 text-lilac-900/75">{achievement.description}</p>
              </div>
              <div className="absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full border border-lilac-200/70 bg-white text-lilac-500 shadow-diffuse md:left-1/2 md:-translate-x-1/2">
                {index === 0 ? <Crown className="h-5 w-5" /> : index === 2 ? <BriefcaseBusiness className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
