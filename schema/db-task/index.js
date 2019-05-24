const mongo = require('../../index')('db-task')

mongo.set(require('./bnk48'))
module.exports = mongo
