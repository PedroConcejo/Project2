const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllEvents,
  getEvent,
} = require('../controllers/events.controller')

router.get('/', getAllEvents)
router.get('/:eventId', getEvent)


module.exports = router
