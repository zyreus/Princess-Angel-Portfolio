import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const port = process.env.PORT || 5000
const emailUser = process.env.EMAIL_USER
const emailPass = process.env.EMAIL_PASS
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const requestLog = new Map()
const windowMs = 15 * 60 * 1000
const maxRequestsPerWindow = 5

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
})

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }

    callback(new Error('Not allowed by CORS'))
  },
}))
app.use(express.json({ limit: '12kb' }))

function sanitizeText(value, maxLength) {
  return String(value || '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function sanitizeMessage(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, 2500)
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function rateLimit(request, response, next) {
  const key = request.ip || request.headers['x-forwarded-for'] || 'unknown'
  const now = Date.now()
  const hits = (requestLog.get(key) || []).filter((timestamp) => now - timestamp < windowMs)

  if (hits.length >= maxRequestsPerWindow) {
    response.status(429).json({ error: 'Too many messages. Please try again later.' })
    return
  }

  hits.push(now)
  requestLog.set(key, hits)
  next()
}

function buildEmailTemplate({ name, email, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Portfolio Message</title>
      </head>
      <body style="margin:0;background:#f6f0ff;font-family:Inter,Segoe UI,Arial,sans-serif;color:#2f2354;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f0ff;padding:24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;overflow:hidden;border-radius:24px;background:#ffffff;box-shadow:0 18px 48px rgba(124,58,237,0.16);">
                <tr>
                  <td style="background:linear-gradient(135deg,#8b5cf6,#c084fc);padding:28px 32px;color:#ffffff;">
                    <p style="margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Portfolio Contact</p>
                    <h1 style="margin:0;font-size:28px;line-height:1.25;font-weight:800;">New message from ${safeName}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px 32px;">
                    <p style="margin:0 0 22px;font-size:16px;line-height:1.7;color:#59447d;">Someone submitted your portfolio contact form. Reply directly to this email to continue the conversation.</p>
                    <div style="border:1px solid #eadcff;border-radius:18px;overflow:hidden;">
                      <div style="padding:18px 20px;background:#fbf8ff;border-bottom:1px solid #eadcff;">
                        <p style="margin:0 0 6px;font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#7c3aed;">Name</p>
                        <p style="margin:0;font-size:16px;font-weight:700;color:#2f2354;">${safeName}</p>
                      </div>
                      <div style="padding:18px 20px;background:#ffffff;border-bottom:1px solid #eadcff;">
                        <p style="margin:0 0 6px;font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#7c3aed;">Email</p>
                        <p style="margin:0;font-size:16px;color:#2f2354;"><a href="mailto:${safeEmail}" style="color:#7c3aed;text-decoration:none;font-weight:700;">${safeEmail}</a></p>
                      </div>
                      <div style="padding:18px 20px;background:#ffffff;">
                        <p style="margin:0 0 10px;font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#7c3aed;">Message</p>
                        <p style="margin:0;font-size:16px;line-height:1.75;color:#3f315f;">${safeMessage}</p>
                      </div>
                    </div>
                    <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#8b7aa7;">This email was sent automatically through the secure portfolio contact API.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

app.get('/api/health', (request, response) => {
  response.json({ status: 'ok' })
})

app.post('/api/contact', rateLimit, async (request, response) => {
  try {
    if (!emailUser || !emailPass) {
      response.status(500).json({ error: 'Email service is not configured.' })
      return
    }

    const name = sanitizeText(request.body.name, 80)
    const email = sanitizeText(request.body.email, 120)
    const message = sanitizeMessage(request.body.message)

    if (!name || !email || !message) {
      response.status(400).json({ error: 'Name, email, and message are required.' })
      return
    }

    if (!isValidEmail(email)) {
      response.status(400).json({ error: 'Please enter a valid email address.' })
      return
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailUser,
      replyTo: `"${name}" <${email}>`,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: buildEmailTemplate({ name, email, message }),
    })

    response.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact form email failed:', error)
    response.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`)
})
