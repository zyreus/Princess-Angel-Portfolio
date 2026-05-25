import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import CertificateCard from '../certificates/CertificateCard'
import CertificateModal from '../certificates/CertificateModal'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'
import { certificates } from '../../data/portfolio'

function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState(null)
  const featuredCertificates = certificates.filter((certificate) => certificate.featured).slice(0, 4)

  return (
    <MotionSection id="certificates" className="space-y-8 sm:space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Certificates"
          title="Certificates & Achievements"
          subtitle="Professional certifications and trainings showcasing my continuous learning journey in technology, design, and development."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2rem] border border-lilac-200/70 bg-white/70 p-3 shadow-diffuse backdrop-blur-xl sm:p-4"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-lilac-200/35 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent-sky/35 blur-3xl" />
        </div>

        <div className="relative mb-4 flex flex-col gap-3 rounded-[1.5rem] border border-lilac-200/60 bg-white/75 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lilac-100 text-lilac-600 ring-1 ring-lilac-200/70">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold text-lilac-950">Featured learning milestones</p>
              <p className="text-xs leading-5 text-lilac-800/70">A polished preview of certificates recruiters can quickly review.</p>
            </div>
          </div>
          <Link to="/certificates" className="premium-button-secondary shrink-0 px-4 py-2.5">
            View full gallery
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="relative grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredCertificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onPreview={setActiveCertificate}
            />
          ))}
        </div>
      </motion.div>

      <CertificateModal certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />
    </MotionSection>
  )
}

export default CertificatesSection
