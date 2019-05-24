const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'LineBot',
    name: 'linebot',
    schema: {
      type: { type: String, index: true, require: true },
      botname: { type: String, index: true, require: true },
      name: String,
      accesstoken: String,
      secret: String,
      options: Object,
      channel: Mixed,
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
