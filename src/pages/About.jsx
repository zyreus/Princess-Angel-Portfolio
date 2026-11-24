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
    copy: 'Skilled at organizing, entering, and maintaining data accurately using Microsoft Excel, Google Sheets, and MySQL across academic and professional projects.',
  },
  {
    icon: Target,
    title: 'Career Direction',
    copy: 'Seeking opportunities in administrative support, data management, HR coordination, digital operations, office operations, and IT support roles.',
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
    <section className="space-y-12 py-10 md:py-14">
      {/* Bio Section */}
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div className="max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="About Me"
            title="An IT graduate ready for administrative and operational work."
            subtitle="I combine organizational discipline, technical knowledge, and attention to detail to deliver accurate, efficient, and meaningful results."
          />
          <div className="mt-6 space-y-4 text-sm leading-7 text-lilac-900/80 md:text-base md:leading-8">
            <p>
              I am Princess Angel R. Paslot, a Bachelor of Science in Information Technology graduate from Davao del Norte State College. I have a strong interest in administrative operations, data management, and digital solutions, and I bring together technical knowledge, organizational skills, and attention to detail to support efficient workflows and business operations.
            </p>
            <p>
              Whether it is managing information, preparing documentation, coordinating tasks, or developing digital solutions, I strive to deliver organized, accurate, and meaningful results. My IT background gives me a natural ability to work with digital tools, databases, and systems, while my administrative capabilities make me effective in operational and office environments.
            </p>
            <p>
              I am a quick learner, detail-oriented, and committed to contributing positively to any team or organization I join. I am open to roles in government offices, private companies, administrative departments, and IT organizations.
            </p>
          </div>
          <Link to="/contact" className="premium-button mt-7 inline-flex">
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="relative rounded-3xl border border-lilac-200/50 bg-gradient-to-br from-lilac-100/60 via-lilac-50 to-white p-5 shadow-diffuse">
          <div className="absolute -inset-8 -z-10 rounded-full bg-lilac-200/30 blur-3xl" aria-hidden />
          <img
            src={aboutProfileImage}
            alt="Princess Angel R. Paslot"
            loading="lazy"
            className="h-full min-h-72 w-full rounded-2xl object-cover shadow-soft"
          />
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="glass-card glass-card-hover p-6">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-lilac-200/60 bg-gradient-to-br from-lilac-100 to-white text-lilac-700">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-5 text-base font-bold text-lilac-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-lilac-900/70">{copy}</p>
          </article>
        ))}
      </div>

      {/* Education Card */}
      <div className="glass-card p-6 md:p-8">
        <p className="section-kicker flex items-center gap-2">
          <GraduationCap className="h-4 w-4" aria-hidden />
          Education
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-lilac-200/70 bg-lilac-50/60 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lilac-500">2022 – 2026</p>
            <h3 className="mt-2 text-base font-bold text-lilac-900">Bachelor of Science in Information Technology</h3>
            <p className="mt-1 text-sm font-semibold text-lilac-700">Davao del Norte State College</p>
            <p className="mt-1 text-sm text-lilac-900/60">Graduate</p>
          </div>
          <div className="rounded-2xl border border-lilac-200/70 bg-lilac-50/60 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lilac-500">2020 – 2022</p>
            <h3 className="mt-2 text-base font-bold text-lilac-900">Senior High School</h3>
            <p className="mt-1 text-sm font-semibold text-lilac-700">University of Mindanao Panabo College</p>
            <p className="mt-1 text-sm text-lilac-900/60">With High Honor</p>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="glass-card p-6 md:p-8">
        <p className="section-kicker flex items-center gap-2">
          <BookOpen className="h-4 w-4" aria-hidden />
          What I Can Do
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {focusAreas.map((item) => (
            <p key={item} className="flex items-start gap-3 rounded-2xl border border-lilac-200/60 bg-lilac-50/50 p-4 text-sm leading-6 text-lilac-900/80">
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
