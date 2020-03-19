const mongoose = require('mongoose')

const clubsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  schedule: {
    type: String
  },
  capacity: {
    type: Number
  },
  minAge: {
    type: Number
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  photoUrl: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})

const clubsModel = mongoose.model('clubs', clubsSchema)
module.exports = clubsModel
