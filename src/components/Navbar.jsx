import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/', section: 'home' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/', section: 'skills' },
  { label: 'Experience', path: '/', section: 'experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact', section: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header
      className={`sticky top-0 z-50 border-b border-lilac-200/50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? 'shadow-[0_2px_16px_rgba(91,58,142,0.08)]' : ''}`}
    >
      <nav className="mx-auto w-full max-w-[1280px] px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 text-sm font-bold tracking-tight text-lilac-900 transition hover:text-lilac-700"
          >
            <span className="grid h-9 w-9 overflow-hidden rounded-xl border border-lilac-200/70 bg-white shadow-diffuse">
              <img src="/site-icon.png" alt="" className="h-full w-full object-cover" aria-hidden />
            </span>
            <span className="hidden sm:block">Princess Angel R. Paslot</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `group relative rounded-full px-3 py-2 text-xs font-semibold transition duration-200 ${isActive || isLinkActive(link.path, link.section)
                    ? 'text-lilac-700'
                    : 'text-lilac-900/70 hover:text-lilac-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-lilac-700 transition-all duration-300 ${isActive || isLinkActive(link.path, link.section) ? 'w-4' : 'w-0 group-hover:w-4'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop resume button */}
          <div className="hidden items-center gap-3 xl:flex">
            <Link to="/resume" className="premium-button py-2.5 text-xs">
              <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden />
              Resume
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200/80 bg-lilac-50/60 px-3 py-2 text-xs font-semibold text-lilac-700 transition hover:border-lilac-300 hover:bg-white xl:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
            <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen ? (
          <div className="mt-3 flex flex-col gap-1 rounded-3xl border border-lilac-200/60 bg-white/95 p-2 shadow-diffuse xl:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={`${link.label}-mobile`}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${isActive || isLinkActive(link.path, link.section)
                    ? 'bg-lilac-100/80 text-lilac-800'
                    : 'text-lilac-800/90 hover:bg-lilac-50 hover:text-lilac-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-1 border-t border-lilac-100 pt-2">
              <Link
                to="/resume"
                onClick={closeMenu}
                className="premium-button w-full"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden />
                Download Resume
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
