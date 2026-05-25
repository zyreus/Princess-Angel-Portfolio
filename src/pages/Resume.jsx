import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Download,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react'
import profileImage from '../assets/navbar-profile.png'

const contactItems = [
  { icon: Phone, label: 'Phone', value: '09671460857', href: 'tel:09671460857' },
  { icon: Mail, label: 'Email', value: 'princessjlister.apple@gmail.com', href: 'mailto:princessjlister.apple@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Purok 5 Mabuhay, Carmen Davao del Norte' },
  { icon: Sparkles, label: 'Portfolio', value: 'princess-angel-portfolio.vercel.app', href: 'https://princess-angel-portfolio.vercel.app/' },
]

const skills = [
  'Video & Photo Editing',
  'Active Listening',
  'Teamwork',
  'Time Management',
  'Leadership Experience',
  'Effective Communication',
  'Critical Thinking',
  'Computer Proficiency',
  'Layout Artist',
]

const languages = [
  { language: 'English', level: 'Basic', progress: 42 },
  { language: 'Filipino', level: 'Fluent', progress: 88 },
  { language: 'Bisaya', level: 'Mother Tongue', progress: 96 },
]

const education = [
  {
    school: 'Kabacan Pilot Central Elementary School',
    years: '2008 - 2016',
    details: ['With Honor'],
  },
  {
    school: 'Mabuhay National High School',
    years: '2016 - 2020',
    details: ['With Honor', 'BSP Awardee (2019)', 'GSP Awardee (2017)', 'YES-O Awardee (2019)'],
  },
  {
    school: 'University of Mindanao Panabo College',
    years: '2020 - 2022',
    details: ['With High Honor'],
  },
  {
    school: 'Davao del Norte State College',
    years: '2022 - 2026',
    details: ['Bachelor of Science in Information Technology'],
  },
]

const experiences = [
  {
    role: 'Photography / Video Editing',
    details: ['Debuts', 'Birthdays', 'Other event coverage'],
  },
  {
    role: 'Dncs Ideas',
    details: ['Field Reporter'],
  },
  {
    role: 'Graphic Designer',
    details: ['Brochure design', 'Tarpaulin layout design'],
  },
]

const profileSummary =
  'Motivated Bachelor of Science in Information Technology student with a strong foundation in creative media, communication, and computer proficiency. Known for adapting quickly to new situations, listening actively, and working well with teams. Eager to join a respected organization where I can continue developing my technical and creative skills, contribute fresh ideas, and build meaningful professional experience with dedication, integrity, and a strong commitment to excellence.'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
}

function ResumeSection({ icon: Icon, title, children }) {
  return (
    <section className="resume-section rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_rgba(124,58,237,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#DDD6FE] hover:shadow-[0_26px_70px_rgba(124,58,237,0.13)] sm:p-7">
      <div className="mb-6 flex items-center gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#DDD6FE] bg-[#F5F3FF] text-[#7C3AED] shadow-[0_10px_24px_rgba(124,58,237,0.1)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Professional Details</p>
          <h2 className="mt-1 text-2xl font-semibold leading-tight text-slate-950">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function SidebarBlock({ icon: Icon, title, children }) {
  return (
    <section className="resume-sidebar-card rounded-[1.35rem] border border-[#E9D5FF]/80 bg-white/[0.86] p-5 shadow-[0_16px_40px_rgba(88,28,135,0.09)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#DDD6FE] hover:bg-white hover:shadow-[0_22px_55px_rgba(124,58,237,0.12)] sm:p-6 lg:p-5 xl:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-[#E9D5FF] bg-[#F5F3FF] text-[#7C3AED]">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <h2 className="text-[0.74rem] font-bold uppercase tracking-[0.24em] text-slate-600">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <span className="break-words text-[0.88rem] font-medium leading-6 text-slate-700 [overflow-wrap:anywhere] transition group-hover:text-[#7C3AED]">
      {value}
    </span>
  )

  return (
    <div className="group flex gap-3 border-b border-slate-200/80 pb-4 last:border-b-0 last:pb-0">
      <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-[#E9D5FF] bg-[#F5F3FF] text-[#7C3AED]">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="mb-1 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
        {href ? (
          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  )
}

function Resume() {
  const resumeRef = useRef(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!resumeRef.current || isDownloading) return

    setIsDownloading(true)
    resumeRef.current.classList.add('resume-export-mode')
    if (document.fonts?.ready) {
      await document.fonts.ready
    }
    await new Promise((resolve) => requestAnimationFrame(resolve))

    try {
      const html2pdf = (await import('html2pdf.js')).default
      const options = {
        margin: 0,
        filename: 'Princess-Angel-Paslot-Resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2.4,
          useCORS: true,
          backgroundColor: '#ffffff',
          letterRendering: true,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      }

      await html2pdf().set(options).from(resumeRef.current).save()
    } finally {
      resumeRef.current?.classList.remove('resume-export-mode')
      setIsDownloading(false)
    }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[1220px] space-y-10 py-10 md:py-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-[#F5F3FF] blur-3xl" />

      <motion.div variants={fadeUpVariants} className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDD6FE] bg-white px-3 py-1.5 text-xs font-semibold text-[#6D28D9] shadow-[0_12px_30px_rgba(124,58,237,0.08)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
            Premium resume layout
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#7C3AED]">Resume</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Modern, recruiter-ready profile for <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Princess Angel Paslot</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            A clean two-column resume with refined purple accents, stronger hierarchy, balanced cards, and A4-friendly PDF export.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="premium-button group w-full shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
        >
          <Download className="h-4 w-4 transition duration-300 group-hover:translate-y-0.5" />
          {isDownloading ? 'Preparing PDF...' : 'Download Resume'}
        </button>
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        className="sticky top-20 z-30 flex justify-end lg:hidden"
        aria-label="Floating resume download"
      >
        <button type="button" onClick={handleDownload} disabled={isDownloading} className="premium-button shadow-glow">
          <Download className="h-4 w-4" />
          PDF
        </button>
      </motion.div>

      <motion.article
        ref={resumeRef}
        variants={fadeUpVariants}
        className="resume-pdf-sheet mx-auto w-full overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.13)]"
      >
        <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-[#F5F3FF] p-6 sm:p-8 lg:p-7 xl:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DDD6FE]/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F5F3FF] blur-3xl" />
            <div className="relative space-y-6">
              <div className="resume-photo-card rounded-[1.6rem] border border-[#E9D5FF]/80 bg-white/90 p-6 text-center shadow-[0_20px_50px_rgba(88,28,135,0.1)] backdrop-blur">
                <div className="mx-auto h-36 w-36 overflow-hidden rounded-[1.9rem] border border-[#E9D5FF] bg-white shadow-[0_18px_42px_rgba(124,58,237,0.16)] sm:h-40 sm:w-40 lg:h-36 lg:w-36 xl:h-40 xl:w-40">
                  <img src={profileImage} alt="Princess Angel Paslot" className="h-full w-full object-cover" />
                </div>
                <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#7C3AED]">BS Information Technology</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">Princess Angel Rentuaya Paslot</h2>
                <div className="mx-auto mt-5 h-0.5 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" />
                <p className="mt-5 text-[0.95rem] leading-7 text-slate-600">
                  Creative IT student focused on visual design, communication, and practical digital solutions.
                </p>
              </div>

              <SidebarBlock icon={UserRound} title="Contact">
                <div className="space-y-4">
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <ContactRow key={label} icon={Icon} label={label} value={value} href={href} />
                  ))}
                </div>
              </SidebarBlock>

              <SidebarBlock icon={CheckCircle2} title="Skills">
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[#E9D5FF] bg-[#F5F3FF] px-3.5 py-2 text-[0.78rem] font-semibold leading-none text-[#6D28D9] transition duration-300 hover:-translate-y-0.5 hover:border-[#C4B5FD] hover:bg-white hover:shadow-[0_10px_22px_rgba(124,58,237,0.14)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </SidebarBlock>

              <SidebarBlock icon={Languages} title="Languages">
                <div className="space-y-5">
                  {languages.map((item) => (
                    <div key={item.language}>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[0.95rem] font-semibold text-slate-900">{item.language}</p>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">{item.level}</p>
                      </div>
                      <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-slate-100">
                        <span className="block h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </SidebarBlock>
            </div>
          </aside>

          <div className="relative bg-white p-7 sm:p-9 lg:p-11 xl:p-12">
            <header className="resume-main-header border-b border-slate-200 pb-8 sm:pb-9">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#7C3AED]">Candidate Profile</p>
                <span className="rounded-full border border-[#DDD6FE] bg-[#F5F3FF] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#6D28D9]">
                  Open to Opportunities
                </span>
              </div>
              <h2 className="mt-5 text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.055em] text-slate-950 sm:text-5xl xl:text-[3.35rem]">
                Princess Angel <span className="text-[#7C3AED]">Paslot</span>
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-3.5">
                <p className="text-lg font-semibold leading-7 text-slate-700">Bachelor of Science in Information Technology</p>
                <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                <p className="text-base font-medium leading-7 text-slate-500">Creative Media & UI-focused IT Student</p>
              </div>
              <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" />
            </header>

            <div className="mt-8 space-y-7">
              <ResumeSection icon={Sparkles} title="Profile">
                <p className="max-w-3xl text-base leading-8 text-slate-600">{profileSummary}</p>
              </ResumeSection>

              <ResumeSection icon={GraduationCap} title="Education">
                <div className="relative space-y-6 before:absolute before:left-[0.65rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200">
                  {education.map((item) => (
                    <div key={`${item.school}-${item.years}`} className="relative grid gap-4 pl-9 sm:grid-cols-[1fr_auto] sm:items-start">
                      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-[#7C3AED] shadow-[0_0_0_5px_rgba(245,243,255,1)]" />
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-7 text-slate-950">{item.school}</h3>
                        <ul className="mt-3 flex flex-wrap gap-2.5 text-sm leading-6 text-slate-600">
                          {item.details.map((detail) => (
                            <li key={detail} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.82rem] font-medium text-slate-600">
                              <Award className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" aria-hidden />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="flex h-fit w-fit items-center gap-1.5 rounded-full border border-[#DDD6FE] bg-[#F5F3FF] px-3.5 py-2 text-xs font-bold text-[#6D28D9]">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {item.years}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection icon={BriefcaseBusiness} title="Work Experience">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {experiences.map((item) => (
                    <article key={item.role} className="work-card flex min-h-[170px] flex-col rounded-[1.3rem] border border-slate-200 bg-slate-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#DDD6FE] hover:bg-white hover:shadow-[0_20px_48px_rgba(124,58,237,0.12)]">
                      <span className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-[#F5F3FF] text-[#7C3AED] shadow-[0_10px_22px_rgba(124,58,237,0.08)]">
                        <BriefcaseBusiness className="h-[18px] w-[18px]" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold leading-6 text-slate-950">{item.role}</h3>
                      <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-600">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7C3AED]" aria-hidden />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </ResumeSection>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.button
        variants={fadeUpVariants}
        type="button"
        onClick={handleDownload}
        disabled={isDownloading}
        className="premium-button fixed bottom-6 right-6 z-40 hidden shadow-glow lg:inline-flex"
      >
        <Download className="h-4 w-4" />
        {isDownloading ? 'Preparing...' : 'Download Resume'}
      </motion.button>
    </motion.section>
  )
}

export default Resume
