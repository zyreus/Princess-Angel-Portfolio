import { ArrowRight, ArrowUp, BriefcaseBusiness, CheckCircle2, Code2, GraduationCap, Home, Mail, MapPin, Send, Sparkles, Star, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../assets/princess-profile.png'
import { profile } from '../data/portfolio'

const infoCards = [
  { title: 'Email', description: profile.email, icon: Mail },
  { title: 'Location', description: profile.location, icon: MapPin },
  { title: 'Availability', description: 'Open for select projects', icon: CheckCircle2 },
]

const navigationLinks = [
  { label: 'About', to: '/about', icon: UserRound },
  { label: 'Projects', to: '/projects', icon: BriefcaseBusiness },
  { label: 'Certificates', to: '/certificates', icon: GraduationCap },
  { label: 'Achievements', to: '/achievements', icon: Star },
  { label: 'Contact', to: '/contact', icon: Send },
]

const quickLinks = [
  { label: 'Skills', to: '/about#skills', icon: Sparkles },
  { label: 'Experience', to: '/achievements', icon: BriefcaseBusiness },
  { label: 'Resume', href: '/resume.pdf', icon: Code2 },
  { label: 'Education', to: '/certificates', icon: GraduationCap },
  { label: 'Services', to: '/contact', icon: Home },
]

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: Code2 },
  { label: 'LinkedIn', href: profile.linkedin, icon: BriefcaseBusiness },
  { label: 'Facebook', href: profile.facebook, icon: UserRound },
  { label: 'Gmail', href: `mailto:${profile.email}`, icon: Mail },
]

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function LogoMark({ className = 'h-12 w-12' }) {
  return (
    <span className={`${className} inline-flex shrink-0 overflow-hidden rounded-2xl border border-[#E9DDFD] bg-white/80 shadow-[0_12px_32px_rgba(139,92,246,0.14)] backdrop-blur-xl`}>
      <img src={profileImage} alt="Princess Angel Paslot" className="h-full w-full object-cover" />
    </span>
  )
}

function SectionTitle({ children }) {
  return (
    <h3 className="font-display text-base font-bold text-[#1E1B4B]">
      {children}
    </h3>
  )
}

function FooterLink({ item }) {
  const Icon = item.icon
  const className =
    'group flex items-center gap-3 rounded-2xl border border-transparent px-2.5 py-2 text-sm font-semibold text-[#6B7280] transition duration-300 hover:-translate-y-0.5 hover:border-[#E9DDFD] hover:bg-white/75 hover:text-[#1E1B4B] hover:shadow-[0_16px_34px_rgba(139,92,246,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/60'
  const content = (
    <>
      <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA] transition duration-300 group-hover:scale-125 group-hover:bg-[#8B5CF6]" />
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#E9DDFD] bg-white/80 text-[#8B5CF6] transition duration-300 group-hover:scale-105 group-hover:bg-[#8B5CF6] group-hover:text-white">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span>{item.label}</span>
    </>
  )

  if (item.href) {
    return (
      <a href={item.href} className={className} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return (
    <Link to={item.to} className={className}>
      {content}
    </Link>
  )
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 px-6 pb-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[#F8F6FC]/90 p-5 shadow-[0_24px_70px_rgba(139,92,246,0.13)] backdrop-blur-2xl sm:p-7 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#A78BFA]/20 blur-3xl" />
            <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-white/75 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
          </div>

          <div className="relative grid gap-9 lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.95fr] lg:gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <LogoMark />
                <div>
                  <p className="font-display text-xl font-bold leading-tight text-[#1E1B4B]">
                    Princess Angel Paslot
                  </p>
                  <a href={`mailto:${profile.email}`} className="mt-1 block break-all text-sm font-semibold text-[#8B5CF6] transition hover:text-[#1E1B4B]">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E9DDFD] to-transparent" />

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {infoCards.map((card) => {
                  const Icon = card.icon

                  return (
                    <motion.div
                      key={card.title}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-3xl border border-[#E9DDFD] bg-white/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl transition duration-300 hover:border-[#A78BFA]/70 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(139,92,246,0.15)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F8F6FC] text-[#8B5CF6] ring-1 ring-[#E9DDFD] transition duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#1E1B4B]">{card.title}</p>
                          <p className="mt-1 break-words text-xs leading-5 text-[#6B7280]">{card.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.nav variants={itemVariants} aria-label="Footer navigation" className="space-y-5">
              <SectionTitle>Navigation</SectionTitle>
              <div className="space-y-2">
                {navigationLinks.map((item) => (
                  <FooterLink key={item.label} item={item} />
                ))}
              </div>
            </motion.nav>

            <motion.nav variants={itemVariants} aria-label="Footer quick links" className="space-y-5">
              <SectionTitle>Quick Links</SectionTitle>
              <div className="space-y-2">
                {quickLinks.map((item) => (
                  <FooterLink key={item.label} item={item} />
                ))}
              </div>
            </motion.nav>

            <motion.div variants={itemVariants} className="space-y-5">
              <div className="space-y-3">
                <SectionTitle>Stay Connected</SectionTitle>
                <p className="text-sm leading-7 text-[#6B7280]">
                  Let&apos;s connect and build something amazing together.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                      whileHover={{ y: -3, scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex h-14 items-center justify-center rounded-2xl border border-[#E9DDFD] bg-white/70 text-[#8B5CF6] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition duration-300 hover:border-[#A78BFA] hover:bg-white hover:shadow-[0_18px_38px_rgba(139,92,246,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/60"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" aria-hidden />
                    </motion.a>
                  )
                })}
              </div>

              <Link to="/contact" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#A78BFA]/70 bg-white/75 px-5 py-3 text-sm font-bold text-[#8B5CF6] shadow-[0_14px_34px_rgba(139,92,246,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:shadow-[0_18px_42px_rgba(139,92,246,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/70">
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative mt-10 border-t border-[#E9DDFD] pt-6">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="flex items-start gap-3">
                <LogoMark className="h-11 w-11 rounded-xl" />
                <div>
                  <p className="text-sm font-bold text-[#1E1B4B]">
                    © 2026 Princess Angel Paslot.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                    Crafting digital experiences with <span className="font-bold text-[#8B5CF6]">creativity</span> and <span className="font-bold text-[#8B5CF6]">code</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:justify-end">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#A78BFA]/70 bg-white/70 text-[#8B5CF6] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6] hover:bg-white hover:shadow-[0_16px_34px_rgba(139,92,246,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/70"
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5" aria-hidden />
                </button>
                <span className="text-sm font-bold text-[#1E1B4B]">Back to Top</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
