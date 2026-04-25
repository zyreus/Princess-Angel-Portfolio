import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../../assets/princess-profile.png'

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
    <section className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-white via-purple-50 to-violet-100/70 p-5 shadow-soft sm:p-6 md:grid-cols-2 md:gap-10 md:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-52 w-52 rounded-full bg-purple-200/60 blur-3xl" />
        <div className="absolute bottom-0 -left-16 h-52 w-52 rounded-full bg-violet-200/50 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-56 w-56 rounded-full bg-fuchsia-200/50 blur-3xl" />
      </div>
      <div className="animate-fadeInUp space-y-5 md:space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">Creative Technologist</p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-purple-700 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Princess Angel Paslot
          </span>
        </h1>
        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
          <span className="mr-2 text-gray-500">Role:</span>
          <span key={roles[roleIndex]} className="font-semibold text-purple-700 transition-opacity duration-500">
            {roles[roleIndex]}
          </span>
        </p>
        <p className="max-w-xl text-gray-700">
          I create aesthetic visuals and build smart digital systems-blending creativity, communication, and
          technology.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/creative-portfolio"
            className="w-full rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-soft sm:w-auto"
          >
            View My Work
          </Link>
          <Link
            to="/projects"
            className="w-full rounded-full border border-purple-300 bg-white px-6 py-2.5 text-center text-sm font-semibold text-purple-700 transition duration-300 hover:scale-[1.03] hover:border-purple-500 sm:w-auto"
          >
            Explore Projects
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md animate-fadeInUp rounded-2xl border border-purple-200/80 bg-white/70 p-3 shadow-soft sm:p-4">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-400/50 to-violet-400/50 blur-xl animate-pulseGlow" />
        <img
          src={profileImage}
          alt="Princess Angel Paslot"
          className="aspect-square w-full rounded-2xl object-cover shadow-[0_0_40px_rgba(124,58,237,0.25)] animate-float"
        />
      </div>
    </section>
  )
}

export default HeroSection
