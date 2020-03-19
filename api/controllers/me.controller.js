const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  updateMe,
  deleteMe,
  getFavClubs,
  addFavClubById,
  deleteFavClubById,
  getFavEvents,
  addFavEvent,
  deleteFavEventById
}

/*******************************************************
 * User Account Methods
 *******************************************************/
function updateMe (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteMe (req, res) {
  UserModel
    .findByIdAndDelete(res.locals.user._id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

/*******************************************************
 * Favourite Club Methods
 *******************************************************/

// user.clubsFav

function getFavClubs (req, res) {
  UserModel
    .find(res.locals.user._id)
    .populate('clubsFav')
    .then(response => res.json({ clubsFav: response[0].clubsFav }))
    .catch((err) => handleError(err, res))
}

function addFavClubById (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id,
      { $push: { clubsFav: req.params.clubId } },
      { new: true }
    )
    .populate('clubsFav')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteFavClubById (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id,
      { $pull: { clubsFav: req.params.clubId } },
      { new: true }
    )
    .populate('clubsFav')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

/*******************************************************
 * Favourite Events Methods
 *******************************************************/

// user.eventsFav
function getFavEvents (req, res) {
  UserModel
    .find(res.locals.user._id)
    .populate('eventsFav')
    .then(response => res.json({ eventsFav: response[0].eventsFav }))
    .catch((err) => handleError(err, res))
}

function addFavEvent (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id,
      { $push: { eventsFav: req.params.eventId } },
      { new: true }
    )
    .populate('eventsFav')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteFavEventById (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id,
      { $pull: { eventsFav: req.params.eventId } },
      { new: true }
    )
    .populate('eventsFav')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
