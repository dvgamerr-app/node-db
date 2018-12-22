const mongoose = require('mongoose')
module.exports = [
  {
    id: 'LineNotify',
    name: 'db-linebot-notify',
    schema: mongoose.Schema({
      replyId: String,
      roomId: String,
      roomType: String,
      endpoint: { index: true, type: String },
      schedule: { index: true, type: Date },
      sender: Object,
      sended: { index: true, type: Boolean },
      created: Date
    })
  },
  {
    id: 'LineBot',
    name: 'db-linebot',
    schema: mongoose.Schema({
      endpoint: { index: true, type: String },
      channel: String,
      secret: String,
      token: String,
      active: { index: true, type: Boolean },
      created: Date
    })
  }
]
