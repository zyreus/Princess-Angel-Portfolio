import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectCard from '../ProjectCard'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'
import { projectCategories, projects } from '../../data/portfolio'

function ProjectsShowcaseSection({ compact = false }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects = useMemo(() => {
    const filtered =
      activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)
    return compact ? filtered.slice(0, 3) : filtered
  }, [activeCategory, compact])

  return (
    <MotionSection id="projects" className="space-y-10 sm:space-y-12">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionHeading
          eyebrow="Projects"
          title="Systems, Applications & Creative Works"
          subtitle="A categorized portfolio spanning administrative systems, information management, software development, and creative works."
        />
      </div>

      {/* Filter pills */}
      <div className="flex justify-center">
        <div className="inline-flex max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-lilac-200/60 bg-white p-2 shadow-card">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition duration-200 sm:text-sm ${isActive
                  ? 'bg-lilac-700 text-white shadow-soft'
                  : 'text-lilac-900/60 hover:bg-lilac-50 hover:text-lilac-700'
                  }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>
      <motion.div layout className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className="flex h-full min-w-0"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {compact ? (
        <div className="text-center">
          <Link to="/projects" className="btn-secondary">
            View all projects
          </Link>
        </div>
      ) : null}
    </MotionSection>
  )
}

export default ProjectsShowcaseSection
