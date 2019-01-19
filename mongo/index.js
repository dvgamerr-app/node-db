const moment = require('moment-timezone')
moment.tz.setDefault(process.env.TZ || 'Asia/Bangkok')

module.exports = {
  touno: require('./db-touno'),
  crypto: require('./db-crypto'),
  opensource: require('./db-opensource'),
  website: require('./db-website')
}
