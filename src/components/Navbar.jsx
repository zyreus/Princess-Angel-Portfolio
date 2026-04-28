import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { IconMenuRound } from './icons/LineIcons'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Creative', path: '/creative-portfolio' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-lilac-200/50 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3.5 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-cute-gradient font-display text-sm font-bold tracking-wide sm:text-base">Princess Angel</p>
          <div className="hidden items-center gap-1 md:flex md:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `group relative rounded-full px-3 py-2 text-xs font-medium transition duration-300 md:text-sm ${
                    isActive ? 'text-lilac-800' : 'text-lilac-900/80 hover:text-lilac-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-1 left-3 h-0.5 rounded-full bg-gradient-to-r from-lilac-400 to-lilac-600 transition-all duration-300 ${
                        isActive ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
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
            className="inline-flex items-center gap-2 rounded-full border border-lilac-200/80 bg-lilac-50/50 px-3 py-2 text-xs font-semibold text-lilac-700 transition hover:border-lilac-300 hover:bg-white md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <IconMenuRound className="h-4 w-4" />
            <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        <div
          className={`${isMenuOpen ? 'mt-3 flex' : 'hidden'} flex-col gap-1 rounded-2xl border border-lilac-200/60 bg-white/95 p-2 shadow-diffuse md:hidden`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={`${link.path}-mobile`}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
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
