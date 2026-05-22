import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDownToLine, BriefcaseBusiness, Code2, Mail, Rocket } from 'lucide-react'
import profileImage from '../../assets/princess-profile.png'
import { profile, roles, stats } from '../../data/portfolio'

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 1700)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section
      id="home"
      className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-lilac-200/50 bg-gradient-to-br from-white via-lilac-50/80 to-accent-sky/25 p-6 shadow-diffuse sm:p-8 md:grid-cols-2 md:gap-10 md:p-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-52 w-52 rounded-full bg-lilac-200/40 blur-3xl" />
        <div className="absolute bottom-0 -left-16 h-52 w-52 rounded-full bg-accent-pink/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-56 w-56 rounded-full bg-accent-sky/35 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative space-y-6"
      >
        <div className="premium-pill w-fit">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
          Available for freelance and developer roles
        </div>
        <p className="eyebrow">Creative Technologist</p>
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-lilac-900 sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="gradient-text">Princess Angel Paslot</span>
        </h1>
        <p className="text-base leading-8 text-lilac-900/85 sm:text-lg">
          I create aesthetic visuals and build smart digital systems as a{' '}
          <span key={roles[roleIndex]} className="font-bold text-lilac-700">
            {roles[roleIndex]}
          </span>.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/projects" className="premium-button w-full sm:w-auto">
            <Rocket className="h-4 w-4" />
            View Projects
          </Link>
          <Link to="/resume" className="premium-button-secondary w-full sm:w-auto">
            <ArrowDownToLine className="h-4 w-4" />
            View Resume
          </Link>
          <Link to="/contact" className="premium-button-secondary w-full sm:w-auto">
            <Mail className="h-4 w-4" />
            Hire Me
          </Link>
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-lilac-200/60 bg-white/70 p-4">
              <p className="text-2xl font-bold text-lilac-800">{item.value}</p>
              <p className="mt-1 text-xs font-medium text-lilac-700/80">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-lilac-700">
          <a href={profile.github} className="premium-pill transition hover:text-lilac-900" target="_blank" rel="noreferrer">
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
          <a href={profile.linkedin} className="premium-pill transition hover:text-lilac-900" target="_blank" rel="noreferrer">
            <BriefcaseBusiness className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="premium-pill transition hover:text-lilac-900">
            <Mail className="h-4 w-4" />
            Gmail
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-lilac-300/45 to-lilac-400/35 blur-3xl" />
        <div className="relative rounded-3xl border border-lilac-200/60 bg-white/70 p-3 shadow-diffuse backdrop-blur-sm">
          <img
            src={profileImage}
            alt="Princess Angel Paslot"
            loading="eager"
            className="aspect-square w-full animate-float rounded-2xl object-cover shadow-[0_12px_40px_rgba(180,156,248,0.22)]"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
