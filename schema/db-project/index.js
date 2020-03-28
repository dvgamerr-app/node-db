const mongo = require('../../index')('db-project')

mongo.set(require('./exhentai'))
mongo.set(require('./package-tracking'))
mongo.set(require('./team-touno'))
mongo.set(require('./manga'))
module.exports = mongo
