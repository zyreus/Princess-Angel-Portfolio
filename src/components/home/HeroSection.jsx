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
  return (
    <section className="grid items-center gap-8 rounded-2xl bg-gradient-to-br from-white via-purple-50 to-violet-100/70 p-5 shadow-soft sm:p-6 md:grid-cols-2 md:gap-10 md:p-10">
      <div className="animate-fadeInUp space-y-5 md:space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">Creative Technologist</p>
        <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
          Hi, I&apos;m Princess Angel Paslot ✨
        </h1>
        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
          {roles.map((role, index) => (
            <span key={role}>
              {role}
              {index < roles.length - 1 ? ' • ' : ''}
            </span>
          ))}
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

      <div className="mx-auto w-full max-w-md animate-fadeInUp rounded-2xl border border-purple-200/80 bg-white/70 p-3 shadow-soft sm:p-4">
        <img
          src={profileImage}
          alt="Princess Angel Paslot"
          className="aspect-square w-full rounded-2xl object-cover shadow-[0_0_40px_rgba(124,58,237,0.25)]"
        />
      </div>
    </section>
  )
}

export default HeroSection
