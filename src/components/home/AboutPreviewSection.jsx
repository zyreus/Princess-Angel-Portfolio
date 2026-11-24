import { Link } from 'react-router-dom'
import { BookOpen, Briefcase, ClipboardList, Target } from 'lucide-react'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'

const highlights = [
  {
    icon: Briefcase,
    title: 'Administrative & Operations',
    copy: 'Experienced in documentation, records organization, coordination, and report preparation for professional environments.',
  },
  {
    icon: ClipboardList,
    title: 'Data Management',
    copy: 'Skilled at organizing, entering, and maintaining data accurately using tools like Excel, Google Sheets, and MySQL.',
  },
  {
    icon: BookOpen,
    title: 'IT Background',
    copy: 'BS Information Technology graduate with hands-on development experience across web applications and business systems.',
  },
  {
    icon: Target,
    title: 'Career Direction',
    copy: 'Seeking roles in administrative support, office operations, data management, HR coordination, and digital operations.',
  },
]

function AboutPreviewSection() {
  return (
    <MotionSection id="about" className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
      <SectionHeading
        align="left"
        eyebrow="About Me"
        title="A versatile IT graduate built for administrative and digital work."
        subtitle="I combine organizational discipline, technical knowledge, and attention to detail to deliver accurate, efficient, and meaningful work."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="glass-card glass-card-hover p-5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-lilac-200/60 bg-gradient-to-br from-lilac-100 to-white text-lilac-700">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-base font-bold text-lilac-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-lilac-900/70">{copy}</p>
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
