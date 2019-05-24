const mongo = require('../../index')

module.exports = [
  {
    id: 'Audit',
    name: 'audit',
    schema: {
      service: { type: String, index: true, require: true },
      group: { type: String, index: true, default: null },
      scope: { type: String, index: true, default: 'system' },
      status: { type: String, index: true, default: 'debug' },
      permission: { type: Number, index: true, default: 0 },
      message: mongo.Schema.Mixed,
      raw: String,
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
