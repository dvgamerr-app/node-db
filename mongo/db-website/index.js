const { MongoConnection, MongoSchemaMapping } = require('../db-mongo')

global._dbWebsiteConn = {
  connected: () => false
}

module.exports = {
  connected: () => global._dbWebsiteConn.connected(),
  open: async () => {
    if (!global._dbWebsiteConn.connected()) {
      global._dbWebsiteConn = await MongoConnection(process.env.MONGODB_NAME_WEBSITE || 'db_website')
      MongoSchemaMapping(global._dbWebsiteConn, require('./resume'))
    }
    return global._dbWebsiteConn
  }
}
