const mongo = require('../../index')

mongo.dbname = 'db-touno-io'
mongo.set(require('./donate'))
mongo.set(require('./resume'))
module.exports = mongo
