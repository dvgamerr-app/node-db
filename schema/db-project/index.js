const mongo = require('../../index')('db-project')

mongo.set(require('./exhentai'))
mongo.set(require('./rotomu'))
mongo.set(require('./line-bot'))
module.exports = mongo
