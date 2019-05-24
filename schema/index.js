const moment = require('moment-timezone')
moment.tz.setDefault(process.env.TZ || 'Asia/Bangkok')

module.exports = {
  logging: require('./db-logging'),
  myself: require('./db-myself'),
  oauth: require('./db-oauth'),
  project: require('./db-project'),
  task: require('./db-task'),
  touno: require('./db-touno-io')
}
