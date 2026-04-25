import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Creative', path: '/creative-portfolio' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <p className="text-sm font-semibold tracking-wide text-purple-700 md:text-base">Princess Angel</p>
        <div className="flex flex-wrap justify-end gap-2 md:gap-3">
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
