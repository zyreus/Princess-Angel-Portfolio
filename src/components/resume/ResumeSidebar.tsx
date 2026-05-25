import React from 'react'
import { CheckCircle2, Languages, UserRound } from 'lucide-react'
import { contactItems, languages, resumeMeta, resumeSkills } from './resumeContent'

const profileImage = new URL('../../assets/princess-profile.png', import.meta.url).href

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

function ProfileCard() {
  return (
    <section className="sidebar-card profile-card">
      <div className="profile-image">
        <img
          src={profileImage}
          alt={resumeMeta.fullName}
        />
      </div>
      <p className="profile-degree">{resumeMeta.degree}</p>
      <h2>{resumeMeta.fullName}</h2>
      <span className="profile-rule" aria-hidden />
      <p>{resumeMeta.shortIntro}</p>
    </section>
  )
}

function ContactCard() {
  return (
    <section className="sidebar-card contact-card">
      <CardHeader icon={UserRound} title="Contact" />
      <div className="contact-list">
        {contactItems.map(({ icon: Icon, label, value, href }) => {
          const content = <span className="contact-value">{value}</span>

          return (
            <div key={label} className="contact-item">
              <span className="contact-icon">
                <Icon size={14} strokeWidth={2.2} aria-hidden />
              </span>
              <div>
                <p className="contact-label">{label}</p>
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
        })}
      </div>
    </section>
  )
}

function SkillsCard() {
  return (
    <section className="sidebar-card skills-card">
      <CardHeader icon={CheckCircle2} title="Skills" />
      <div className="skills">
        {resumeSkills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

function LanguagesCard() {
  return (
    <section className="sidebar-card languages-card">
      <CardHeader icon={Languages} title="Languages" />
      <div className="language-list">
        {languages.map((item) => (
          <div key={item.language} className="language-item">
            <div className="language-header">
              <p>{item.language}</p>
              <span>{item.level}</span>
            </div>
            <div className="language-bar">
              <span style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ResumeSidebar() {
  return (
    <aside className="sidebar">
      <ProfileCard />
      <ContactCard />
      <SkillsCard />
      <LanguagesCard />
    </aside>
  )
}

export default ResumeSidebar
