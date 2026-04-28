import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../../assets/princess-profile.png'
import { IconHeartSm, IconStarSm } from '../icons/LineIcons'

const roles = [
  'Photographer',
  'Videographer',
  'Video Presenter',
  'Editor',
  'Graphic Designer',
  'Layout Artist',
  'Project Manager',
  'System Analyst',
]

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 1700)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-lilac-200/50 bg-gradient-to-br from-white via-lilac-50/80 to-accent-sky/25 p-6 shadow-diffuse sm:p-8 md:grid-cols-2 md:gap-10 md:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-52 w-52 rounded-full bg-lilac-200/40 blur-3xl" />
        <div className="absolute bottom-0 -left-16 h-52 w-52 rounded-full bg-accent-pink/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-56 w-56 rounded-full bg-accent-sky/35 blur-3xl" />
      </div>
      <div className="animate-fadeInUp space-y-5 md:space-y-6">
        <p className="eyebrow">Creative Technologist</p>
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-lilac-700 via-lilac-600 to-lilac-400 bg-clip-text text-transparent">
            Princess Angel Paslot
          </span>
        </h1>
        <p className="text-sm leading-relaxed text-lilac-900/90 md:text-base">
          <span className="mr-2 text-lilac-700/85">Role:</span>
          <span key={roles[roleIndex]} className="text-cute-gradient font-semibold transition-opacity duration-500">
            {roles[roleIndex]}
          </span>
        </p>
        <p className="max-w-xl leading-relaxed text-lilac-900/90">
          I create aesthetic visuals and build smart digital systems—blending creativity, communication, and technology.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/creative-portfolio" className="btn-gradient w-full sm:w-auto">
            View My Work
          </Link>
          <Link to="/projects" className="btn-ghost w-full sm:w-auto">
            Explore Projects
          </Link>
        </div>
        <p className="flex items-center gap-2 text-xs text-lilac-500/90">
          <IconStarSm className="h-4 w-4 shrink-0" aria-hidden />
          <span>Soft, thoughtful design with a technical edge</span>
          <IconHeartSm className="h-3.5 w-3.5 shrink-0 text-accent-pink-deep/70" aria-hidden />
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-md animate-fadeInUp rounded-3xl border border-lilac-200/60 bg-white/70 p-3 shadow-diffuse sm:p-4">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-lilac-300/45 to-lilac-400/35 blur-2xl animate-pulseGlow" />
        <img
          src={profileImage}
          alt="Princess Angel Paslot"
          className="aspect-square w-full rounded-2xl object-cover shadow-[0_12px_40px_rgba(180,156,248,0.22)] animate-float"
        />
      </div>
    </section>
  )
}

export default HeroSection
