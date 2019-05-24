const moment = require('moment-timezone')
moment.tz.setDefault(process.env.TZ || 'Asia/Bangkok')

module.exports = {
  myself: require('./db-myself'),
  oauth: require('./db-oauth'),
  logging: require('./db-logging'),
  touno: require('./db-touno-io')
}
