module.exports = [
  {
    id: 'OAuth',
    name: 'oauth-3rd',
    schema: mongoose.Schema({
      name: { type: String, index: true },
      key: { type: String, index: true },
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
      updated: { type: Date, index: true },
      created: { type: Date, index: true }
    })
  },
  {
    id: 'AuthAccount',
    name: 'db-auth-account',
    schema: mongoose.Schema({
      username: { type: String, index: true, unique: true },
      email: { type: String, index: true, unique: true },
      password: String,
      permission: String,
      created: { type: Date, index: true },
      enabled: { type: Boolean, index: true }
    })
  },
  {
    id: 'AuthSession',
    name: 'db-auth-session',
    schema: mongoose.Schema({
      username: String,
      token: String,
      hash: String,
      online: Boolean,
      created: { type: Date, index: true }
    })
  }
]