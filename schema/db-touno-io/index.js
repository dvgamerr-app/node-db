const mongo = require('../../index')

mongo.dbname = 'db-myself'
mongo.set(require('./donate'))
module.exports = mongo
