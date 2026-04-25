import { Link } from 'react-router-dom'

const systems = ['Medical Triage System', 'Mental Health Monitoring System']

function SystemProjectsSection() {
  return (
    <section className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold text-black md:text-3xl">System Development</h2>
      <p className="mt-3 text-gray-700">
        I build systems that solve real-world problems and improve user experience.
      </p>
      <ul className="mt-5 space-y-3">
        {systems.map((system) => (
          <li key={system} className="rounded-xl border border-purple-100 bg-purple-50/40 px-4 py-3 text-sm font-medium text-black">
            {system}
          </li>
        ))}
      </ul>
      <Link
        to="/projects"
        className="mt-6 inline-block rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-soft"
      >
        View All Projects
      </Link>
    </section>
  )
}

export default SystemProjectsSection
