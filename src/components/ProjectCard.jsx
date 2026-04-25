function ProjectCard({ title, role, description, stack }) {
  return (
    <article className="animate-fadeInUp rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm font-medium text-purple-700">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tag) => (
          <span key={tag} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="mt-6 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-soft"
      >
        View Details
      </button>
    </article>
  )
}

export default ProjectCard
