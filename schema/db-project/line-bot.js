const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'LineNotify',
    name: 'line-notify',
    schema: {
      endpoint: { type: String, require: true },
      payload: { type: Mixed, default: null },
      notify: { type: Boolean, index: true, default: false },
      schedule: { type: Date, index: true, default: Date.now }
    }
  }
]
