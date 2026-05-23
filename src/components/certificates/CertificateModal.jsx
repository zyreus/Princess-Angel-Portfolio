import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, CalendarDays, Download, X } from 'lucide-react'

function CertificateModal({ certificate, onClose }) {
  const modalRoot = typeof document !== 'undefined' ? document.body : null

  if (!modalRoot) return null

  return createPortal(
    <AnimatePresence>
      {certificate ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[9999] flex h-[100svh] w-full items-start justify-center overflow-y-auto bg-lilac-950/70 p-2 backdrop-blur-md sm:h-dvh sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-h-[calc(100svh-1rem)] w-full max-w-6xl overflow-y-auto overflow-x-hidden rounded-[1.5rem] border border-lilac-200/80 bg-gradient-to-br from-white via-lilac-50/95 to-white shadow-[0_30px_90px_rgba(51,26,77,0.3)] ring-1 ring-white/70 backdrop-blur-2xl sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem] sm:rounded-3xl" aria-hidden>
              <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-lilac-300/30 blur-3xl" />
              <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-accent-sky/35 blur-3xl" />
            </div>

            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="order-2 p-3 pt-0 sm:p-5 sm:pt-0 lg:order-1 lg:p-6 lg:pr-0">
                <div className="rounded-[1.35rem] border border-white/80 bg-white/75 p-2.5 shadow-[0_20px_54px_rgba(147,51,234,0.14)] backdrop-blur-xl sm:rounded-[1.65rem] sm:p-3">
                  <div className="mb-3 flex items-center justify-between gap-3 px-1">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-lilac-600 sm:text-xs sm:tracking-[0.22em]">
                      Certificate Preview
                    </p>
                    <span className="rounded-full bg-lilac-100/80 px-3 py-1 text-[0.65rem] font-black text-lilac-700">
                      {certificate.category}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-2xl border border-lilac-100/80 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                  >
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-auto max-h-[58svh] min-h-[220px] w-full object-contain object-center p-1.5 sm:min-h-[360px] sm:p-2 lg:max-h-none"
                    />
                  </motion.div>
                </div>
              </section>

              <section className="relative order-1 flex min-w-0 flex-col p-4 sm:p-7 lg:order-2 lg:p-8">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-lilac-200/80 bg-white/80 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.18em] text-lilac-700 shadow-[0_12px_30px_rgba(147,51,234,0.12)] backdrop-blur-xl sm:px-3.5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.24em]">
                      <span className="h-2 w-2 rounded-full bg-lilac-500 shadow-[0_0_18px_rgba(147,51,234,0.7)]" />
                      {certificate.category}
                    </span>
                    <h3 className="mt-3 break-words text-2xl font-black leading-[1.08] text-lilac-950 sm:mt-4 sm:text-4xl">
                      {certificate.title}
                    </h3>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ rotate: 90, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onClose}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lilac-200/80 bg-white/85 text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition duration-300 hover:border-lilac-300 hover:bg-lilac-50 hover:text-lilac-950 hover:shadow-[0_14px_32px_rgba(147,51,234,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-300/70 sm:h-11 sm:w-11"
                    aria-label="Close certificate preview"
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </motion.button>
                </div>

                <div className="mt-5 grid gap-3 text-sm font-semibold text-lilac-800/78 sm:mt-7">
                  <p className="flex items-center gap-2 rounded-2xl border border-lilac-200/70 bg-white/70 p-3">
                    <Building2 className="h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
                    {certificate.issuer}
                  </p>
                  <p className="flex items-center gap-2 rounded-2xl border border-lilac-200/70 bg-white/70 p-3">
                    <CalendarDays className="h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
                    Completed {certificate.date}
                  </p>
                </div>

                <div className="mt-6 border-t border-lilac-200/60 pt-5">
                  <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-lilac-600 sm:text-xs sm:tracking-[0.22em]">
                    Skills Highlighted
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {certificate.skills.map((skill) => (
                      <motion.span
                        key={`${certificate.id}-modal-${skill}`}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="inline-flex min-h-8 items-center rounded-full border border-lilac-200/80 bg-lilac-100/70 px-3 py-1.5 text-[0.7rem] font-black text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition duration-300 hover:border-lilac-300 hover:bg-white hover:text-lilac-900 hover:shadow-[0_12px_26px_rgba(147,51,234,0.12)] sm:min-h-9 sm:px-4 sm:py-2 sm:text-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <a href={certificate.image} download className="premium-button mt-7 w-full">
                  <Download className="h-4 w-4" aria-hidden />
                  Download Certificate
                </a>
              </section>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    modalRoot,
  )
}

export default CertificateModal
