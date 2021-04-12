const task = require('../../schema/db-task')

module.exports = {
  set: async (scope, name, value) => {
    await task.open()
    const { Config } = task.get()
    const check = await Config.findOne({ scope, key: name })
    if (check) throw new Error('scope and name is duplicate')
    
    return await new Config({ scope, key: name, value })
  },
  get: async (scope, name) => {
    await task.open()
    const { Config } = task.get()
    return await Config.findOne({ scope, key: name })
  }
}

