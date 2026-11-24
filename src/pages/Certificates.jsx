import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'
import CertificateCard from '../components/certificates/CertificateCard'
import CertificateModal from '../components/certificates/CertificateModal'
import SectionHeading from '../components/shared/SectionHeading'
import { certificateFilters, certificates } from '../data/portfolio'

function certificateMatchesSearch(certificate, searchTerm) {
  const searchableText = [
    certificate.title,
    certificate.issuer,
    certificate.date,
    certificate.category,
    certificate.description,
    ...(certificate.details ?? []),
    ...certificate.skills,
  ].filter(Boolean).join(' ')

  return searchableText.toLowerCase().includes(searchTerm.toLowerCase())
}

function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const visibleCertificates = useMemo(() => {
    return certificates.filter((certificate) => {
      const matchesFilter = activeFilter === 'All' || certificate.filters.includes(activeFilter) || certificate.category === activeFilter
      const matchesSearch = certificateMatchesSearch(certificate, searchTerm.trim())

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchTerm])

  return (
    <section className="space-y-12 py-12 md:py-16">
      <SectionHeading
        eyebrow="Certificates"
        title="Certificates & Credentials"
        subtitle="Training records, seminars, and academic certifications with searchable filters and preview."
      />

      <div className="card p-5 sm:p-6">
        <div className="space-y-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-lilac-500" aria-hidden />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by certificate, issuer, category, or skill..."
                className="h-11 w-full rounded-xl border border-lilac-200/70 bg-white pl-11 pr-4 text-sm text-lilac-900 outline-none transition duration-200 placeholder:text-lilac-400/60 focus:border-lilac-700 focus:ring-2 focus:ring-lilac-100"
              />
            </label>
            <div className="inline-flex items-center gap-2 rounded-xl border border-lilac-200/60 bg-lilac-50 px-4 py-2.5 text-xs font-semibold text-lilac-700">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {visibleCertificates.length} credential{visibleCertificates.length === 1 ? '' : 's'}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-lilac-200/60 bg-white p-2 shadow-card">
            {certificateFilters.map((filter) => {
              const isActive = activeFilter === filter
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition duration-200 sm:text-sm ${isActive
                    ? 'bg-lilac-700 text-white shadow-soft'
                    : 'text-lilac-900/60 hover:bg-lilac-50 hover:text-lilac-700'
                    }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>

          <motion.div layout className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibleCertificates.map((certificate, index) => (
                <motion.div
                  layout
                  key={certificate.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.24 }}
                  className="flex h-full min-w-0"
                >
                  <CertificateCard certificate={certificate} index={index} onPreview={setActiveCertificate} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleCertificates.length === 0 ? (
            <div className="card p-8 text-center">
              <p className="text-base font-semibold text-lilac-900">No certificates found</p>
              <p className="mt-2 text-sm leading-6 text-lilac-900/55">Try another keyword or switch back to All.</p>
              <button
                type="button"
                onClick={() => { setActiveFilter('All'); setSearchTerm('') }}
                className="btn-secondary mt-5"
              >
                Clear filters
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <CertificateModal certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />
    </section>
  )
}

export default Certificates
