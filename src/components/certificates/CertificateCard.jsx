import { motion } from 'framer-motion'
import { Award, Building2, CalendarDays, Eye } from 'lucide-react'

function CertificateCard({ certificate, index = 0, onPreview }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7, scale: 1.01 }}
      className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[1.75rem] border border-lilac-200/70 bg-white/85 shadow-diffuse backdrop-blur-xl transition duration-300 hover:border-lilac-300 hover:bg-white hover:shadow-diffuse-lg"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden>
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-lilac-300/25 blur-3xl" />
        <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-accent-sky/35 blur-3xl" />
      </div>

      <button
        type="button"
        onClick={() => onPreview(certificate)}
        className="relative block aspect-[4/3] overflow-hidden bg-lilac-50 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lilac-300"
      >
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate preview`}
          loading="lazy"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lilac-950/30 via-transparent to-white/5 opacity-75" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.18em] text-lilac-700 shadow-[0_12px_30px_rgba(76,29,149,0.14)] backdrop-blur-xl">
          <Award className="h-3.5 w-3.5" aria-hidden />
          {certificate.category}
        </span>
      </button>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="space-y-3">
          <h3 className="min-h-[4.75rem] text-xl font-bold leading-tight text-lilac-950 sm:text-2xl">
            <span className="line-clamp-3">{certificate.title}</span>
          </h3>
          <div className="space-y-2 text-sm font-semibold text-lilac-800/78">
            <p className="flex items-center gap-2">
              <Building2 className="h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
              <span className="line-clamp-1">{certificate.issuer}</span>
            </p>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
              {certificate.date}
            </p>
          </div>
        </div>

        <div className="mt-5 flex min-h-[82px] flex-wrap content-start gap-2 border-t border-lilac-200/60 pt-4">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex h-7 items-center rounded-full border border-lilac-200/70 bg-lilac-100/55 px-2.5 text-[0.7rem] font-bold text-lilac-700 transition duration-300 hover:border-lilac-300 hover:bg-white hover:text-lilac-900"
            >
              {skill}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onPreview(certificate)}
          className="premium-button-secondary mt-auto w-full px-4 py-2.5"
        >
          <Eye className="h-4 w-4" aria-hidden />
          View Certificate
        </button>
      </div>
    </motion.article>
  )
}

export default CertificateCard
