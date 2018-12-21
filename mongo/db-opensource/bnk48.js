const mongoose = require('mongoose')
module.exports = [
  {
    id: 'BnkOta',
    name: 'db-bnk48-ota',
    schema: mongoose.Schema({
      userId: { index: true, type: String },
      displayName: String,
      pictureUrl: String,
      statusMessage: String,
      roomId: { index: true, type: String },
      roomType: { index: true, type: String },
      oshi: Array,
      updated: Date,
      created: Date
    })
  },
  {
    id: 'BnkMember',
    name: 'db-bnk48-member',
    schema: mongoose.Schema({
      id: { index: true, type: Number },
      nickname_th: { index: true, type: String },
      nickname_en: { index: true, type: String },
      position: String,
      birthday: { index: true, type: Date },
      small: String,
      full: String,
      name_th: String,
      name_en: String,
      height: String,
      province: String,
      like: String,
      blood: String,
      hobby: String
    })
  },
  {
    id: 'BnkSchedule',
    name: 'db-bnk48-schedule',
    schema: mongoose.Schema({
      id: { index: true, type: Number },
      name: String,
      date: {
        from: { index: true, type: Date },
        to: { index: true, type: Date }
      },
      place: String,
      detail: String,
      time: String,
      oshi: Array
    })
  }
]
