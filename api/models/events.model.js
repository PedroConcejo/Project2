const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  club: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'clubs' 
  },
  style: {
    type: String,
  },
  day: {
    type: Date,
  },
  minAge: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  photo: {
    type: String,
  },
})

const eventsModel = mongoose.model('events', eventsSchema)
module.exports = eventsModel
