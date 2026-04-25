import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/content'

function Projects() {
  return (
    <section className="py-10 md:py-14">
      <SectionTitle
        eyebrow="Projects"
        title="Technical Systems and Solutions"
        subtitle="A selection of projects that highlight both leadership and development skills."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
