import { Link } from 'react-router-dom'
import dashboardImage from '../../assets/mabuhightrack-dashboard.png'

function FeaturedProjectSection() {
  return (
    <section className="grid gap-8 rounded-3xl border border-lilac-200/50 bg-white/80 p-6 shadow-diffuse md:grid-cols-2 md:p-10">
      <div className="space-y-4">
        <p className="eyebrow">Featured Project</p>
        <h2 className="text-cute-gradient font-display text-3xl font-bold">MabuHighTrack</h2>
        <p className="leading-relaxed text-lilac-900/90">A student performance tracking system with analytics and AI prediction.</p>
        <p className="text-sm font-medium text-lilac-800">Role: Project Manager &amp; System Analyst</p>
        <Link to="/projects" className="btn-gradient">
          View Full Project
        </Link>
      </div>
      <div className="rounded-3xl border border-dashed border-lilac-200/80 bg-gradient-to-br from-lilac-50/90 via-white to-accent-sky/15 p-4 shadow-inner">
        <img
          src={dashboardImage}
          alt="MabuHighTrack dashboard preview"
          className="h-full min-h-52 w-full rounded-2xl object-cover shadow-soft"
        />
      </div>
    </section>
  )
}

export default FeaturedProjectSection
