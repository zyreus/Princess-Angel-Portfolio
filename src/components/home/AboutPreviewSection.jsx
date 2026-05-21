import { Link } from 'react-router-dom'
import { Award, BriefcaseBusiness, Target, Zap } from 'lucide-react'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'

const highlights = [
  { icon: BriefcaseBusiness, title: 'System Development', copy: 'Practical web systems for academic, medical, and business workflows.' },
  { icon: Zap, title: 'Technology Focus', copy: 'React, Laravel, Tailwind, dashboards, analytics, and polished UI delivery.' },
  { icon: Award, title: 'Leadership', copy: 'Experience coordinating project scope, requirements, documentation, and team execution.' },
  { icon: Target, title: 'Career Goal', copy: 'Grow into a full stack developer who ships products for global teams and startups.' },
]

function AboutPreviewSection() {
  return (
    <MotionSection id="about" className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
      <SectionHeading
        align="left"
        eyebrow="About"
        title="A developer with a designer's eye and an analyst's discipline."
        subtitle="I combine strong visual taste with structured system thinking, so every project feels clear, usable, and ready for real users."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="glass-card glass-card-hover p-5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-lilac-200/60 bg-gradient-to-br from-lilac-50 to-white text-lilac-500">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg font-bold text-lilac-900">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-lilac-900/75">{copy}</p>
          </article>
        ))}
        <Link to="/about" className="premium-button sm:col-span-2">
          Learn more about my background
        </Link>
      </div>
    </MotionSection>
  )
}

export default AboutPreviewSection
