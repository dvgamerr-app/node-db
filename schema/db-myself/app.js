const mongoose = require('mongoose')
module.exports = [
  {
    id: 'Touno',
    name: 'app-touno.io',
    schema: mongoose.Schema({
      group: String,
      item: String,
      data: mongoose.Schema.Types.Mixed
    })
  },
  {
    id: 'TounoTimeline',
    name: 'app-touno-timeline',
    schema: mongoose.Schema({
      title: { type: String, index: true },
      subtitle: String,
      image: String,
      quote: String,
      detail: String,
      color: String,
      datetime: Date,
      created: { type: Date, index: true }
    })
  },
  {
    id: 'LogNotify',
    name: 'log-notify',
    schema: mongoose.Schema({
      endpoint: { type: String, index: true },
      message: mongoose.Schema.Types.Mixed,
      notify: { type: Boolean, index: true },
      schedule: { type: Date, index: true },
      created: Date
    })
  },
  {
    id: 'LogRequest',
    name: 'log-request',
    schema: mongoose.Schema({
      url: String,
      token: Boolean,
      ipaddress: String,
      requested: Date,
      created: { type: Date, index: true }
    })
  },
  {
    id: 'LogAudit',
    name: 'log-audit',
    schema: mongoose.Schema({
      type: { type: String, index: true },
      scope: { type: String, index: true },
      message: String,
      tag: Array,
      created: { type: Date, index: true }
    })
  }
]
