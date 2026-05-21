import { motion } from 'framer-motion'
import { BarChart3, Code2, Database, Palette, ServerCog, Sparkles } from 'lucide-react'
import { skills } from '../../data/portfolio'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'

const icons = {
  Frontend: Code2,
  Backend: ServerCog,
  Database,
  'UI/UX': Palette,
  DevOps: Sparkles,
  'Data Analytics': BarChart3,
}

function SkillsSection() {
  return (
    <MotionSection id="skills" className="space-y-10">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced stack across product design, code, systems, and data."
        subtitle="Recruiter-friendly skill groups with clear strengths, tools, and production-focused capabilities."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = icons[skill.category] || Sparkles

          return (
            <motion.article
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-lilac-200/60 bg-gradient-to-br from-lilac-50 to-white text-lilac-500">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="text-2xl font-bold text-lilac-800">{skill.level}%</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-lilac-900">{skill.category}</h3>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-lilac-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.9, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-lilac-400 to-lilac-600"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-lilac-200/70 bg-white/90 px-3 py-1 text-xs font-semibold text-lilac-700">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </MotionSection>
  )
}

export default SkillsSection
