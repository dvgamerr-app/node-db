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

    console.log('uri:', MONGODB_URI)
    global['_mongo.' + dbname] = await mongoose.createConnection(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, connectTimeoutMS: 10000 })
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
let conn = {
  dbname: 'default',
  Schema: {
    ObjectId: mongoose.Schema.ObjectId,
    Mixed: mongoose.Schema.Types.Mixed
  },
  connected: () => global._mongo.connected(),
  set: (name, collection, schema) => {
    if (name instanceof Array) {
      for (const db of name) mMapping(conn.dbname, db)
    } else if (name instanceof Object) {
      mMapping(conn.dbname, name)
    } else if (typeof name === 'string') {
      mMapping(conn.dbname, { id: name, name: collection, schema })
    }
  },
  get: (name = '') => {
    return name ? getConnection(conn.dbname)[name] : getConnection(conn.dbname)
  },
  open: async (dbname) => {
    if (dbname) conn.dbname = dbname
    if (!getConnection(conn.dbname).connected()) {
      await mConn(conn.dbname)
      if (tmp[conn.dbname]) for (const db of tmp[conn.dbname]) mMapping(conn.dbname, db, true)
      tmp[conn.dbname] = null
    }
  },
  close: async () => global['_mongo.' + conn.dbname].close()
}

module.exports = conn
