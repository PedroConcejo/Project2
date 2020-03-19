const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllClubs,
  createClub,
  updateCLub,
  getClub,
  deleteClub,
  getClubEvent,
  createClubEvent,
  deleteClubEvent,
  updateClubEvent
} = require('../controllers/clubs.controller')

router.get('/', getAllClubs)
router.post('/', authUser, createClub)
router.put('/:clubId', authUser, updateCLub)
router.get('/:clubId', getClub)
router.delete('/:clubId', authUser, deleteClub)
router.get('/:clubId/events', getClubEvent)
router.post('/:clubId/events', authUser, createClubEvent)
router.delete('/:clubId/events/:eventId', deleteClubEvent)
router.put('/:clubId/events/:eventId', updateClubEvent)

module.exports = router
