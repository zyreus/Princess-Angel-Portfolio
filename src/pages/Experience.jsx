import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import { workExperience } from '../data/portfolio'

function Experience() {
    return (
        <section className="space-y-10 py-12 md:py-16">
            <SectionHeading
                eyebrow="Work Experience"
                title="Professional Experience"
                subtitle="Practical background in documentation, coordination, records management, and digital operations."
            />

            <div className="space-y-6">
                {workExperience.map((job, index) => (
                    <motion.article
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="card p-6 md:p-8"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-start gap-4">
                                <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lilac-200/60 bg-lilac-50 text-lilac-700">
                                    <Briefcase className="h-5 w-5" aria-hidden />
                                </div>
                                <div>
                                    <h3 className="font-display text-base font-semibold text-lilac-900">{job.role}</h3>
                                    <p className="mt-0.5 text-sm font-medium text-lilac-700">{job.company}</p>
                                    <span className="mt-1.5 inline-flex items-center rounded-full border border-lilac-200/60 bg-lilac-50 px-2.5 py-0.5 text-xs font-medium text-lilac-700">
                                        {job.type}
                                    </span>
                                </div>
                            </div>
                            <div className="flex shrink-0 items-center gap-1.5 self-start rounded-full border border-lilac-200/60 bg-lilac-50 px-3 py-1.5 text-xs font-medium text-lilac-700">
                                <Calendar className="h-3.5 w-3.5" aria-hidden />
                                {job.period}
                            </div>
                        </div>

                        <ul className="mt-5 space-y-2">
                            {job.responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-lilac-900/70">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {job.skills.map((s) => (
                                <span key={s} className="skill-chip">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}

export default Experience
