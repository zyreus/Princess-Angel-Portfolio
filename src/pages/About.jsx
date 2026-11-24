import { ArrowRight, BadgeCheck, BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutProfileImage from '../assets/about-profile.png'
import SectionHeading from '../components/shared/SectionHeading'

const cards = [
  {
    icon: Briefcase,
    title: 'Administrative & Operations',
    copy: 'Experienced in documentation, records organization, file management, coordination, and report preparation — skills directly applicable to administrative and office roles.',
  },
  {
    icon: BadgeCheck,
    title: 'Data Management',
    copy: 'Skilled at organizing, entering, and maintaining data accurately using Microsoft Excel, Google Sheets, and MySQL across academic and professional contexts.',
  },
  {
    icon: Target,
    title: 'Career Direction',
    copy: 'Seeking roles in administrative support, data management, HR coordination, digital operations, office operations, and IT support.',
  },
]

const focusAreas = [
  'Document preparation, file organization, and records management.',
  'Data entry, spreadsheet management, and digital record keeping.',
  'HR coordination support, contractor tracking, and operational reporting.',
  'WordPress administration, social media management, and content scheduling.',
  'Web application development using React, Laravel, PHP, and MySQL.',
  'Business correspondence, report preparation, and administrative coordination.',
]

function About() {
  return (
    <section className="space-y-12 py-12 md:py-16">

      {/* Bio */}
      <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Me"
            title="IT graduate ready for administrative and operational work."
            subtitle="I combine organizational discipline, technical knowledge, and attention to detail to deliver accurate, efficient, and meaningful results."
          />
          <div className="mt-6 space-y-4 text-sm leading-7 text-lilac-900/70 md:text-[0.95rem] md:leading-8">
            <p>
              I am Princess Angel R. Paslot, a Bachelor of Science in Information Technology graduate from Davao del Norte State College. I have a strong interest in administrative operations, data management, and digital solutions, and I bring together technical knowledge, organizational skills, and attention to detail to support efficient workflows and business operations.
            </p>
            <p>
              Whether it is managing information, preparing documentation, coordinating tasks, or developing digital solutions, I strive to deliver organized, accurate, and meaningful results. My IT background gives me a natural ability to work with digital tools, databases, and systems, while my administrative capabilities make me effective in operational and office environments.
            </p>
            <p>
              I am a quick learner, detail-oriented, and committed to contributing positively to any team or organization. I am open to roles in government offices, private companies, administrative departments, and IT organizations.
            </p>
          </div>
          <Link to="/contact" className="mt-7 btn-primary">
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Photo */}
        <div className="overflow-hidden rounded-[18px] border border-lilac-200/50 bg-lilac-50 shadow-card">
          <img
            src={aboutProfileImage}
            alt="Princess Angel R. Paslot"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Highlight cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="card p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-lilac-200/60 bg-lilac-50 text-lilac-700">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-lilac-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-lilac-900/60">{copy}</p>
          </article>
        ))}
      </div>

      {/* Education */}
      <div className="card p-6 md:p-8">
        <p className="flex items-center gap-2 section-kicker">
          <GraduationCap className="h-4 w-4" aria-hidden />
          Education
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-lilac-200/60 bg-lilac-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-lilac-500">2022 – 2026</p>
            <h3 className="mt-1.5 text-sm font-semibold text-lilac-900">Bachelor of Science in Information Technology</h3>
            <p className="mt-0.5 text-sm text-lilac-700">Davao del Norte State College</p>
            <p className="mt-0.5 text-xs text-lilac-900/50">Graduate</p>
          </div>
          <div className="rounded-xl border border-lilac-200/60 bg-lilac-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-lilac-500">2020 – 2022</p>
            <h3 className="mt-1.5 text-sm font-semibold text-lilac-900">Senior High School</h3>
            <p className="mt-0.5 text-sm text-lilac-700">University of Mindanao Panabo College</p>
            <p className="mt-0.5 text-xs text-lilac-900/50">With High Honor</p>
          </div>
        </div>
      </div>

      {/* Focus areas */}
      <div className="card p-6 md:p-8">
        <p className="flex items-center gap-2 section-kicker">
          <BookOpen className="h-4 w-4" aria-hidden />
          What I Can Do
        </p>
        <div className="mt-5 grid gap-2.5 md:grid-cols-2">
          {focusAreas.map((item) => (
            <p key={item} className="flex items-start gap-2.5 rounded-xl border border-lilac-200/50 bg-lilac-50/50 p-3.5 text-sm leading-6 text-lilac-900/70">
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
              {item}
            </p>
          ))}
        </div>
      </div>

    </section>
  )
}

export default About
