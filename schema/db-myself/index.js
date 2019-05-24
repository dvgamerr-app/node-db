const mongo = require('../../index')

mongo.dbname = 'db-myself'
mongo.set(require('./expanse'))
mongo.set(require('./linebot'))
mongo.set(require('./schedule'))
mongo.set(require('./storage'))
mongo.set(require('./wakatime'))
module.exports = mongo
