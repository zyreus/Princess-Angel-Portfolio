import { ArrowRight, ArrowUp, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../assets/princess-profile.png'
import { profile } from '../data/portfolio'

function GitHubMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.66v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26h-2.66V9.75h2.55v1.17h.04c.35-.68 1.23-1.39 2.52-1.39 2.7 0 3.2 1.78 3.2 4.09v4.72Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: GitHubMark },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInMark },
  { label: 'Gmail', href: `mailto:${profile.email}`, icon: Mail },
]

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-20 px-4 pb-8 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[40px] border border-lilac-200/70 bg-gradient-to-br from-white via-lilac-50/95 to-lilac-100/40 px-6 py-10 shadow-[0_28px_90px_rgba(147,51,234,0.14)] backdrop-blur-2xl sm:px-10 sm:py-12"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-lilac-300/25 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/80 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-lilac-400/10 blur-3xl" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left lg:gap-10">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-lilac-300/80 bg-white p-1.5 shadow-[0_22px_52px_rgba(147,51,234,0.18)]"
            >
              <img src={profileImage} alt="Princess Angel Paslot" className="h-full w-full rounded-full object-cover" />
            </motion.div>

            <div className="max-w-2xl space-y-6">
              <div className="space-y-4">
                <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.045em] text-lilac-950 sm:text-5xl">
                  Princess Angel Paslot
                </h2>
                <p className="max-w-xl text-lg leading-8 text-lilac-900/70 sm:text-xl sm:leading-9">
                  IT &amp; Administrative Professional — organized, tech-savvy, and ready to contribute.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 lg:items-end">
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    whileHover={{ y: -5, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.24 }}
                    className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-lilac-300/70 bg-white/55 text-lilac-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl transition duration-300 hover:border-lilac-400 hover:bg-white hover:text-lilac-800 hover:shadow-[0_18px_44px_rgba(147,51,234,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-400/60"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6 transition duration-300 group-hover:scale-110" aria-hidden />
                  </motion.a>
                )
              })}
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-lilac-300/80 bg-white/65 px-10 py-5 text-base font-bold text-lilac-800 shadow-[0_18px_42px_rgba(147,51,234,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-lilac-500 hover:bg-white hover:text-lilac-900 hover:shadow-[0_22px_54px_rgba(147,51,234,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-400/60"
            >
              Let&apos;s Work Together
              <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative my-10 h-px w-full bg-gradient-to-r from-transparent via-lilac-300/70 to-transparent" />

        <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <p className="max-w-2xl text-sm leading-7 text-lilac-900/65 sm:text-base">
            <span className="font-bold text-lilac-900">© 2026 Princess Angel R. Paslot.</span>
            <br />
            IT &amp; Administrative Professional — administrative support, data management, digital operations, and IT solutions.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-lilac-300/80 bg-white/55 text-lilac-700 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-lilac-500 hover:bg-white hover:text-lilac-900 hover:shadow-[0_16px_36px_rgba(147,51,234,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-400/60"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 transition duration-300 group-hover:-translate-y-0.5" aria-hidden />
            </button>
            <span className="text-sm font-bold text-lilac-950">Back to Top</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
