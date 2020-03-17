const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const clubsRouter = require('./clubs.router')
const eventsRouter = require('./events.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/clubs', clubsRouter)
router.use('/events', eventsRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
