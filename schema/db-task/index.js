const mongo = require('../../index')('db-task')

mongo.set(require('./bnk48'))
mongo.set(require('./pokemon-go'))
mongo.set(require('./config'))
module.exports = mongo
