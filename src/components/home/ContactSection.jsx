import { useState } from 'react'
import { AlertCircle, BriefcaseBusiness, CheckCircle2, Code2, Copy, LoaderCircle, Mail, MessageCircle, Send } from 'lucide-react'
import MotionSection from '../shared/MotionSection'
import SectionHeading from '../shared/SectionHeading'
import { profile } from '../../data/portfolio'

const socials = [
  { label: 'GitHub', href: profile.github, icon: Code2 },
  { label: 'LinkedIn', href: profile.linkedin, icon: BriefcaseBusiness },
  { label: 'Facebook', href: profile.facebook, icon: MessageCircle },
  { label: 'Gmail', href: `mailto:${profile.email}`, icon: Mail },
]

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const validateForm = () => {
    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (!name || !email || !message) {
      return 'Please fill out your name, email, and message.'
    }

    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address.'
    }

    return ''
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))

    if (status.type === 'error') {
      setStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validateForm()

    if (validationError) {
      setStatus({ type: 'error', message: validationError })
      return
    }

    setIsSending(true)
    setStatus({ type: 'loading', message: 'Sending your message...' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }

      setStatus({ type: 'success', message: 'Message sent successfully! I’ll get back to you soon.' })
      setFormData(initialFormData)
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please email me directly instead.' })
    } finally {
      setIsSending(false)
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setStatus({ type: 'success', message: 'Email copied to clipboard.' })
  }

  const isSuccess = status.type === 'success'
  const isError = status.type === 'error'

  return (
    <MotionSection id="contact" className="space-y-9">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build a polished system, dashboard, or brand experience."
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-lilac-800">
              Name
              <input name="name" value={formData.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-lilac-200/70 bg-white/90 px-4 py-3 text-sm text-lilac-900 outline-none transition placeholder:text-lilac-400 focus:border-lilac-400" placeholder="Your name" />
            </label>
            <label className="text-sm font-semibold text-lilac-800">
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-lilac-200/70 bg-white/90 px-4 py-3 text-sm text-lilac-900 outline-none transition placeholder:text-lilac-400 focus:border-lilac-400" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-lilac-800">
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" className="mt-2 w-full resize-none rounded-2xl border border-lilac-200/70 bg-white/90 px-4 py-3 text-sm text-lilac-900 outline-none transition placeholder:text-lilac-400 focus:border-lilac-400" placeholder="Tell me about your project or role..." />
          </label>
          <button
            type="submit"
            disabled={isSending}
            className={`premium-button mt-5 w-full transition disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto ${isSuccess ? 'scale-[1.02]' : ''} ${isError ? 'ring-2 ring-red-200' : ''}`}
          >
            {isSending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : isSuccess ? <CheckCircle2 className="h-4 w-4 animate-bounce text-emerald-100" /> : <Send className="h-4 w-4" />}
            {isSending ? 'Sending...' : isSuccess ? 'Message Sent' : isError ? 'Try Again' : 'Send Message'}
          </button>
          {status.message ? (
            <p
              className={`mt-4 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm transition ${isError ? 'border-red-200 bg-red-50 text-red-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}
              aria-live="polite"
            >
              {isError ? <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> : <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />}
              {status.message}
            </p>
          ) : null}
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
