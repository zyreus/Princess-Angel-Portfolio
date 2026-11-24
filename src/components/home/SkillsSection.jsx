import { motion } from 'framer-motion'
import { Briefcase, Code2, Database, Monitor, Users } from 'lucide-react'
import { skillCategories } from '../../data/portfolio'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'

const iconMap = {
  Briefcase,
  Database,
  Users,
  Monitor,
  Code: Code2,
}

function SkillsSection() {
  return (
    <MotionSection id="skills" className="space-y-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="Core Competencies"
          title="A balanced skill set for administrative and technical work."
          subtitle="Organized across five areas that reflect both my administrative capabilities and IT background."
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code2

          return (
            <motion.article
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-lilac-200/60 bg-gradient-to-br from-lilac-100 to-white text-lilac-700">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-base font-bold leading-tight text-lilac-900">{skill.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-lilac-200/70 bg-lilac-50/80 px-3 py-1 text-xs font-medium text-lilac-800"
                  >
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
