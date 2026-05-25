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
        title="Certificates & Achievements"
        subtitle="A complete certificate gallery with searchable credentials, category filters, polished previews, and download-ready certificate images."
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-lilac-200/70 bg-white/70 p-4 shadow-diffuse backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-lilac-200/35 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-accent-sky/35 blur-3xl" />
        </div>

        <div className="relative space-y-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-lilac-500" aria-hidden />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by certificate, issuer, category, or skill..."
                className="h-12 w-full rounded-full border border-lilac-200/80 bg-white/90 pl-11 pr-4 text-sm font-semibold text-lilac-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] outline-none transition duration-300 placeholder:text-lilac-700/45 focus:border-lilac-300 focus:ring-4 focus:ring-lilac-200/45"
              />
            </label>

            <div className="inline-flex items-center gap-2 rounded-full border border-lilac-200/70 bg-white/80 px-4 py-3 text-xs font-bold text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
              <Sparkles className="h-4 w-4" aria-hidden />
              {visibleCertificates.length} credential{visibleCertificates.length === 1 ? '' : 's'}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 rounded-[1.75rem] border border-lilac-200/70 bg-white/70 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
            {certificateFilters.map((filter) => {
              const isActive = activeFilter === filter

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-3.5 py-2 text-xs font-extrabold tracking-[-0.01em] transition duration-300 sm:px-4 sm:text-sm ${
                    isActive
                      ? 'border-lilac-300 bg-lilac-100 text-lilac-800 shadow-[0_12px_30px_rgba(124,58,237,0.12)]'
                      : 'border-transparent bg-white/60 text-lilac-800/70 hover:-translate-y-0.5 hover:border-lilac-200/80 hover:bg-white hover:text-lilac-800 hover:shadow-[0_12px_26px_rgba(147,51,234,0.1)]'
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
            <div className="rounded-3xl border border-lilac-200/70 bg-white/75 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
              <p className="text-lg font-bold text-lilac-950">No certificates found</p>
              <p className="mt-2 text-sm leading-6 text-lilac-800/70">Try another keyword or switch back to the All category.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All')
                  setSearchTerm('')
                }}
                className="premium-button-secondary mt-5"
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
