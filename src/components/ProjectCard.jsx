import { useState } from 'react'
import { IconBrainRound, IconChartRound, IconLaptopRound, IconPinRound } from './icons/LineIcons'

const roleIcons = {
  'Project Manager': IconPinRound,
  'System Analyst': IconChartRound,
  Developer: IconLaptopRound,
  Analyst: IconBrainRound,
}

function ProjectCard({ title, role, description, stack }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const roleParts = role.split(',').map((item) => item.trim())

  return (
    <article className="animate-fadeInUp rounded-3xl border border-lilac-200/45 bg-white/75 p-5 shadow-diffuse backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-diffuse-lg md:p-6">
      <h3 className="text-cute-gradient font-display text-xl font-bold md:text-2xl">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {roleParts.map((rolePart) => {
          const Icon = roleIcons[rolePart]
          return (
            <span
              key={`${title}-${rolePart}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200/60 bg-lilac-50/80 px-3 py-1.5 text-xs font-semibold text-lilac-700"
            >
              {Icon ? <Icon className="h-3.5 w-3.5 text-lilac-500" aria-hidden /> : <span aria-hidden>•</span>}
              {rolePart}
            </span>
          )
        })}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-lilac-900/85">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-lilac-200/70 bg-white/90 px-3 py-1 text-xs font-medium text-lilac-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="btn-gradient mt-6"
      >
        View Details
      </button>
      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-lilac-900/40 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-lilac-200/60 bg-white/95 p-6 shadow-diffuse-lg backdrop-blur-md"
            onClick={(event) => event.stopPropagation()}
          >
            <h4 className="text-cute-gradient font-display text-xl font-bold">{title}</h4>
            <p className="mt-2 text-sm text-lilac-700">{role}</p>
            <p className="mt-4 text-sm leading-relaxed text-lilac-900/90">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tag) => (
                <span
                  key={`${title}-modal-${tag}`}
                  className="rounded-full bg-lilac-100/90 px-3 py-1 text-xs font-medium text-lilac-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="btn-ghost mt-6"
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
