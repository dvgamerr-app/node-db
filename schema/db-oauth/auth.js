module.exports = [
  {
    id: 'Auth',
    name: 'auth',
    schema: {
      email: { type: String, index: true, unique: true },
      username: { type: String, index: true, unique: true },
      password: String,
      permission: String,
      created: { type: Date, index: true, default: Date.now  },
      enabled: { type: Boolean, index: true, default: true }
    }
  },
  {
    id: 'Auth3rd',
    name: 'auth-3rd',
    schema: {
      name: { type: String, index: true, require: true, unique: true },
      key: { type: String, index: true, require: true, unique: true },
      type: { type: String, index: true },
      scope: String,
      state: String,
      client: {
        id: String,
        secret: String
      },
      auth: {
        tokenHost: String,
        tokenPath: String,
        authorizePath: String
      },
      token: Object,
      updated: { type: Date, index: true, default: Date.now },
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'AuthSession',
    name: 'auth-session',
    schema: {
      username: { type: String, index: true, ref: 'Auth' },
      token: String,
      hash: String,
      online: { type: Boolean, index: true, default: false },
      expired: { type: Date, index: true },
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
