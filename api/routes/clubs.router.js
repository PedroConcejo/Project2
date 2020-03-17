const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const {
  getAllClubs,
  getClub,
} = require('../controllers/clubs.controller')

router.get('/', getAllClubs)
router.get('/:clubId', getClub)


module.exports = router
