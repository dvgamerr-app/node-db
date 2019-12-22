module.exports = [
  {
    id: 'RotomuConfig',
    name: 'rotomu',
    schema: {
      id: { index: true, type: String, require: true, unique: true },
      type: { index: true, type: String },
      permission: {
        news: { index: true, type: Boolean },
        pokedex: { index: true, type: Boolean },
        event: { index: true, type: Boolean }
      },
      created: { index: true, type: Date, Default: Date.now }
    }
  }
]
