const express = require('express')
const router = express.Router()

// In-memory store (replace with DB later)
const submissions = []

router.post('/', (req, res) => {
  const { name, email, phone, date, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const entry = {
    id: Date.now(),
    name, email, phone, date, message,
    receivedAt: new Date().toISOString(),
  }

  submissions.push(entry)
  console.log('[Contact Form Submission]', entry)

  return res.status(200).json({ success: true, message: 'Your message has been received. We\'ll respond within 24 hours.' })
})

router.get('/', (req, res) => {
  res.json(submissions)
})

module.exports = router
