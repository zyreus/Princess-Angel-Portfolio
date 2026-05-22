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
    <MotionSection id="projects" className="space-y-8 font-['Inter'] sm:space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Projects"
          title="Premium project showcase for recruiters and clients."
          subtitle="Explore polished project cards with balanced previews, focused details, clean stacks, and direct action links."
        />
      </div>
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-2 shadow-[0_18px_54px_rgba(76,29,149,0.07),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3.5 py-2 text-xs font-extrabold tracking-[-0.01em] transition duration-300 sm:px-4 sm:text-sm ${
                isActive
                  ? 'border-lilac-300 bg-lilac-100 text-lilac-800 shadow-[0_12px_30px_rgba(124,58,237,0.12)]'
                  : 'border-transparent bg-white/60 text-slate-600 hover:-translate-y-0.5 hover:border-lilac-200/80 hover:bg-white hover:text-lilac-800'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
      <motion.div layout className="grid auto-rows-fr grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-7">
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
          <Link to="/projects" className="premium-button-secondary">
            View all projects
          </Link>
        </div>
      ) : null}
    </MotionSection>
  )
}

export default ProjectsShowcaseSection
