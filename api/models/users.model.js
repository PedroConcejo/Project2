const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    // TODO: Make sure unique index works from Mongoose
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: false,
    default: 'male'
  },
  birthDate: {
    type: Date
  },
  phone: {
    type: String
  },
  photoUrl: {
    type: String,
    required: false
  },
  eventsFav: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events',
    required: false
  }],
  clubsFav: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clubs',
    required: false
  }]
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
