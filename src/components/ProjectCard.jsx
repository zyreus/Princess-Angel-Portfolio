import { useState } from 'react'

const roleIcons = {
  'Project Manager': '📌',
  'System Analyst': '📊',
  Developer: '💻',
  Analyst: '🧠',
}

function ProjectCard({ title, role, description, stack }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const roleParts = role.split(',').map((item) => item.trim())

  return (
    <article className="animate-fadeInUp rounded-3xl border border-white/40 bg-white/60 p-5 shadow-soft backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(124,58,237,0.22)] md:p-6">
      <h3 className="text-xl font-semibold text-black md:text-2xl">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {roleParts.map((rolePart) => (
          <span key={`${title}-${rolePart}`} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
            {roleIcons[rolePart] || '•'} {rolePart}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tag) => (
          <span key={tag} className="rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-medium text-purple-700">
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mt-6 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-soft"
      >
        View Details
      </button>
      {isModalOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={() => setIsModalOpen(false)}>
          <div className="w-full max-w-lg rounded-2xl border border-white/40 bg-white/90 p-6 backdrop-blur" onClick={(event) => event.stopPropagation()}>
            <h4 className="text-xl font-semibold text-black">{title}</h4>
            <p className="mt-2 text-sm text-purple-700">{role}</p>
            <p className="mt-4 text-sm text-gray-700">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tag) => (
                <span key={`${title}-modal-${tag}`} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-6 rounded-full border border-purple-300 px-4 py-2 text-sm font-semibold text-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default ProjectCard
