import { Link } from 'react-router-dom'

const systems = ['Medical Triage System', 'Mental Health Monitoring System']

function SystemProjectsSection() {
  return (
    <section className="rounded-3xl border border-lilac-200/50 bg-white/85 p-6 shadow-diffuse md:p-9">
      <h2 className="text-cute-gradient font-display text-2xl font-bold md:text-3xl">System Development</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-lilac-900/90">
        I build systems that solve real-world problems and improve user experience.
      </p>
      <ul className="mt-6 space-y-3">
        {systems.map((system) => (
          <li
            key={system}
            className="rounded-2xl border border-lilac-200/50 bg-lilac-50/50 px-4 py-3.5 text-sm font-medium text-lilac-800"
          >
            {system}
          </li>
        ))}
      </ul>
      <Link to="/projects" className="btn-gradient mt-7">
        View All Projects
      </Link>
    </section>
  )
}

export default SystemProjectsSection
