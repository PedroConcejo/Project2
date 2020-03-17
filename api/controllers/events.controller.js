const EventsModel = require('../models/events.model')
const { handleError } = require('../utils')

module.exports = {
  getAllEvents
}

function getAllEvents (req, res) {
  res.json('All Events')
  /* ClubsModel
    .find({ user: res.locals.user._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res)) */
}
