const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllClubs,
  createClub,
  getClub,
  deleteClub,
  getClubEvent,
  createClubEvent,
  deleteClubEvent
} = require('../controllers/clubs.controller')

router.get('/', getAllClubs)
router.post('/', authUser, createClub)
router.get('/:clubId', getClub)
router.delete('/:clubId', deleteClub)
router.get('/:clubId/events', getClubEvent)
router.post('/:clubId/events', createClubEvent)
router.delete('/:clubId/events/:eventId', deleteClubEvent)

module.exports = router
