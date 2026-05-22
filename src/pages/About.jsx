import { ArrowRight, BadgeCheck, BookOpen, Goal, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutProfileImage from '../assets/about-profile.png'
import SectionHeading from '../components/shared/SectionHeading'

const focusAreas = [
  'Full stack web applications with clean UX and maintainable structure.',
  'Data dashboards that translate raw information into decisions.',
  'System analysis, documentation, and user-centered workflows.',
  'Modern portfolio branding for corporate, startup, and freelance opportunities.',
]

const cards = [
  { icon: BadgeCheck, title: 'Experience Highlights', copy: 'Project manager, system analyst, OJT team leader, and developer for real-world systems.' },
  { icon: Layers3, title: 'Technology Focus', copy: 'React, TailwindCSS, Laravel, MySQL, analytics dashboards, and responsive interface systems.' },
  { icon: Goal, title: 'Career Direction', copy: 'Building toward international client work, tech companies, startups, and professional product teams.' },
]

function About() {
  return (
    <section className="space-y-12 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Me"
            title="Creative technologist with full stack, UI/UX, and analytics strengths."
            subtitle="I create user-focused digital solutions that balance visual quality, technical reliability, and meaningful business context."
          />
          <div className="mt-8 space-y-4 text-justify text-sm leading-8 text-lilac-900/80 md:text-base">
            <p>
              I am a multidisciplinary IT student and developer with experience across system development, project management,
              creative media, and communication. I care about interfaces that feel premium, but I care just as much about
              whether the system solves the user's real workflow.
            </p>
            <p>
              As Project Manager and System Analyst of MabuHighTrack, I led planning, requirement analysis, and development
              coordination. During my OJT, I contributed to a Medical Triage System and strengthened my leadership, documentation,
              and delivery skills.
            </p>
          </div>
          <Link to="/contact" className="premium-button mt-7">
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative rounded-3xl border border-lilac-200/50 bg-gradient-to-br from-lilac-100/80 via-lilac-50 to-accent-sky/20 p-5 shadow-diffuse">
          <div className="absolute -inset-8 -z-10 rounded-full bg-lilac-200/40 blur-3xl" />
          <img
            src={aboutProfileImage}
            alt="Princess Angel portrait"
            loading="lazy"
            className="h-full min-h-72 w-full rounded-2xl object-cover shadow-soft"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="glass-card glass-card-hover p-6">
            <Icon className="h-7 w-7 text-lilac-500" />
            <h3 className="mt-5 text-xl font-bold text-lilac-900">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-lilac-900/75">{copy}</p>
          </article>
        ))}
      </div>

      <div className="glass-card p-6 md:p-8">
        <p className="section-kicker flex items-center gap-2"><BookOpen className="h-4 w-4" />Technology Focus</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {focusAreas.map((item) => (
            <p key={item} className="rounded-2xl border border-lilac-200/70 bg-lilac-50/60 p-4 text-sm leading-7 text-lilac-900/75">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
