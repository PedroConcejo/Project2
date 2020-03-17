const ClubsModel = require('../models/clubs.model')
const { handleError } = require('../utils')

module.exports = {
  getAllClubs,
  getClub,
  }


function getAllClubs (req, res) {
  res.json("All Clubs")
    /*ClubsModel
    .find({ user: res.locals.user._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))*/
}

function getClub (req, res) {
  res.json("One Club")
  /*ClubsModel
  .find({ user: res.locals.user._id })
  .then(response => res.json(response))
  .catch((err) => handleError(err, res))*/
}