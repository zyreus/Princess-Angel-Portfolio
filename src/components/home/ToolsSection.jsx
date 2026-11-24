import { motion } from 'framer-motion'
import { toolsAndTechnologies } from '../../data/portfolio'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'

function ToolsSection() {
    return (
        <MotionSection id="tools" className="space-y-10">
            <div className="mx-auto max-w-2xl text-center">
                <SectionHeading
                    eyebrow="Tools & Technologies"
                    title="Software and platforms I work with."
                    subtitle="Grouped by area to reflect both administrative and technical capabilities."
                />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {toolsAndTechnologies.map((group, index) => (
                    <motion.div
                        key={group.group}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        className="glass-card p-5"
                    >
                        <p className="eyebrow mb-4">{group.group}</p>
                        <ul className="space-y-2">
                            {group.items.map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm font-medium text-lilac-900/80">
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lilac-500" aria-hidden />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </MotionSection>
    )
}

export default ToolsSection
