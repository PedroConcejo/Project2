const mongoose = require('mongoose')

const clubsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  schelude: {
    type: String,
  },
  capacity: {
    type: Number,
  },
  minAge: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  webpage: {
    type: String,
  },
  photo: {
    type: String,
  }
})

const clubsModel = mongoose.model('clubs', clubsSchema)
module.exports = clubsModel
