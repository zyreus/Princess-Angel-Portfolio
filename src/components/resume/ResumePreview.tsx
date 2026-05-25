import { motion } from 'framer-motion'
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Languages,
  Sparkles,
  UserRound,
} from 'lucide-react'
import profileImage from '../../assets/navbar-profile.png'
import {
  contactItems,
  education,
  experiences,
  languages,
  profileSummary,
  resumeSkills,
} from './ResumePrintTemplate'

function ResumeSection({ icon: Icon, title, children }) {
  return (
    <section className="resume-section rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_rgba(124,58,237,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#DDD6FE] hover:shadow-[0_26px_70px_rgba(124,58,237,0.13)] sm:p-7">
      <div className="mb-6 flex items-center gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#DDD6FE] bg-[#F5F3FF] text-[#7C3AED] shadow-[0_10px_24px_rgba(124,58,237,0.1)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#7C3AED]">Professional Details</p>
          <h2 className="mt-1 text-2xl font-semibold leading-[1.35] tracking-normal text-slate-950">{title}</h2>
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

function ResumePreview({ previewRef, fadeUpVariants }) {
  return (
    <div ref={previewRef} className="resume-export-wrapper mx-auto w-full">
      <motion.article
        variants={fadeUpVariants}
        className="resume-pdf-sheet mx-auto w-full overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.13)]"
      >
        <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="resume-sidebar relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-[#F5F3FF] p-6 sm:p-8 lg:p-7 xl:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DDD6FE]/70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F5F3FF] blur-3xl" />
            <div className="relative space-y-6">
              <div className="resume-photo-card rounded-[1.6rem] border border-[#E9D5FF]/80 bg-white/90 p-6 text-center shadow-[0_20px_50px_rgba(88,28,135,0.1)] backdrop-blur">
                <div className="resume-profile-image-frame mx-auto h-36 w-36 overflow-hidden rounded-[1.9rem] border border-[#E9D5FF] bg-white shadow-[0_18px_42px_rgba(124,58,237,0.16)] sm:h-40 sm:w-40 lg:h-36 lg:w-36 xl:h-40 xl:w-40">
                  <img
                    src={profileImage}
                    alt="Princess Angel Paslot"
                    width="120"
                    height="120"
                    className="resume-profile-image h-full w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#7C3AED]">BS Information Technology</p>
                <h2 className="mt-3 text-2xl font-semibold leading-[1.35] tracking-normal text-slate-950">Princess Angel Rentuaya Paslot</h2>
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
                  {resumeSkills.map((skill) => (
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

          <div className="resume-main-content relative bg-white p-7 sm:p-9 lg:p-11 xl:p-12">
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
                <div className="resume-work-grid grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
    </div>
  )
}

export default ResumePreview
