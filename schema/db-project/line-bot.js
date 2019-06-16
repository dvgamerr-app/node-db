const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'LineBot',
    name: 'line-bot',
    schema: {
      botname: { type: String, index: true, unique: true, require: true },
      name: String,
      accesstoken: String,
      secret: String,
      options: Object,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'LineNotify',
    name: 'line-notify',
    schema: {
      botname: { type: String, index: true, require: true, Ref: 'LineBot' },
      payload: { type: Mixed, default: null },
      userTo: { type: String, index: true, require: true },
      notify: { type: Boolean, index: true, default: false },
      schedule: { type: Date, index: true, default: null },
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
