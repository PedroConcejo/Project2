const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clubs'
  },
  musicStyle: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  minAge: {
    type: Number
  },
  phone: {
    type: String
  },
  photoUrl: {
    type: String
  }
})

const eventsModel = mongoose.model('events', eventsSchema)
module.exports = eventsModel
