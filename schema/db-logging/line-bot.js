module.exports = [
  {
    id: 'LineOutbound',
    name: 'linebot-outbound',
    schema: {
      botname: { type: String, index: true },
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
    name: 'linebot-inbound',
    schema: {
      type: String,
      botname: { type: String, index: true },
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
  }
]
