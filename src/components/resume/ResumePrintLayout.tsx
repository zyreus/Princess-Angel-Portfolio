import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react'
import profileImage from '../../assets/navbar-profile.png'

export const RESUME_PRINT_MAX_WIDTH_PX = 850

export const contactItems = [
  { icon: Phone, label: 'Phone', value: '09671460857', href: 'tel:09671460857' },
  { icon: Mail, label: 'Email', value: 'princessjlister.apple@gmail.com', href: 'mailto:princessjlister.apple@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Purok 5 Mabuhay, Carmen Davao del Norte' },
  { icon: Sparkles, label: 'Portfolio', value: 'princess-angel-portfolio.vercel.app', href: 'https://princess-angel-portfolio.vercel.app/' },
]

export const resumeSkills = [
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

export const languages = [
  { language: 'English', level: 'Basic', progress: 42 },
  { language: 'Filipino', level: 'Fluent', progress: 88 },
  { language: 'Bisaya', level: 'Mother Tongue', progress: 96 },
]

export const education = [
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

export const experiences = [
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

export const profileSummary =
  'Motivated Bachelor of Science in Information Technology student with a strong foundation in creative media, communication, and computer proficiency. Known for adapting quickly to new situations, listening actively, and working well with teams. Eager to join a respected organization where I can continue developing my technical and creative skills, contribute fresh ideas, and build meaningful professional experience with dedication, integrity, and a strong commitment to excellence.'

function PrintIconBox({ icon: Icon, className = '' }) {
  return (
    <span className={`grid h-[30px] w-[30px] shrink-0 place-items-center overflow-hidden rounded-xl border border-[#E9D5FF] bg-[#F6F0FF] text-[#8B5CF6] ${className}`}>
      <Icon size={14} strokeWidth={2.2} aria-hidden />
    </span>
  )
}

function SidebarCard({ icon: Icon, title, children }) {
  return (
    <section className="overflow-hidden rounded-[20px] border border-[#E7D7FF] bg-white p-5 shadow-[0_8px_20px_rgba(88,28,135,0.05)] [break-inside:avoid]">
      <div className="mb-5 flex items-center gap-3 overflow-hidden">
        <PrintIconBox icon={Icon} />
        <h2 className="text-[12px] font-bold uppercase leading-[1.55] tracking-[0.18em] text-slate-500">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function MainCard({ icon: Icon, title, children }) {
  return (
    <section className="overflow-hidden rounded-[20px] border border-[#E7D7FF] bg-white p-5 shadow-[0_8px_20px_rgba(88,28,135,0.045)] [break-inside:avoid]">
      <div className="mb-5 flex items-center gap-3 overflow-hidden">
        <PrintIconBox icon={Icon} />
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase leading-[1.55] tracking-[0.24em] text-[#8B5CF6]">Professional Details</p>
          <h2 className="mt-0.5 text-[17px] font-semibold leading-[1.35] tracking-normal text-slate-950">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function ProfileImage() {
  return (
    <div className="mx-auto h-[130px] w-[130px] shrink-0 overflow-hidden rounded-[28px] border border-[#E7D7FF] bg-white">
      <img
        src={profileImage}
        alt="Princess Angel Paslot"
        width="130"
        height="130"
        className="block h-[130px] w-[130px] shrink-0 rounded-[28px] object-cover object-center"
      />
    </div>
  )
}

function ResumePrintLayout({ printRef }) {
  return (
    <div
      id="resume-print"
      ref={printRef}
      className="resume-print-sheet mx-auto flex aspect-[8.5/14] w-full max-w-[850px] gap-6 overflow-hidden rounded-[24px] bg-[#f8f5ff] p-6 text-slate-900"
    >
      <aside className="w-[34%] min-w-[280px] shrink-0 overflow-hidden">
        <div className="flex h-full flex-col gap-5 overflow-hidden">
          <section className="overflow-hidden rounded-[20px] border border-[#E7D7FF] bg-white p-5 text-center shadow-[0_8px_20px_rgba(88,28,135,0.05)] [break-inside:avoid]">
            <ProfileImage />
            <p className="mt-5 text-[12px] font-bold uppercase leading-[1.6] tracking-[0.18em] text-[#8B5CF6]">BS Information Technology</p>
            <h2 className="mt-3 text-[20px] font-semibold leading-[1.35] tracking-normal text-slate-950">Princess Angel Rentuaya Paslot</h2>
            <p className="mt-5 text-[13px] leading-[1.65] tracking-normal text-slate-600">
              Creative IT student focused on visual design, communication, and practical digital solutions.
            </p>
          </section>

          <SidebarCard icon={UserRound} title="Contact">
            <div className="space-y-4 overflow-hidden">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const valueClass = 'break-words text-[12px] font-medium leading-[1.65] tracking-normal text-slate-700 [overflow-wrap:anywhere]'
                return (
                  <div key={label} className="flex gap-3 overflow-hidden border-b border-slate-200/80 pb-3.5 last:border-b-0 last:pb-0">
                    <PrintIconBox icon={Icon} />
                    <div className="min-w-0 overflow-hidden">
                      <p className="mb-1 text-[11px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-slate-400">{label}</p>
                      {href ? (
                        <a href={href} className={valueClass}>
                          {value}
                        </a>
                      ) : (
                        <span className={valueClass}>{value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </SidebarCard>

          <SidebarCard icon={CheckCircle2} title="Skills">
            <div className="flex flex-wrap gap-2 overflow-hidden">
              {resumeSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-[#E7D7FF] bg-[#F6F0FF] px-3 py-1.5 text-[11px] font-semibold leading-[1.2] tracking-normal text-[#7C3AED]">
                  {skill}
                </span>
              ))}
            </div>
          </SidebarCard>

          <SidebarCard icon={Languages} title="Languages">
            <div className="space-y-4 overflow-hidden">
              {languages.map((item) => (
                <div key={item.language} className="overflow-hidden">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[13px] font-semibold leading-[1.65] tracking-normal text-slate-900">{item.language}</p>
                    <p className="text-[10px] font-bold uppercase leading-[1.5] tracking-[0.14em] text-slate-400">{item.level}</p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <span className="block h-full rounded-full bg-[#A855F7]" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </SidebarCard>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_10px_28px_rgba(88,28,135,0.05)]">
        <header className="overflow-hidden border-b border-[#E7D7FF] pb-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <p className="text-[12px] font-bold uppercase leading-[1.5] tracking-[0.2em] text-[#8B5CF6]">Candidate Profile</p>
            <span className="rounded-full border border-[#E7D7FF] bg-[#F6F0FF] px-3 py-1.5 text-[10px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#7C3AED]">
              Open to Opportunities
            </span>
          </div>
          <h1 className="mt-5 text-[clamp(32px,4vw,42px)] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-950">
            Princess Angel <span className="text-[#7C3AED]">Paslot</span>
          </h1>
          <div className="mt-4 flex items-center gap-3 overflow-hidden">
            <p className="text-[13px] font-semibold leading-[1.65] tracking-normal text-slate-700">Bachelor of Science in Information Technology</p>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A855F7]" />
            <p className="text-[12px] font-medium leading-[1.65] tracking-normal text-slate-500">Creative Media & UI-focused IT Student</p>
          </div>
          <div className="mt-6 h-0.5 w-24 rounded-full bg-[#8B5CF6]" />
        </header>

        <div className="mt-6 space-y-5 overflow-hidden">
          <MainCard icon={Sparkles} title="Profile">
            <p className="text-[13px] leading-[1.65] tracking-normal text-slate-600">{profileSummary}</p>
          </MainCard>

          <MainCard icon={GraduationCap} title="Education">
            <div className="relative space-y-5 overflow-hidden before:absolute before:left-[0.45rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[#DDD6FE]">
              {education.map((item) => (
                <div key={`${item.school}-${item.years}`} className="relative grid grid-cols-[1fr_auto] gap-3 overflow-hidden pl-6">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#8B5CF6] shadow-[0_0_0_3px_rgba(245,243,255,1)]" />
                  <div className="min-w-0 overflow-hidden">
                    <h3 className="text-[13px] font-semibold leading-[1.6] tracking-normal text-slate-950">{item.school}</h3>
                    <ul className="mt-2 flex flex-wrap gap-2 text-[12px] leading-[1.5] tracking-normal text-slate-600">
                      {item.details.map((detail) => (
                        <li key={detail} className="inline-flex items-center gap-1.5 rounded-full border border-[#E7D7FF] bg-[#FAF8FF] px-2.5 py-1.5 text-[11px] font-medium leading-[1.2] text-slate-600">
                          <Award size={11} className="shrink-0 text-[#8B5CF6]" aria-hidden />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="flex h-fit w-fit shrink-0 items-center gap-1.5 rounded-full border border-[#E7D7FF] bg-[#F6F0FF] px-2.5 py-1.5 text-[10px] font-bold leading-[1.2] text-[#7C3AED]">
                    <CalendarDays size={11} aria-hidden />
                    {item.years}
                  </p>
                </div>
              ))}
            </div>
          </MainCard>

          <MainCard icon={BriefcaseBusiness} title="Work Experience">
            <div className="grid grid-cols-3 gap-3 overflow-hidden">
              {experiences.map((item) => (
                <article key={item.role} className="min-h-[160px] overflow-hidden rounded-[16px] border border-[#E7D7FF] bg-[#FAF8FF] p-4 [break-inside:avoid]">
                  <span className="grid h-[30px] w-[30px] shrink-0 place-items-center overflow-hidden rounded-xl bg-[#F6F0FF] text-[#8B5CF6]">
                    <BriefcaseBusiness size={14} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[13px] font-semibold leading-[1.5] tracking-normal text-slate-950">{item.role}</h3>
                  <ul className="mt-3 space-y-1.5 text-[11px] leading-[1.6] tracking-normal text-slate-600">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-1.5">
                        <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-[#8B5CF6]" aria-hidden />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </MainCard>
        </div>
      </main>
    </div>
  )
}

export default ResumePrintLayout
