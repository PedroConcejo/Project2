const EventsModel = require('../models/events.model')
const { handleError } = require('../utils')

module.exports = {
  getAllEvents
}

function getAllEvents (req, res) {
  EventsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
