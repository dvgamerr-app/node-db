const { MongoConnection, MongoSchemaMapping } = require('../db-mongo')

global._dbTounoConn = {
  connected: () => false
}

module.exports = {
  connected: () => global._dbTounoConn.connected(),
  open: async () => {
    if (!global._dbTounoConn.connected()) {
      global._dbTounoConn = await MongoConnection(process.env.MONGODB_NAME_TOUNO || 'db_touno')
      MongoSchemaMapping(global._dbTounoConn, require('./anime'))
      MongoSchemaMapping(global._dbTounoConn, require('./app'))
      MongoSchemaMapping(global._dbTounoConn, require('./donate'))
      MongoSchemaMapping(global._dbTounoConn, require('./expanse'))
      MongoSchemaMapping(global._dbTounoConn, require('./github'))
      MongoSchemaMapping(global._dbTounoConn, require('./schedule'))
      MongoSchemaMapping(global._dbTounoConn, require('./wakatime'))
    }
    return global._dbTounoConn
  }
}
