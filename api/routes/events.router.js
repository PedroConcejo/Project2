const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllEvents
} = require('../controllers/events.controller')

router.get('/events', getAllEvents)

module.exports = router
