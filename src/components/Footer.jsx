import { ArrowUp, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.66v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26h-2.66V9.75h2.55v1.17h.04c.35-.68 1.23-1.39 2.52-1.39 2.7 0 3.2 1.78 3.2 4.09v4.72Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Contact', path: '/contact' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-lilac-200/50 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 lg:px-8">

        <div className="grid gap-8 md:grid-cols-[1fr_auto]">

          {/* Brand */}
          <div className="max-w-sm space-y-3">
            <p className="font-display text-base font-semibold text-lilac-900">Princess Angel R. Paslot</p>
            <p className="text-sm text-lilac-900/55">IT &amp; Administrative Professional — administrative support, data management, digital operations, and IT solutions.</p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-lilac-200/60 bg-lilac-50 text-lilac-600 transition hover:border-lilac-300 hover:bg-lilac-100 hover:text-lilac-800"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-lilac-700">Quick Links</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-lilac-900/60 transition hover:text-lilac-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-lilac-100 pt-6 sm:flex-row">
          <p className="text-xs text-lilac-900/45">
            © 2026 Princess Angel R. Paslot. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200/60 bg-lilac-50 px-3 py-1.5 text-xs font-medium text-lilac-700 transition hover:border-lilac-300 hover:bg-lilac-100"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
