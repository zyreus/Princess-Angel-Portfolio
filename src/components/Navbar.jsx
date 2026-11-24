import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-lilac-200/50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${isScrolled ? 'shadow-[0_1px_12px_rgba(91,58,142,0.07)]' : ''}`}
    >
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-3.5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-lilac-900 transition duration-200 hover:text-lilac-700"
        >
          <span className="grid h-8 w-8 overflow-hidden rounded-lg border border-lilac-200/60 bg-white shadow-sm">
            <img src="/site-icon.png" alt="" className="h-full w-full object-cover" aria-hidden />
          </span>
          <span className="hidden sm:block tracking-tight">Princess Angel R. Paslot</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === '/'}
              className={() =>
                `relative px-3.5 py-2 text-[13px] font-medium transition duration-200 ${isActive(link.path)
                  ? 'text-lilac-700'
                  : 'text-lilac-900/60 hover:text-lilac-700'
                }`
              }
            >
              {link.label}
              {isActive(link.path) ? (
                <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-lilac-700" />
              ) : null}
            </NavLink>
          ))}
        </div>

        {/* Desktop resume button */}
        <a
          href="/resume.pdf"
          download
          className="btn-primary hidden px-4 py-2 text-xs xl:inline-flex"
        >
          <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden />
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200 bg-white px-3 py-2 text-xs font-medium text-lilac-700 transition hover:border-lilac-300 hover:bg-lilac-50 xl:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          <span className="sr-only">{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen ? (
        <div className="border-t border-lilac-100 bg-white px-5 pb-4 pt-2 xl:hidden">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMenu}
                className={() =>
                  `rounded-xl px-3 py-2.5 text-sm font-medium transition duration-150 ${isActive(link.path)
                    ? 'bg-lilac-100 text-lilac-800'
                    : 'text-lilac-900/70 hover:bg-lilac-50 hover:text-lilac-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 pt-2 border-t border-lilac-100">
              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden />
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
