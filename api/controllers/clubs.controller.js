const ClubsModel = require('../models/clubs.model')
const EventsModel = require('../models/events.model')
const { handleError } = require('../utils')

module.exports = {
  getAllClubs,
  createClub,
  updateCLub,
  getClub,
  deleteClub,
  getClubEvent,
  createClubEvent,
  deleteClubEvent,
  updateClubEvent
}

function getAllClubs (req, res) {
  ClubsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createClub (req, res) {
  ClubsModel
    .create({ ...req.body, owner: res.locals.user._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateCLub (req, res) {
  ClubsModel
    .findByIdAndUpdate(req.params.clubId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getClub (req, res) {
  ClubsModel
    .findById(req.params.clubId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteClub (req, res) {
  ClubsModel
    .findByIdAndDelete(req.params.clubId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getClubEvent (req, res) {
  EventsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createClubEvent (req, res) {
  EventsModel
    .create({ ...req.body, club: req.params.clubId })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteClubEvent (req, res) {
  EventsModel
    .findByIdAndDelete(req.params.eventId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateClubEvent (req, res) {
  EventsModel
    .findByIdAndUpdate(req.params.eventId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
