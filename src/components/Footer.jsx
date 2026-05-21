import { ArrowUp, BriefcaseBusiness, Code2, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="mt-16 border-t border-lilac-200/50 bg-gradient-to-b from-white/60 to-lilac-50/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-lilac-300 to-transparent" />
        <div className="grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-bold text-lilac-800">
              <Sparkles className="h-5 w-5 text-lilac-400" aria-hidden />
              Princess Angel Paslot
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-lilac-900/75">
              Creative and technical portfolio for full stack systems, UI/UX design, dashboards, analytics, and professional opportunities.
            </p>
            <p className="mt-3 break-all text-sm text-lilac-800/80">{profile.email}</p>
          </div>
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to} className="rounded-full border border-lilac-200/70 bg-white/70 px-3 py-2 text-sm font-semibold text-lilac-700 transition hover:border-lilac-300 hover:text-lilac-900">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-lilac-200/70 bg-white/70 p-3 text-lilac-700 transition hover:border-lilac-300 hover:text-lilac-900">
                <Code2 className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-lilac-200/70 bg-white/70 p-3 text-lilac-700 transition hover:border-lilac-300 hover:text-lilac-900">
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="rounded-full border border-lilac-200/70 bg-white/70 p-3 text-lilac-700 transition hover:border-lilac-300 hover:text-lilac-900">
                <Mail className="h-4 w-4" />
              </a>
              <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full border border-lilac-200/70 bg-white/70 p-3 text-lilac-700 transition hover:border-lilac-300 hover:text-lilac-900" aria-label="Back to top">
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-lilac-200/50 pt-5 text-center text-xs font-medium text-lilac-800/70 md:text-left">
          © {new Date().getFullYear()} Princess Angel Paslot. Built for modern web opportunities.
        </div>
      </div>
    </footer>
  )
}

export default Footer
