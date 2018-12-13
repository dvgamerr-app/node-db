const mongoose = require('mongoose')
module.exports = [
  {
    id: 'WakaSummaries',
    name: 'db-wakatime',
    schema: mongoose.Schema({
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
      created: Date,
      updated: Date
    })
  },
  {
    id: 'WakaProjects',
    name: 'db-wakatime-project',
    schema: mongoose.Schema({
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
      created: Date,
      updated: Date
    })
  }
]
