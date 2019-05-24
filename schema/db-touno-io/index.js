const mongo = require('../../index')('db-touno-io')

mongo.set(require('./donate'))
mongo.set(require('./resume'))
module.exports = mongo
