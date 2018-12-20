const { MongoConnection, MongoSchemaMapping } = require('../db-mongo')

global._dbOpenSourceConn = {
  connected: () => false
}
module.exports = {
  connected: () => global._dbOpenSourceConn.connected(),
  open: async () => {
    if (!global._dbOpenSourceConn.connected()) {
      global._dbOpenSourceConn = await MongoConnection(process.env.MONGODB_NAME_OPENSOURCE || 'db_opensource')
      MongoSchemaMapping(global._dbOpenSourceConn, require('./exhentai'))
      MongoSchemaMapping(global._dbOpenSourceConn, require('./pokedex'))
      MongoSchemaMapping(global._dbOpenSourceConn, require('./anilist'))
      MongoSchemaMapping(global._dbOpenSourceConn, require('./bnk48'))
    }
    return global._dbOpenSourceConn
  }
}
