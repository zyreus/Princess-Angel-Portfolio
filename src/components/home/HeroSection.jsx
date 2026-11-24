import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import profileImage from '../../assets/princess-profile.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

function HeroSection() {
  return (
    <section
      id="home"
      className="relative grid min-h-[calc(100vh-72px)] items-center gap-12 md:grid-cols-2 md:gap-16"
      aria-label="Introduction"
    >
      {/* ── Left column ── */}
      <div className="space-y-6">

        {/* "HELLO, I'M" label */}
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-lilac-700"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.08)}
          className="font-display text-4xl font-semibold leading-[1.1] text-lilac-900 sm:text-5xl lg:text-[3.25rem]"
        >
          Princess Angel
          <br />
          <span className="text-lilac-700">R. Paslot</span>
        </motion.h1>

        {/* Professional title */}
        <motion.p
          {...fadeUp(0.16)}
          className="text-base font-medium text-lilac-900/60 sm:text-lg"
        >
          IT &amp; Administrative Professional
        </motion.p>

        {/* Divider */}
        <motion.span
          {...fadeUp(0.2)}
          className="block h-px w-12 bg-lilac-700/40"
          aria-hidden
        />

        {/* Introduction */}
        <motion.p
          {...fadeUp(0.24)}
          className="max-w-md text-[0.95rem] font-normal leading-[1.8] text-lilac-900/70"
        >
          I combine technical knowledge, organizational skills, and attention to detail
          to support efficient business operations and digital solutions.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.32)}
          className="flex flex-wrap gap-3 pt-1"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-lilac-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-lilac-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-700 focus-visible:ring-offset-2"
          >
            View My Work
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 rounded-full border border-lilac-200 bg-white px-6 py-3 text-sm font-semibold text-lilac-800 transition duration-200 hover:border-lilac-400 hover:bg-lilac-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-700 focus-visible:ring-offset-2"
          >
            <ArrowDownToLine className="h-4 w-4" aria-hidden />
            Download Resume
          </Link>
        </motion.div>

      </div>

      {/* ── Right column — photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative mx-auto w-full max-w-[360px] md:max-w-none"
      >
        {/* Soft lavender glow behind photo */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl bg-lilac-100/70 blur-2xl"
          aria-hidden
        />

        {/* Photo frame */}
        <div className="overflow-hidden rounded-3xl border border-lilac-200/60 bg-white shadow-[0_12px_48px_rgba(91,58,142,0.10)]">
          <img
            src={profileImage}
            alt="Princess Angel R. Paslot"
            loading="eager"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>

        {/* Credential badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-5 left-5 rounded-2xl border border-lilac-200/70 bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(91,58,142,0.10)]"
        >
          <p className="text-xs font-semibold text-lilac-700">BS Information Technology</p>
          <p className="mt-0.5 text-[11px] font-normal text-lilac-900/55">Davao del Norte State College</p>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-4 right-5 inline-flex items-center gap-1.5 rounded-full border border-lilac-200/70 bg-white px-3 py-1.5 shadow-[0_4px_16px_rgba(91,58,142,0.08)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
          <span className="text-[11px] font-semibold text-lilac-800">Open to work</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
