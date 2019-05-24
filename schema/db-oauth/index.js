const mongo = require('../../index')('db-oauth')

mongo.set(require('./auth'))
module.exports = mongo
