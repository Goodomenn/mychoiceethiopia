const express = require('express')
const cors = require('cors')
const contactRouter = require('./routes/contact')
const toursRouter = require('./routes/tours')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Routes
app.use('/api/contact', contactRouter)
app.use('/api/tours', toursRouter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MyChoiceEthiopia API running' })
})

app.listen(PORT, () => {
  console.log(`✦ MyChoiceEthiopia server running at http://localhost:${PORT}`)
})
