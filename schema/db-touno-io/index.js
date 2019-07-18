const mongo = require('../../index')('db-touno-io')

mongo.set(require('./donate'))
mongo.set(require('./resume'))
mongo.set(require('./team-dev'))
module.exports = mongo
