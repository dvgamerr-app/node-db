const mongo = require('../../index')

mongo.dbname = 'db-task'
mongo.set(require('./bnk48'))
module.exports = mongo
