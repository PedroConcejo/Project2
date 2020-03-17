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

/*events{
  name: string,
  clubs:string,
  style: string,
  dia de evento:date,
  min-age: number,
  phone: number,
  photo: string,
  club: {mongoose.Schema.Types.ObjectId, ref:'clubs'}
  }*/