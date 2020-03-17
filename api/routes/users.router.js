const router = require('express').Router()

const {
  getUser,
  updateUser,
  deleteUserById,
  getFavClubs,
  getFavClub,
  addFavClub,
  deleteFavClub,
  getFavEvents,
  getFavEvent,
  addFavEvent,
  deleteFavEvent

} = require('../controllers/users.controller')

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)
router.get('/:id/clubs', getFavClubs)
router.get('/:id/clubs/:idClub', getFavClub)
router.put('/:id/clubs', addFavClub)
router.delete('/:id/clubs', deleteFavClub)
router.get('/:id/events', getFavEvents)
router.get('/:id/events/:idEvent', getFavEvent)
router.put('/:id/events', addFavEvent)
router.delete('/:id/events', deleteFavEvent)

module.exports = router
