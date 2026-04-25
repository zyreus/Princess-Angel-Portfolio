import { NavLink } from 'react-router-dom'
import { useState } from 'react'

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
    <header className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-wide text-purple-700 sm:text-base">Princess Angel</p>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg border border-purple-200 px-3 py-1.5 text-xs font-semibold text-purple-700 transition hover:border-purple-400 md:hidden"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'mt-3 flex' : 'hidden'} flex-col gap-1 rounded-xl border border-purple-100 bg-white p-2 md:hidden`}>
          {navLinks.map((link) => (
            <NavLink
              key={`${link.path}-mobile`}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-purple-100 text-purple-700' : 'text-black hover:bg-purple-50 hover:text-purple-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden flex-wrap justify-end gap-2 md:flex md:gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative rounded-full px-2 py-1.5 text-xs font-medium transition duration-300 md:text-sm ${
                  isActive
                    ? 'text-purple-700'
                    : 'text-black hover:text-purple-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-2 h-0.5 bg-purple-600 transition-all duration-300 ${
                      isActive ? 'w-[calc(100%-1rem)]' : 'w-0 group-hover:w-[calc(100%-1rem)]'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
