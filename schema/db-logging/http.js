const { ObjectId } = require('../../type')

module.exports = [
  {
    id: 'HttpRequest',
    name: 'http-request',
    schema: {
      url: String,
      token: Boolean,
      ipaddress: String,
      requested: Date,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'HttpResponse',
    name: 'http-response',
    schema: {
      req_id: { type: ObjectId, index: true, ref: 'HttpRequest' },
      url: String,
      token: Boolean,
      ipaddress: String,
      requested: Date,
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
