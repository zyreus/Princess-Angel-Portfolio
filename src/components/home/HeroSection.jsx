import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight, Briefcase, Database, Cpu } from 'lucide-react'

/**
 * Profile photo lives at public/images/profile-photo.png.
 * Replace that file at any time — same filename, page auto-updates on next build.
 * Falls back to a neutral lavender placeholder if the image is missing.
 */
const PROFILE_PHOTO_SRC = '/images/profile-photo.png'

const expertise = [
  { label: 'Administrative Support', icon: Briefcase },
  { label: 'Data Management', icon: Database },
  { label: 'IT Solutions', icon: Cpu },
]

const stagger = (i) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
})

function ProfilePhoto() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-[400px] md:mx-0 md:max-w-none">
      {/* Soft lavender glow */}
      <div
        className="absolute -inset-4 -z-10 rounded-[28px] bg-lilac-100/60 blur-2xl"
        aria-hidden
      />

      {/* Square photo frame — aspect-square enforces 1:1 */}
      <div className="relative overflow-hidden rounded-[22px] border border-lilac-200/50 bg-lilac-100 shadow-[0_16px_56px_rgba(91,58,142,0.12)] aspect-square w-full">
        {hasError ? (
          /* Neutral placeholder when image not found */
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-lilac-100 text-lilac-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" />
            </svg>
            <p className="text-xs font-medium">Add photo at public/images/profile-photo.png</p>
          </div>
        ) : (
          <img
            src={PROFILE_PHOTO_SRC}
            alt="Princess Angel R. Paslot"
            loading="eager"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>

      {/* Degree badge — bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-4 left-4 rounded-xl border border-lilac-200/60 bg-white px-3.5 py-2 shadow-card"
      >
        <p className="text-[11px] font-semibold text-lilac-700">BS Information Technology</p>
        <p className="mt-0.5 text-[10px] font-normal text-lilac-900/50">Davao del Norte State College</p>
      </motion.div>

      {/* Open-to-work badge — top-right */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-lilac-200/60 bg-white px-3 py-1.5 shadow-card"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
        <span className="text-[11px] font-semibold text-lilac-800">Open to work</span>
      </motion.div>
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100svh-72px)] items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
      aria-label="Introduction"
    >
      {/* ── LEFT: text ── */}
      <div className="space-y-5">
        <motion.p {...stagger(0)} className="text-xs font-semibold uppercase tracking-[0.28em] text-lilac-700">
          Hello, I&apos;m
        </motion.p>

        <motion.h1 {...stagger(1)} className="font-display text-[2.4rem] font-bold leading-[1.1] text-lilac-900 sm:text-5xl lg:text-[3rem]">
          Princess Angel
          <br />
          <span className="page-heading">R. Paslot</span>
        </motion.h1>

        <motion.p {...stagger(2)} className="text-base font-medium text-lilac-900/55 sm:text-lg">
          IT &amp; Administrative Professional
        </motion.p>

        <motion.span {...stagger(3)} className="block h-px w-10 bg-lilac-700/35" aria-hidden />

        <motion.p {...stagger(4)} className="max-w-[46ch] text-[0.95rem] leading-[1.8] text-lilac-900/65">
          I&apos;m an Information Technology graduate with capabilities in administrative support,
          data management, documentation, and digital solutions. I combine technical knowledge
          and organizational skills to support efficient business operations.
        </motion.p>

        {/* Expertise indicators */}
        <motion.div {...stagger(5)} className="flex flex-wrap gap-2">
          {expertise.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200 bg-lilac-50 px-3.5 py-1.5 text-xs font-medium text-lilac-700"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...stagger(6)} className="flex flex-wrap gap-3 pt-1">
          <Link
            to="/projects"
            className="btn-primary"
          >
            View My Work
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary"
          >
            <ArrowDownToLine className="h-4 w-4" aria-hidden />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* ── RIGHT: square photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        <ProfilePhoto />
      </motion.div>
    </section>
  )
}

export default HeroSection
