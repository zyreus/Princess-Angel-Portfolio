import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Code2, ExternalLink, Eye, Layers3, Link as LinkIcon, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects as allProjects } from '../data/portfolio'

const cardMotion = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
}

function formatCategoryLabel(category) {
  if (!category) return 'Featured Project'

  if (category === 'Pictures') return 'Multimedia Project'
  return category
}

const featureIcons = [Sparkles, Layers3, Eye]

const actionButtonClasses =
  'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl border border-lilac-200/90 bg-white/90 px-4 py-2.5 text-sm font-bold text-lilac-700 shadow-[0_10px_28px_rgba(124,58,237,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-lilac-300 hover:bg-lilac-50 hover:text-lilac-900 hover:shadow-[0_18px_36px_rgba(124,58,237,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-300/70'

function FeaturePill({ item, index = 0 }) {
  const Icon = featureIcons[index % featureIcons.length]

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.22 }}
      className="group flex min-h-14 items-center gap-2.5 rounded-2xl border border-lilac-200/70 bg-white/75 p-2.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl transition duration-300 hover:border-lilac-300 hover:bg-white hover:shadow-[0_14px_30px_rgba(124,58,237,0.11)]"
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lilac-100 text-lilac-600 ring-1 ring-lilac-200/70 transition duration-300 group-hover:bg-lilac-600 group-hover:text-white">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <span className="line-clamp-2 text-[0.78rem] font-bold leading-snug text-lilac-900">{item}</span>
    </motion.div>
  )
}

function ProjectLinkCard({ href, icon: Icon = ExternalLink, label, meta }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group flex min-h-[66px] items-center justify-between gap-3 rounded-2xl border border-lilac-200/70 bg-white/80 p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl transition duration-300 hover:border-lilac-300 hover:bg-lilac-50/90 hover:shadow-[0_14px_34px_rgba(124,58,237,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-300/70"
    >
      <span className="flex min-w-0 flex-1 items-center gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lilac-100 text-lilac-700 ring-1 ring-lilac-200/70 transition duration-300 group-hover:bg-lilac-600 group-hover:text-white">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-black text-lilac-900">{label}</span>
          <span className="mt-0.5 block truncate text-xs font-medium text-lilac-700/70">{meta}</span>
        </span>
      </span>
      <ExternalLink className="h-4 w-4 shrink-0 text-lilac-500 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
    </motion.a>
  )
}

function MoreProjectCard({ project }) {
  const hasProjectLiveUrl = project.liveUrl && project.liveUrl !== '#'
  const primaryLink = hasProjectLiveUrl ? project.liveUrl : project.reviewLinks?.[0]?.url || project.githubUrl
  const actionLabel = hasProjectLiveUrl ? project.liveLabel || 'Live Preview' : project.reviewLinks?.[0] ? 'Review Project' : 'Open GitHub'

  return (
    <motion.a
      href={primaryLink}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group flex min-h-[108px] flex-col justify-between rounded-2xl border border-lilac-200/70 bg-white/80 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl transition duration-300 hover:border-lilac-300 hover:bg-white hover:shadow-[0_14px_34px_rgba(124,58,237,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-300/70"
    >
      <span>
        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-lilac-600/80">
          {formatCategoryLabel(project.category)}
        </span>
        <span className="mt-2 block text-sm font-black leading-snug text-lilac-950">{project.title}</span>
        <span className="mt-2 line-clamp-2 block text-xs leading-5 text-lilac-900/70">{project.description}</span>
      </span>
      <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-lilac-700">
        {actionLabel}
        <ExternalLink className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </span>
    </motion.a>
  )
}

function ProjectCard({
  id,
  title,
  role,
  description,
  stack,
  category,
  image,
  stats = [],
  liveUrl,
  liveLabel = 'Live',
  githubUrl,
  reviewLinks = [],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hasLiveUrl = liveUrl && liveUrl !== '#'
  const categoryLabel = formatCategoryLabel(category)
  const modalRoot = typeof document !== 'undefined' ? document.body : null
  const projectLinks = [
    ...(hasLiveUrl ? [{ href: liveUrl, icon: ExternalLink, label: liveLabel || 'Live Preview', meta: 'Primary project link' }] : []),
    ...(githubUrl ? [{ href: githubUrl, icon: Code2, label: 'GitHub Repository', meta: 'Source code and repository' }] : []),
    ...reviewLinks.map((link) => ({
      href: link.url,
      icon: LinkIcon,
      label: link.label,
      meta: 'Review sample link',
    })),
  ]
  const moreProjects = allProjects.filter((project) => project.id !== id && project.title !== title).slice(0, 4)

  return (
    <>
      <motion.article
        {...cardMotion}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, scale: 1.005 }}
        className="group relative flex h-full min-h-[510px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 shadow-[0_18px_55px_rgba(76,29,149,0.08)] backdrop-blur-xl transition duration-300 hover:border-lilac-300/80 hover:bg-white hover:shadow-[0_24px_70px_rgba(124,58,237,0.15)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden>
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-lilac-300/20 blur-3xl" />
          <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-accent-sky/30 blur-3xl" />
        </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-lilac-50">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-center opacity-95 transition duration-700 group-hover:scale-105"
          />
        ) : null}
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 font-['Inter'] text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-lilac-700 shadow-[0_12px_28px_rgba(76,29,149,0.12)] backdrop-blur-xl">
          {categoryLabel}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 font-['Inter']">
        <div className="space-y-3.5">
          <p className="flex min-h-5 items-center gap-2 text-[0.68rem] font-extrabold uppercase leading-5 tracking-[0.22em] text-lilac-600">
            <Layers3 className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="line-clamp-1">{role}</span>
          </p>
          <h3 className="min-h-[3.75rem] font-['Poppins'] text-[1.45rem] font-black leading-[1.16] tracking-[-0.035em] text-lilac-950 sm:text-[1.6rem]">
            <span className="line-clamp-2">{title}</span>
          </h3>
          <p className="min-h-[4.65rem] text-sm leading-6 text-slate-600">
            <span className="line-clamp-3">{description}</span>
          </p>
        </div>

        <div className="mt-5 flex min-h-[74px] flex-wrap content-start gap-2 border-t border-slate-200/80 pt-4">
          {stack.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-7 items-center rounded-full border border-lilac-200/70 bg-lilac-100/55 px-2.5 font-['Inter'] text-[0.7rem] font-bold text-lilac-700 transition duration-300 hover:border-lilac-300 hover:bg-white hover:text-lilac-900"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-1 pt-5">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={actionButtonClasses}
          >
            <Eye className="h-4 w-4" aria-hidden />
            Preview
          </button>
        </div>
      </div>

      </motion.article>

      {modalRoot ? createPortal(
        <AnimatePresence>
          {isModalOpen ? (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9999] flex h-[100svh] w-full items-start justify-center overflow-y-auto bg-lilac-950/70 p-2 backdrop-blur-md sm:h-dvh sm:items-center sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-h-[calc(100svh-1rem)] w-full max-w-5xl overflow-y-auto overflow-x-hidden rounded-[1.5rem] border border-lilac-200/80 bg-gradient-to-br from-white via-lilac-50/95 to-white shadow-[0_30px_90px_rgba(51,26,77,0.28)] ring-1 ring-white/70 backdrop-blur-2xl sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem] sm:rounded-3xl" aria-hidden>
                <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-lilac-300/30 blur-3xl" />
                <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-accent-sky/35 blur-3xl" />
              </div>

              <div className="relative grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                {image ? (
                  <section className="order-2 p-3 pt-0 sm:p-5 sm:pt-0 lg:order-1 lg:p-6 lg:pr-0">
                    <div className="rounded-[1.35rem] border border-white/80 bg-white/75 p-2.5 shadow-[0_20px_54px_rgba(147,51,234,0.14)] backdrop-blur-xl sm:rounded-[1.65rem] sm:p-3">
                      <div className="mb-3 flex items-center justify-between gap-3 px-1">
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-lilac-600 sm:text-xs sm:tracking-[0.22em]">Project Preview</p>
                        <span className="rounded-full bg-lilac-100/80 px-3 py-1 text-[0.65rem] font-black text-lilac-700">
                          Image
                        </span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="group relative overflow-hidden rounded-2xl border border-lilac-100/80 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                      >
                        <img
                          src={image}
                          alt={`${title} preview`}
                          className="h-auto max-h-[42svh] min-h-[180px] w-full object-contain object-center p-1.5 transition duration-700 group-hover:scale-[1.02] sm:max-h-[44svh] sm:min-h-[300px] sm:p-2 lg:max-h-none lg:min-h-[520px]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lilac-950/20 via-transparent to-white/10" />
                      </motion.div>
                    </div>
                  </section>
                ) : null}

                <section className="relative order-1 flex min-w-0 flex-col p-4 sm:p-7 lg:order-2 lg:p-8">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-lilac-200/80 bg-white/80 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.18em] text-lilac-700 shadow-[0_12px_30px_rgba(147,51,234,0.12)] backdrop-blur-xl sm:px-3.5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.24em]">
                        <span className="h-2 w-2 rounded-full bg-lilac-500 shadow-[0_0_18px_rgba(147,51,234,0.7)]" />
                        {categoryLabel}
                      </span>
                      <h4 className="mt-3 break-words text-2xl font-black leading-[1.08] text-lilac-950 sm:mt-4 sm:text-4xl lg:text-5xl">
                        {title}
                      </h4>
                      {role ? (
                        <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.13em] text-lilac-600/85 sm:mt-3 sm:text-sm sm:tracking-[0.16em]">
                          {role}
                        </p>
                      ) : null}
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ rotate: 90, scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setIsModalOpen(false)}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lilac-200/80 bg-white/85 text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition duration-300 hover:border-lilac-300 hover:bg-lilac-50 hover:text-lilac-950 hover:shadow-[0_14px_32px_rgba(147,51,234,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-300/70 sm:h-11 sm:w-11"
                      aria-label="Close project preview"
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </motion.button>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-lilac-900/72 sm:mt-6 sm:text-base sm:leading-8">
                    {description}
                  </p>

                  {stats.length > 0 ? (
                    <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3 lg:grid-cols-1 xl:grid-cols-3">
                      {stats.map((item, index) => (
                        <FeaturePill key={item} item={item} index={index} />
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 border-t border-lilac-200/60 pt-5 sm:mt-7 sm:pt-6">
                    <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-lilac-600 sm:text-xs sm:tracking-[0.22em]">Tech Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5">
                      {stack.map((tag) => (
                        <motion.span
                          key={`${title}-modal-${tag}`}
                          whileHover={{ y: -2, scale: 1.03 }}
                          className="inline-flex min-h-8 items-center rounded-full border border-lilac-200/80 bg-lilac-100/70 px-3 py-1.5 text-[0.7rem] font-black text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition duration-300 hover:border-lilac-300 hover:bg-white hover:text-lilac-900 hover:shadow-[0_12px_26px_rgba(147,51,234,0.12)] sm:min-h-9 sm:px-4 sm:py-2 sm:text-xs"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {projectLinks.length > 0 ? (
                    <div className="mt-5 border-t border-lilac-200/60 pt-5 sm:mt-7 sm:pt-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-lilac-600 sm:text-xs sm:tracking-[0.22em]">Project Links</p>
                          <p className="mt-2 text-xs leading-6 text-lilac-900/62 sm:text-sm">
                            Open every available project destination from one clean preview area.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
                        {projectLinks.map((link) => (
                          <ProjectLinkCard
                            key={`${title}-${link.label}`}
                            href={link.href}
                            icon={link.icon}
                            label={link.label}
                            meta={link.meta}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {moreProjects.length > 0 ? (
                    <div className="mt-5 border-t border-lilac-200/60 pt-5 sm:mt-7 sm:pt-6">
                      <div>
                        <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-lilac-600 sm:text-xs sm:tracking-[0.22em]">More Projects</p>
                        <p className="mt-2 text-xs leading-6 text-lilac-900/62 sm:text-sm">
                          Continue exploring related portfolio work without leaving the preview.
                        </p>
                      </div>
                      <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
                        {moreProjects.map((project) => (
                          <MoreProjectCard key={`${title}-more-${project.id}`} project={project} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </section>
              </div>
            </motion.div>
          </motion.div>
          ) : null}
        </AnimatePresence>,
        modalRoot,
      ) : null}
    </>
  )
}

export default ProjectCard
