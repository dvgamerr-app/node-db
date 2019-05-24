const mongo = require('../../index')

mongo.dbname = 'db-logging'
mongo.set(require('./audit'))
mongo.set(require('./http'))
mongo.set(require('./line-bot'))
module.exports = mongo
