const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
}

function getAllUsers (req, res) {
  UserModel
    .find()
    .then(users => res.json(users))
    .catch((err) => handleError(err, res))
}

function getUserById (req, res) {
  UserModel
    .findById(req.params.userId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateUserById (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .findByIdAndDelete(req.params.userId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
