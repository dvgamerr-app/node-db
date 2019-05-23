const mongoose = require('mongoose')

module.exports = [
  // {
  //   id: 'LineNotify',
  //   name: 'db-linebot-notify',
  //   schema: {
  //     replyId: String,
  //     roomId: String,
  //     roomType: String,
  //     endpoint: { index: true, type: String },
  //     schedule: { index: true, type: Date },
  //     sender: Object,
  //     sended: { index: true, type: Boolean },
  //     created: { type: Date, index: true, default: Date.now }
  //   }
  // },
  {
    id: 'LineOutbound',
    name: 'db-linebot-outbound',
    schema: {
      botname: { type: String, index: true, ref: 'LineBot' },
      userTo: String,
      type: String,
      sender: Object,
      sended: Boolean,
      error: String,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'LineInbound',
    name: 'db-linebot-inbound',
    schema: {
      type: String,
      botname: { type: String, index: true, ref: 'LineBot' },
      replyToken: String,
      source: Object,
      message: Object,
      joined: Object,
      left: Object,
      postback: Object,
      things: Object,
      beacon: Object,
      timestamp: { type: Number, index: true },
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'LineBot',
    name: 'db-linebot',
    schema: {
      type: { type: String, index: true, require: true },
      botname: { type: String, index: true, require: true },
      name: String,
      accesstoken: String,
      secret: String,
      options: Object,
      channel: mongoose.Schema.Types.Mixed,
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
