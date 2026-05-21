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
    <MotionSection id="projects" className="space-y-9">
      <SectionHeading
        eyebrow="Projects"
        title="Advanced project showcase for recruiters and clients."
        subtitle="Filter by category, preview details, scan the tech stack, and jump to live/demo links from modern responsive cards."
      />
      <div className="flex flex-wrap justify-center gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              activeCategory === category
                ? 'border-lilac-300 bg-lilac-100/80 text-lilac-800 shadow-diffuse'
                : 'border-lilac-200/70 bg-white/80 text-lilac-700 hover:border-lilac-300 hover:text-lilac-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className="flex flex-wrap justify-center gap-6">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className="flex w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {compact ? (
        <div className="text-center">
          <Link to="/projects" className="premium-button-secondary">
            View all projects
          </Link>
        </div>
      ) : null}
    </MotionSection>
  )
}

export default ProjectsShowcaseSection
