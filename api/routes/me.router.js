const router = require('express').Router()
const {
  updateMe,
  deleteMe,
  getFavClubs,
  addFavClubById,
  deleteFavClubById,
  getFavEvents,
  addFavEvent,
  deleteFavEventById
} = require('../controllers/me.controller')

// User Account Router
router.put('/', updateMe)
router.delete('/', deleteMe)

// Favourite Club Routes
router.get('/clubs', getFavClubs)
router.post('/clubs/:clubId', addFavClubById)
router.delete('/clubs/:clubId', deleteFavClubById)

// Favourite Events Routes
router.get('/events', getFavEvents)
router.post('/events/:eventId', addFavEvent)
router.delete('/events/:eventId', deleteFavEventById)

module.exports = router
