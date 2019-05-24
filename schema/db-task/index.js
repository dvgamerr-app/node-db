const mongo = require('../../index')('db-task')

mongo.set(require('./bnk48'))
mongo.set(require('./pokemon-go'))
mongo.set(require('./crontab'))
module.exports = mongo
