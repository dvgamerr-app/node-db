const mongoose = require('mongoose')

mongoose.Promise = Promise
module.exports = {
  MongoConnection: async (dbname, account, server) => {
    const IsAdmin = !!process.env.MONGODB_ADMIN
    const MONGODB_ACCOUNT = account || process.env.MONGODB_ADMIN
    const MONGODB_SERVER = server || process.env.MONGODB_SERVER || 'localhost:27017'

    let MONGODB_URI = `mongodb://${MONGODB_ACCOUNT ? `${MONGODB_ACCOUNT}@` : ''}${MONGODB_SERVER}/${dbname}?authMode=scram-sha1${IsAdmin ? '&authSource=admin' : ''}`
    let conn = await mongoose.createConnection(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, connectTimeoutMS: 10000 })
    if (conn.readyState !== 1) throw new Error(`MongoDB Connection, ${MONGODB_URI}/${dbname} (State is ${conn.readyState})`)

    conn.connected = () => conn.readyState === 1
    conn.close = async () => {
      await conn.close()
    }
    conn.Schema = {
      ObjectId: mongoose.Schema.ObjectId
    }
    return conn
  },
  MongoSchemaMapping: (conn, db) => {
    for (let i = 0; i < db.length; i++) {
      if (conn[db[i].id]) throw new Error(`MongoDB schema name is duplicate '${db[i].id}'`)
      conn[db[i].id] = conn.model(db[i].name, db[i].schema, db[i].name)
    }
  }
}
