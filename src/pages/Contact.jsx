import { useState } from 'react'
import { AlertCircle, CheckCircle2, Code2, Copy, LoaderCircle, Mail, Send } from 'lucide-react'
import SectionHeading from '../components/shared/SectionHeading'
import { profile } from '../data/portfolio'

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.66v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26h-2.66V9.75h2.55v1.17h.04c.35-.68 1.23-1.39 2.52-1.39 2.7 0 3.2 1.78 3.2 4.09v4.72Z" />
    </svg>
  )
}

const initialFormData = { name: '', email: '', subject: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'mt-1.5 w-full rounded-xl border border-lilac-200/70 bg-white px-4 py-2.5 text-sm text-lilac-900 outline-none transition duration-200 placeholder:text-lilac-400/60 focus:border-lilac-700 focus:ring-2 focus:ring-lilac-100'

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const { name, email, message } = formData
    if (!name.trim() || !email.trim() || !message.trim())
      return 'Please fill in your name, email, and message.'
    if (!emailPattern.test(email.trim())) return 'Please enter a valid email address.'
    return ''
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status.type === 'error') setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) { setStatus({ type: 'error', message: err }); return }
    setIsSending(true)
    setStatus({ type: 'loading', message: 'Sending your message…' })
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Failed to send. Please try again.')
      setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." })
      setFormData(initialFormData)
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Please email me directly.' })
    } finally {
      setIsSending(false)
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isSuccess = status.type === 'success'
  const isError = status.type === 'error'

  return (
    <section className="space-y-10 py-12 md:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="I'm open to administrative, operations, data management, and IT roles. Feel free to reach out."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="card p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-semibold uppercase tracking-wide text-lilac-700">
              Name *
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-wide text-lilac-700">
              Email *
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
            </label>
          </div>
          <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-lilac-700">
            Subject
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Job Opportunity, Inquiry…" className={inputClass} />
          </label>
          <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-lilac-700">
            Message *
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about the role or opportunity…" className={`${inputClass} resize-none`} />
          </label>

          {status.message ? (
            <p
              className={`mt-4 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${isError ? 'border-red-200 bg-red-50 text-red-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}
              aria-live="polite"
            >
              {isError
                ? <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                : <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSending}
            className="btn-primary mt-5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending
              ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
              : isSuccess
                ? <CheckCircle2 className="h-4 w-4" aria-hidden />
                : <Send className="h-4 w-4" aria-hidden />}
            {isSending ? 'Sending…' : isSuccess ? 'Sent!' : 'Send Message'}
          </button>
        </form>

        {/* ── Sidebar ── */}
        <aside className="space-y-4">
          <div className="card p-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-lilac-200/60 bg-lilac-50 px-2.5 py-1 text-[11px] font-semibold text-lilac-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
              Open to work
            </div>
            <h3 className="mt-4 text-sm font-semibold text-lilac-900">Direct email</h3>
            <p className="mt-1 break-all text-sm text-lilac-700">{profile.email}</p>
            <button
              type="button"
              onClick={copyEmail}
              className="btn-secondary mt-3 px-3.5 py-1.5 text-xs"
            >
              <Copy className="h-3.5 w-3.5" aria-hidden />
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>

          <div className="card p-5">
            <h3 className="section-kicker mb-3">Find me online</h3>
            <div className="space-y-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-xl border border-lilac-200/50 bg-lilac-50 px-3.5 py-2.5 text-sm font-medium text-lilac-800 transition hover:border-lilac-300 hover:bg-lilac-100"
              >
                <Code2 className="h-4 w-4 text-lilac-600" aria-hidden />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-xl border border-lilac-200/50 bg-lilac-50 px-3.5 py-2.5 text-sm font-medium text-lilac-800 transition hover:border-lilac-300 hover:bg-lilac-100"
              >
                <LinkedInIcon className="h-4 w-4 text-lilac-600" aria-hidden />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2.5 rounded-xl border border-lilac-200/50 bg-lilac-50 px-3.5 py-2.5 text-sm font-medium text-lilac-800 transition hover:border-lilac-300 hover:bg-lilac-100"
              >
                <Mail className="h-4 w-4 text-lilac-600" aria-hidden />
                Gmail
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Contact
