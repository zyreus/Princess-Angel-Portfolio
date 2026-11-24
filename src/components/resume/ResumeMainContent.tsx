import React from 'react'
import { Award, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react'
import { education, experiences, profileSummary, resumeMeta } from './resumeContent'

function CardHeader({ icon: Icon, title }) {
  return (
    <div className="resume-card-title">
      <span className="resume-card-icon">
        <Icon size={16} strokeWidth={2.2} aria-hidden />
      </span>
      <h2>{title}</h2>
    </div>
  )
}

function ResumeHeader() {
  return (
    <header className="resume-card resume-header">
      <h1>
        {resumeMeta.firstName} <span className="text-[#7C3AED]">{resumeMeta.lastName}</span>
      </h1>
      <div className="header-subtitle">
        <p>{resumeMeta.degree}</p>
      </div>
      <div className="header-rule" aria-hidden />
    </header>
  )
}

function ProfileSummary() {
  return (
    <section className="resume-card summary-card">
      <CardHeader icon={Sparkles} title="Profile Summary" />
      <p className="summary-text">{profileSummary}</p>
    </section>
  )
}

function EducationTimeline() {
  return (
    <section className="resume-card education-card">
      <CardHeader icon={GraduationCap} title="Education Timeline" />
      <div className="timeline">
        {education.map((item, index) => (
          <article key={`${item.school}-${item.years}`} className="timeline-item">
            <span className="timeline-marker" aria-hidden>
              <span />
              <i className={index === education.length - 1 ? 'is-last' : ''} />
            </span>
            <div className="timeline-card">
              <h3>{item.school}</h3>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>
                    <Award size={10} strokeWidth={2.2} aria-hidden />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="timeline-year">
              {item.years}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function WorkExperience() {
  return (
    <section className="resume-card work-section">
      <CardHeader icon={resumeMeta.experienceIcon} title="Work Experience" />
      <div className="work-grid">
        {experiences.map(({ icon: Icon, role, company, details }) => (
          <article key={role} className="work-card">
            <span className="work-icon">
              <Icon size={16} strokeWidth={2.2} aria-hidden />
            </span>
            <h3>{role}</h3>
            {company ? <p style={{ fontSize: '8.5px', color: '#7c3aed', fontWeight: 600, marginTop: '3px', marginBottom: '0' }}>{company}</p> : null}
            <ul>
              {details.map((detail) => (
                <li key={detail}>
                  <CheckCircle2 size={12} strokeWidth={2.2} aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function ResumeMainContent() {
  return (
    <main className="resume-main">
      <ResumeHeader />
      <ProfileSummary />
      <EducationTimeline />
      <WorkExperience />
    </main>
  )
}

export default ResumeMainContent
