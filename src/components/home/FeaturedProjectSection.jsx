import { Link } from 'react-router-dom'

function FeaturedProjectSection() {
  return (
    <section className="grid gap-6 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">Featured Project</p>
        <h2 className="text-3xl font-bold text-black">MabuHighTrack</h2>
        <p className="text-gray-700">A student performance tracking system with analytics and AI prediction.</p>
        <p className="text-sm font-medium text-purple-700">Role: Project Manager &amp; System Analyst</p>
        <Link
          to="/projects"
          className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-soft"
        >
          View Full Project
        </Link>
      </div>
      <div className="rounded-2xl border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-100 to-white p-4 shadow-inner">
        <div className="flex h-full min-h-52 items-center justify-center rounded-2xl bg-white/80 text-center text-sm font-medium text-purple-700">
          Dashboard Image Placeholder
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectSection
