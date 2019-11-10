/* eslint-disable no-console */
const mongoose = require('mongoose')

const getConnection = (dbname = 'default') => {
  return !global['_mongo.' + dbname] ? { connected: () => false } : global['_mongo.' + dbname]
}

let tmp = {}
const { mConn, mMapping } = {
  mConn: async (dbname, username, password) => {
    const IsAdmin = !!process.env.MONGODB_ADMIN
    const MONGODB_ACCOUNT = process.env.MONGODB_ADMIN || username ? `${username}:${password}@` : ''
    const MONGODB_SERVER = process.env.MONGODB_SERVER || 'localhost:27017'
    const MONGODB_REPLICA = process.env.MONGODB_REPLICA

    let MONGODB_URI = process.env.MONGODB_URI || `mongodb://${MONGODB_ACCOUNT}${MONGODB_SERVER}/${dbname}?authMode=scram-sha1${IsAdmin ? '&authSource=admin' : ''}${MONGODB_REPLICA ? `&replicaSet=${MONGODB_REPLICA}` : ''}`
    if (process.env.MONGODB_URI) MONGODB_URI = MONGODB_URI.replace(/\/\?/, `/${dbname}?`)

    global['_mongo.' + dbname] = await mongoose.createConnection(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, connectTimeoutMS: 10000, useUnifiedTopology: true })
    if (global['_mongo.' + dbname].readyState !== 1) throw new Error(`MongoDB Connection, ${MONGODB_URI}/${dbname} (State is ${global['_mongo.' + dbname].readyState})`)

    global['_mongo.' + dbname].connected = () => global['_mongo.' + dbname].readyState === 1
  },
  mMapping: (dbname, table, force = false) => {
    if (!table.id) throw new Error(`mongodb id is undefined.`)
    if (typeof table.schema !== 'object') throw new Error(`mongodb schema is not object.`)
    if (!table.name) throw new Error(`mongodb name is undefined.`)
    let mongo = getConnection(dbname)

    if (mongo[table.id]) throw new Error(`MongoDB schema name is duplicate '${table.id}'`)
    if (mongo.connected() || force) {
      mongo[table.id] = mongo.model(table.name, mongoose.Schema(table.schema), table.name)
    } else {
      if (!tmp[dbname]) tmp[dbname] = []
      tmp[dbname].push(table)
    }
  }
}
module.exports = (dbname = 'default') => {
  return {
    Schema: {
      ObjectId: mongoose.Schema.ObjectId,
      Mixed: mongoose.Schema.Types.Mixed
    },
    connected: () => global['_mongo.' + dbname].connected(),
    set: (name, collection, schema) => {
      if (name instanceof Array) {
        for (const db of name) mMapping(dbname, db)
      } else if (name instanceof Object) {
        mMapping(dbname, name)
      } else if (typeof name === 'string') {
        mMapping(dbname, { id: name, name: collection, schema })
      }
    },
    get: (name = '') => {
      return name ? getConnection(dbname)[name] : getConnection(dbname)
    },
    open: async () => {
      if (!getConnection(dbname).connected()) {
        await mConn(dbname)
        if (tmp[dbname]) for (const db of tmp[dbname]) mMapping(dbname, db, true)
        tmp[dbname] = null
      }
    },
    close: async () => global['_mongo.' + dbname].close()
  }
}
