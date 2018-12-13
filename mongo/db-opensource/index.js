const { MongoConnection, MongoSchemaMapping } = require('../db-mongo')

let conn = {
  connected: () => false
}
module.exports = {
  connected: () => conn.connected(),
  open: async () => {
    if (!conn.connected()) {
      conn = await MongoConnection('db_opensource')
      MongoSchemaMapping(conn, require('./exhentai'))
      MongoSchemaMapping(conn, require('./pokedex'))
      MongoSchemaMapping(conn, require('./anilist'))
    }
    return conn
  }
}
