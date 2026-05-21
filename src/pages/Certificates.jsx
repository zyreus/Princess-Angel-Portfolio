import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, X } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import { certificates } from '../data/portfolio'

const groups = [...new Set(certificates.map((certificate) => certificate.group))]

function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section className="space-y-12 py-12 md:py-16">
      <SectionHeading
        eyebrow="Certificates"
        title="Professional certifications, trainings, seminars, and OJT credentials."
        subtitle="A clean certificate library with grouped cards, skill tags, verification actions, and modal previews."
      />

      {groups.map((group) => (
        <div key={group} className="space-y-5">
          <h3 className="text-2xl font-bold text-lilac-900">{group}</h3>
          <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
            {certificates
              .filter((certificate) => certificate.group === group)
              .map((certificate, index) => (
                <motion.article
                  key={certificate.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="glass-card glass-card-hover mb-5 break-inside-avoid overflow-hidden p-5"
                >
                  <button type="button" onClick={() => setActiveCertificate(certificate)} className="group block w-full text-left">
                    <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl border border-lilac-200/70 bg-gradient-to-br from-lilac-100/80 via-white to-accent-sky/30 transition duration-500 group-hover:scale-[1.02]">
                      <Award className="h-16 w-16 text-lilac-500" />
                    </div>
                    <p className="mt-5 text-sm font-semibold text-lilac-600">{certificate.issuer}</p>
                    <h4 className="mt-2 text-xl font-bold text-lilac-900">{certificate.title}</h4>
                    <p className="mt-1 text-sm text-lilac-700/75">{certificate.date}</p>
                  </button>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-lilac-200/70 bg-white/90 px-3 py-1 text-xs font-semibold text-lilac-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a href={certificate.verificationUrl} className="premium-button-secondary mt-5 w-full px-4 py-2" target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Verify
                  </a>
                </motion.article>
              ))}
          </div>
        </div>
      ))}

      {activeCertificate ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-lilac-900/55 p-4 backdrop-blur-sm" onClick={() => setActiveCertificate(null)}>
          <div className="w-full max-w-xl rounded-[2rem] border border-lilac-200/70 bg-white p-6 shadow-diffuse-lg" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">{activeCertificate.group}</p>
                <h3 className="mt-2 text-2xl font-bold text-lilac-900">{activeCertificate.title}</h3>
                <p className="mt-2 text-lilac-700/80">{activeCertificate.issuer} · {activeCertificate.date}</p>
              </div>
              <button type="button" onClick={() => setActiveCertificate(null)} className="rounded-full border border-lilac-200/70 p-2 text-lilac-700 hover:text-lilac-900">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 grid aspect-[4/3] place-items-center rounded-3xl border border-lilac-200/70 bg-gradient-to-br from-lilac-100/80 to-accent-sky/30">
              <Award className="h-20 w-20 text-lilac-500" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Certificates
