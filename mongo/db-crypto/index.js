const { MongoConnection, MongoSchemaMapping } = require('../db-mongo')

global._dbCryptoConn = {
  connected: () => false
}
module.exports = {
  connected: () => global._dbCryptoConn.connected(),
  open: async () => {
    if (!global._dbCryptoConn.connected()) {
      global._dbCryptoConn = await MongoConnection('db_crypto')
      MongoSchemaMapping(global._dbCryptoConn, require('./crypto-market'))
    }
    return global._dbCryptoConn
  }
}
