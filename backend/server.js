import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { checkRateLimit, sendContactEmail, validateContactPayload } from './contactMailer.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const port = process.env.PORT || 5000
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

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

function rateLimit(request, response, next) {
  const key = request.ip || request.headers['x-forwarded-for'] || 'unknown'

  if (!checkRateLimit(key)) {
    response.status(429).json({ error: 'Too many messages. Please try again later.' })
    return
  }

  next()
}

app.get('/api/health', (request, response) => {
  response.json({ status: 'ok' })
})

app.post('/api/contact', rateLimit, async (request, response) => {
  try {
    const { data, error } = validateContactPayload(request.body)

    if (error) {
      response.status(400).json({ error })
      return
    }

    await sendContactEmail(data)

    response.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact form email failed:', error)
    response.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`)
})
