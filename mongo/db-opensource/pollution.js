const mongoose = require('mongoose')
module.exports = [
  {
    id: 'PollutionStation',
    name: 'db-pollution-station',
    schema: mongoose.Schema({
      region: { index: true, type: String },
      region_name: { en: String, th: String },
      id: { index: true, type: String },
      station_name: { en: String, th: String },
      area_name: { en: String, th: String },
      type: { index: true, type: String },
      lat: String,
      long: String
    })
  },
  {
    id: 'Pollution',
    name: 'db-pollution',
    schema: mongoose.Schema({
      station_id: { index: true, type: String },
      created: { index: true, type: Date },
      data: mongoose.Schema.Types.Mixed
    })
  }
]
