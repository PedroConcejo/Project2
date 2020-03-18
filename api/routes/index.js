const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const clubsRouter = require('./clubs.router')
const eventsRouter = require('./events.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/me', authUser, usersRouter)
router.use('/clubs', clubsRouter)
router.use('/events', eventsRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
