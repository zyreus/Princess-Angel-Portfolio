import { motion } from 'framer-motion'
import { Briefcase, Code2, Database, Monitor, Users } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import { skillCategories } from '../data/portfolio'

const iconMap = {
    Briefcase,
    Database,
    Users,
    Monitor,
    Code: Code2,
}

function Skills() {
    return (
        <section className="space-y-10 py-12 md:py-16">
            <SectionHeading
                eyebrow="Core Competencies"
                title="Skills & Capabilities"
                subtitle="Organized across five areas that reflect both my administrative capabilities and IT background."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((skill, index) => {
                    const Icon = iconMap[skill.icon] || Code2

                    return (
                        <motion.article
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06, duration: 0.5 }}
                            className="card p-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lilac-200/60 bg-lilac-50 text-lilac-700">
                                    <Icon className="h-5 w-5" aria-hidden />
                                </div>
                                <h3 className="text-sm font-semibold leading-tight text-lilac-900">{skill.category}</h3>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {skill.tools.map((tool) => (
                                    <span key={tool} className="skill-chip">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills
