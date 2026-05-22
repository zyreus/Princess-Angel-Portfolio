import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import profileImage from '../assets/princess-profile.png'

const navLinks = [
  { label: 'Home', path: '/', section: 'home' },
  { label: 'About me', path: '/about', section: 'about' },
  { label: 'Projects', path: '/projects', section: 'projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact', section: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { pathname } = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (pathname !== '/') return undefined

    const sections = navLinks
      .map((link) => link.section)
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  const isLinkActive = (path, section) => {
    if (pathname !== '/') return path === pathname
    if (section) return activeSection === section
    return path === pathname
  }

  return (
    <header className="sticky top-0 z-50 border-b border-lilac-200/50 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3.5 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-2 text-sm font-bold tracking-wide text-lilac-800 sm:text-base">
            <span className="grid h-9 w-9 overflow-hidden rounded-2xl border border-lilac-200/70 bg-white shadow-diffuse">
              <img src={profileImage} alt="Princess Angel Paslot" className="h-full w-full object-cover" />
            </span>
            <span>Princess Angel</span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `group relative rounded-full px-3 py-2 text-xs font-semibold transition duration-300 ${
                    isActive || isLinkActive(link.path, link.section)
                      ? 'text-lilac-800'
                      : 'text-lilac-900/75 hover:text-lilac-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-1 left-3 h-0.5 rounded-full bg-gradient-to-r from-lilac-400 to-lilac-600 transition-all duration-300 ${
                        isActive || isLinkActive(link.path, link.section)
                          ? 'w-[calc(100%-1.5rem)]'
                          : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-lilac-200/80 bg-lilac-50/50 px-3 py-2 text-xs font-semibold text-lilac-700 transition hover:border-lilac-300 hover:bg-white lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        <div
          className={`${isMenuOpen ? 'mt-3 flex' : 'hidden'} flex-col gap-1 rounded-3xl border border-lilac-200/60 bg-white/95 p-2 shadow-diffuse lg:hidden`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={`${link.label}-mobile`}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${
                  isActive || isLinkActive(link.path, link.section)
                    ? 'bg-lilac-100/90 text-lilac-800'
                    : 'text-lilac-800/90 hover:bg-lilac-50 hover:text-lilac-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
