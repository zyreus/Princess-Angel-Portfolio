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
import profileImage from '../assets/princess-profile.png'

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
    school: 'Kabaang Pilot Central Elementary School',
    years: '2008 - 2015',
    details: ['With Honor'],
  },
  {
    school: 'Mabuhay National High School',
    years: '2016 - 2020',
    details: ['With Honor', 'BSP Awardee (2019)', 'GSP Awardee (2017)', 'YES-O Awardee (2019)'],
  },
  {
    school: 'University of Mindanao Panabo',
    years: '2020 - 2024',
    details: ['With High Honor'],
  },
  {
    school: 'Davao del Norte State College',
    years: '2022 - 2024',
    details: ['Bachelor of Science in Information Technology, 3rd Year'],
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
    <section className="resume-section rounded-[1.35rem] border border-slate-200/80 bg-white p-5 shadow-[0_18px_45px_rgba(124,58,237,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#DDD6FE] hover:shadow-[0_24px_60px_rgba(124,58,237,0.12)] sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-2xl border border-[#DDD6FE] bg-[#F5F3FF] text-[#7C3AED]">
          <Icon className="h-[18px] w-[18px]" aria-hidden />
        </span>
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#7C3AED]">Professional Details</p>
          <h2 className="mt-0.5 text-xl font-semibold text-slate-950">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function SidebarBlock({ icon: Icon, title, children }) {
  return (
    <section className="resume-sidebar-card rounded-[1.15rem] border border-[#E9D5FF]/80 bg-white/[0.82] p-4 shadow-[0_14px_34px_rgba(88,28,135,0.08)] backdrop-blur">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-xl bg-[#F5F3FF] text-[#7C3AED]">
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </span>
        <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-600">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <span className="break-words text-[0.82rem] font-medium leading-5 text-slate-700 [overflow-wrap:anywhere] transition group-hover:text-[#7C3AED]">
      {value}
    </span>
  )

  return (
    <div className="group flex gap-2.5 border-b border-slate-200/80 pb-3 last:border-b-0 last:pb-0">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl border border-[#E9D5FF] bg-[#F5F3FF] text-[#7C3AED]">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="mb-0.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
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
    await new Promise((resolve) => requestAnimationFrame(resolve))

    try {
      const html2pdf = (await import('html2pdf.js')).default
      const options = {
        margin: 0,
        filename: 'Princess-Angel-Paslot-Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
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
      className="relative space-y-8 py-10 md:py-14"
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
        className="resume-pdf-sheet overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)]"
      >
        <div className="grid lg:grid-cols-[300px_1fr]">
          <aside className="relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-[#F5F3FF] p-5 sm:p-6 lg:p-7">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DDD6FE]/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F5F3FF] blur-3xl" />
            <div className="relative space-y-5">
              <div className="resume-photo-card rounded-[1.4rem] border border-[#E9D5FF]/80 bg-white/88 p-4 text-center shadow-[0_18px_45px_rgba(88,28,135,0.09)] backdrop-blur">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-[1.6rem] border border-[#E9D5FF] bg-white shadow-[0_16px_34px_rgba(124,58,237,0.14)]">
                  <img src={profileImage} alt="Princess Angel Paslot" className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#7C3AED]">BS Information Technology</p>
                <h2 className="mt-2 text-xl font-semibold leading-tight text-slate-950">Princess Angel Rentuaya Paslot</h2>
                <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" />
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Creative IT student focused on visual design, communication, and practical digital solutions.
                </p>
              </div>

              <SidebarBlock icon={UserRound} title="Contact">
                <div className="space-y-3">
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <ContactRow key={label} icon={Icon} label={label} value={value} href={href} />
                  ))}
                </div>
              </SidebarBlock>

              <SidebarBlock icon={CheckCircle2} title="Skills">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[#E9D5FF] bg-[#F5F3FF] px-3 py-1.5 text-[0.72rem] font-semibold text-[#6D28D9] transition duration-300 hover:-translate-y-0.5 hover:border-[#C4B5FD] hover:bg-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </SidebarBlock>

              <SidebarBlock icon={Languages} title="Languages">
                <div className="space-y-4">
                  {languages.map((item) => (
                    <div key={item.language}>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-900">{item.language}</p>
                        <p className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-slate-400">{item.level}</p>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <span className="block h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </SidebarBlock>
            </div>
          </aside>

          <div className="relative bg-white p-6 sm:p-8 lg:p-10">
            <header className="resume-main-header border-b border-slate-200 pb-7">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#7C3AED]">Candidate Profile</p>
                <span className="rounded-full border border-[#DDD6FE] bg-[#F5F3FF] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#6D28D9]">
                  Open to Opportunities
                </span>
              </div>
              <h2 className="mt-4 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl">
                Princess Angel <span className="text-[#7C3AED]">Paslot</span>
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-base font-semibold text-slate-700">Bachelor of Science in Information Technology</p>
                <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                <p className="text-sm font-medium text-slate-500">Creative Media & UI-focused IT Student</p>
              </div>
              <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" />
            </header>

            <div className="mt-7 space-y-5">
              <ResumeSection icon={Sparkles} title="Profile">
                <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-[0.95rem]">{profileSummary}</p>
              </ResumeSection>

              <ResumeSection icon={GraduationCap} title="Education">
                <div className="relative space-y-5 before:absolute before:left-[0.55rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200">
                  {education.map((item) => (
                    <div key={`${item.school}-${item.years}`} className="relative grid gap-3 pl-8 sm:grid-cols-[1fr_auto] sm:items-start">
                      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-[3px] border-white bg-[#7C3AED] shadow-[0_0_0_4px_rgba(245,243,255,1)]" />
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-slate-950">{item.school}</h3>
                        <ul className="mt-2 flex flex-wrap gap-2 text-sm leading-6 text-slate-600">
                          {item.details.map((detail) => (
                            <li key={detail} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                              <Award className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" aria-hidden />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="flex h-fit w-fit items-center gap-1.5 rounded-full border border-[#DDD6FE] bg-[#F5F3FF] px-3 py-1.5 text-xs font-bold text-[#6D28D9]">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                        {item.years}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection icon={BriefcaseBusiness} title="Work Experience">
                <div className="grid gap-3 md:grid-cols-3">
                  {experiences.map((item) => (
                    <article key={item.role} className="flex min-h-[138px] flex-col rounded-[1.15rem] border border-slate-200 bg-slate-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#DDD6FE] hover:bg-white hover:shadow-[0_18px_40px_rgba(124,58,237,0.1)]">
                      <span className="mb-3 grid h-8 w-8 place-items-center rounded-2xl bg-[#F5F3FF] text-[#7C3AED]">
                        <BriefcaseBusiness className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold leading-5 text-slate-950">{item.role}</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
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
