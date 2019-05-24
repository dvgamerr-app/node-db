module.exports = [
  {
    id: 'WakaSummaries',
    name: 'wakatime',
    schema: {
      name: { index: true, type: String },
      type: { index: true, type: String },
      date: { index: true, type: Date },
      total: {
        hours: Number,
        minutes: Number,
        seconds: Number
      },
      total_digital: String,
      total_text: String,
      total_seconds: Number,
      updated: { type: Date, index: true, default: Date.now },
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'WakaProjects',
    name: 'wakatime-project',
    schema: {
      project: { index: true, type: String },
      name: { index: true, type: String },
      type: { index: true, type: String },
      date: { index: true, type: Date },
      storage: { index: true, type: String },
      repositories: String,
      total: {
        hours: Number,
        minutes: Number,
        seconds: Number
      },
      total_digital: String,
      total_text: String,
      total_seconds: Number,
      updated: { type: Date, index: true, default: Date.now },
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
