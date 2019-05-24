const mongo = require('../../index')

mongo.dbname = 'db-oauth'
mongo.set(require('./auth'))
module.exports = mongo
