const router = require('express').Router()

const {
  getUser,
  updateUser,
  deleteUserById,
  getFavClubs,
  addFavClub,
  deleteFavClub,
  getFavEvent,
  addFavEvent,
  deleteFavEvent
} = require('../controllers/users.controller')

router.get('/', getUser)
router.put('/', updateUser)
router.delete('/', deleteUserById)

router.get('/clubs', getFavClubs)
router.post('/clubs', addFavClub)
router.delete('/clubs', deleteFavClub)

router.get('/events', getFavEvent)
router.post('/events', addFavEvent)
router.delete('/events/', deleteFavEvent)

module.exports = router
