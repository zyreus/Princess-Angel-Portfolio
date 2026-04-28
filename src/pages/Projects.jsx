import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/home/SectionDivider'
import { projects } from '../data/content'

function Projects() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-lilac-200/30 blur-3xl" />
      </div>
      <SectionTitle
        eyebrow="Projects"
        title="Technical Systems and Solutions"
        subtitle="A selection of projects that highlight both leadership and development skills."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}

export default Projects
