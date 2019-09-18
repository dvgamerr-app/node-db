module.exports = [
  {
    id: 'PackageUser',
    name: 'package-user',
    schema: {
      username: { type: String, index: true, unique: true, require: true },
      email: String,
      notify_to: String,
      endpoint: String,
      token: Object,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'PackageTracking',
    name: 'package-tracking',
    schema: {
      serial_no: { type: String, index: true, unique: true, require: true },
      username: { type: String, index: true },
      tracking: { type: String, index: true },
      vender: String,
      detail: String,
      shop: String,
      completed: { type: Date, index: true, default: null },
      signed: Buffer,
      receiver: String,
      status: Number,
      lasted: String,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'PackageTrace',
    name: 'package-trace',
    schema: {
      serial_no: { type: String, index: true },
      datetime: { type: Date, index: true },
      department: String,
      note: String,
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
