const moment = require('moment-timezone')
moment.tz.setDefault(process.env.TZ || 'Asia/Bangkok')

module.exports = {
  dbtouno: require('./db-myself')
}
