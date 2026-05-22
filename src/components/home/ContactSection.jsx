import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { BriefcaseBusiness, CheckCircle2, Code2, Copy, Mail, MessageCircle, Send } from 'lucide-react'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'
import { profile } from '../../data/portfolio'

const socials = [
  { label: 'GitHub', href: profile.github, icon: Code2 },
  { label: 'LinkedIn', href: profile.linkedin, icon: BriefcaseBusiness },
  { label: 'Facebook', href: profile.facebook, icon: MessageCircle },
  { label: 'Gmail', href: `mailto:${profile.email}`, icon: Mail },
]

const hasEmailJsConfig = Boolean(
  import.meta.env.VITE_EMAILJS_SERVICE_ID
    && import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    && import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
)

function ContactSection() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    try {
      if (!hasEmailJsConfig) {
        setStatus('EmailJS is not configured yet. Add the EmailJS environment variables to enable direct delivery.')
        return
      }

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )

      setStatus(`Message sent directly to ${profile.email}.`)
      form.reset()
    } catch {
      setStatus('Something went wrong. Please email me directly instead.')
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setStatus('Email copied to clipboard.')
  }

  return (
    <MotionSection id="contact" className="space-y-9">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build a polished system, dashboard, or brand experience."
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
          <input type="hidden" name="to_email" value={profile.email} />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-lilac-800">
              Name
              <input name="from_name" required className="mt-2 w-full rounded-2xl border border-lilac-200/70 bg-white/90 px-4 py-3 text-sm text-lilac-900 outline-none transition placeholder:text-lilac-400 focus:border-lilac-400" placeholder="Your name" />
            </label>
            <label className="text-sm font-semibold text-lilac-800">
              Email
              <input type="email" name="reply_to" required className="mt-2 w-full rounded-2xl border border-lilac-200/70 bg-white/90 px-4 py-3 text-sm text-lilac-900 outline-none transition placeholder:text-lilac-400 focus:border-lilac-400" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-lilac-800">
            Message
            <textarea name="message" required rows="6" className="mt-2 w-full resize-none rounded-2xl border border-lilac-200/70 bg-white/90 px-4 py-3 text-sm text-lilac-900 outline-none transition placeholder:text-lilac-400 focus:border-lilac-400" placeholder="Tell me about your project or role..." />
          </label>
          <button type="submit" className="premium-button mt-5 w-full sm:w-auto">
            <Send className="h-4 w-4" />
            Send Message
          </button>
          {status ? <p className="mt-4 flex items-start gap-2 text-sm text-lilac-800/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{status}</p> : null}
        </form>

        <aside className="space-y-4">
          <div className="glass-card p-6">
            <p className="premium-pill w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to work
            </p>
            <h3 className="mt-5 text-2xl font-bold text-lilac-900">Fastest way to reach me</h3>
            <p className="mt-3 break-all text-lilac-800/80">{profile.email}</p>
            <button type="button" onClick={copyEmail} className="premium-button-secondary mt-5">
              <Copy className="h-4 w-4" />
              Copy email
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="glass-card glass-card-hover flex items-center gap-3 p-5">
                <Icon className="h-5 w-5 text-lilac-500" />
                <span className="font-bold text-lilac-800">{label}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </MotionSection>
  )
}

export default ContactSection
