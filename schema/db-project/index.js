const mongo = require('../../index')

mongo.dbname = 'db-project'
mongo.set(require('./exhentai'))
mongo.set(require('./rotomu'))
module.exports = mongo
