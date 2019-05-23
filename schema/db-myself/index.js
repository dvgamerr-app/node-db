const mongo = require('../../index')

mongo.dbname = 'db-myself'
mongo.set(require('./anime'))
mongo.set(require('./app'))
mongo.set(require('./donate'))
mongo.set(require('./expanse'))
mongo.set(require('./schedule'))
mongo.set(require('./wakatime'))
mongo.set(require('./linebot'))
module.exports = mongo
