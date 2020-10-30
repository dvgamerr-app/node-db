const mongo = require('../../index')('db-notice')

mongo.set(require('./notice'))
module.exports = mongo
