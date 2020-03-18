const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/:userId', getUserById)
router.put('/:userId', updateUserById)
router.delete('/:userId', deleteUserById)

module.exports = router
