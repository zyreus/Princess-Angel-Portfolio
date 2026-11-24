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
      whileHover={{ y: -6 }}
      className="group relative flex h-full min-h-[620px] w-full flex-col justify-between overflow-hidden rounded-[18px] border border-lilac-200/70 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-lilac-300 hover:shadow-card-hover"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden>
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-lilac-300/25 blur-3xl" />
        <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-accent-sky/35 blur-3xl" />
      </div>

      <button
        type="button"
        onClick={() => onPreview(certificate)}
        className="relative block h-[180px] shrink-0 overflow-hidden rounded-t-[1.75rem] bg-lilac-50 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lilac-300"
      >
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate preview`}
          loading="lazy"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lilac-950/24 via-transparent to-white/5 opacity-75" />
      </button>

      <div className="relative flex h-full flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-5">
          <span className="inline-flex h-9 max-w-full items-center self-start rounded-full border border-lilac-200/80 bg-lilac-50/85 px-3 text-[0.65rem] font-black uppercase tracking-[0.18em] text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]">
            <Award className="h-3.5 w-3.5" aria-hidden />
            <span className="truncate">{certificate.category}</span>
          </span>

          <h3 className="min-h-[120px] text-xl font-bold leading-[1.22] text-lilac-950 sm:text-2xl">
            <span className="line-clamp-3">{certificate.title}</span>
          </h3>
          <div className="min-h-[58px] space-y-2.5 text-sm font-semibold leading-6 text-lilac-800/78">
            <p className="flex min-w-0 items-center gap-2.5">
              <Building2 className="h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
              <span className="line-clamp-1">{certificate.issuer}</span>
            </p>
            <p className="flex min-w-0 items-center gap-2.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-lilac-500" aria-hidden />
              <span className="line-clamp-1">{certificate.date}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-1 flex-col border-t border-lilac-200/60 pt-5">
          <div className="flex min-h-[112px] flex-wrap content-start gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex h-8 items-center whitespace-nowrap rounded-full border border-lilac-200/70 bg-lilac-100/55 px-3 text-[0.68rem] font-bold leading-none text-lilac-700 transition duration-300 hover:border-lilac-300 hover:bg-white hover:text-lilac-900"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <button
              type="button"
              onClick={() => onPreview(certificate)}
              className="btn-secondary h-11 w-full"
            >
              <Eye className="h-4 w-4" aria-hidden />
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default CertificateCard
