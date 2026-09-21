const express = require('express')
const router = express.Router()
const tours = require('../data/tours')

router.get('/', (req, res) => {
  const { category } = req.query
  if (category && category !== 'All') {
    return res.json(tours.filter(t => t.category === category))
  }
  res.json(tours)
})

router.get('/:id', (req, res) => {
  const tour = tours.find(t => t.id === parseInt(req.params.id))
  if (!tour) return res.status(404).json({ error: 'Tour not found' })
  res.json(tour)
})

module.exports = router
