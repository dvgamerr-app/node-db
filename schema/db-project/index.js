const mongo = require('../../index')('db-project')

mongo.set(require('./exhentai'))
mongo.set(require('./rotomu'))
module.exports = mongo
