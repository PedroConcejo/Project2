const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const authRouter = require('./auth.router')
const clubsRouter = require('./clubs.router')
const eventsRouter = require('./events.router')
const meRouter = require('./me.router')
const usersRouter = require('./users.router')

router.use('/auth', authRouter)
router.use('/clubs', clubsRouter)
router.use('/events', eventsRouter)
router.use('/me', authUser, meRouter)
router.use('/users', usersRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
