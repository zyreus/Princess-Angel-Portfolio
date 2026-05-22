import { checkRateLimit, sendContactEmail, validateContactPayload } from '../backend/contactMailer.js'

function getRequestBody(request) {
  if (!request.body) {
    return {}
  }

  if (typeof request.body === 'string') {
    try {
      return JSON.parse(request.body)
    } catch {
      return {}
    }
  }

  return request.body
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({ error: 'Method not allowed.' })
    return
  }

  const forwardedFor = request.headers['x-forwarded-for']
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(',')[0]?.trim() || request.socket?.remoteAddress || 'unknown'

  if (!checkRateLimit(ip)) {
    response.status(429).json({ error: 'Too many messages. Please try again later.' })
    return
  }

  try {
    const { data, error } = validateContactPayload(getRequestBody(request))

    if (error) {
      response.status(400).json({ error })
      return
    }

    await sendContactEmail(data)
    response.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Vercel contact function failed:', error)
    response.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
}
