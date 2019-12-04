const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'LineNotify',
    name: 'line-notify',
    schema: {
      endpoint: { type: String, require: true },
      method: { type: String, require: true },
      botname: { type: String, index: true },
      payload: { type: Mixed, default: null },
      notify: { type: Boolean, index: true, default: false },
      schedule: { type: Date, index: true, default: Date.now }
    }
  }
]
