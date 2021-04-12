const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'Config',
    name: 'config',
    schema: {
      scope: { index: true, type: String },
      key: { index: true, type: String },
      value: Mixed,
      updated: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'Task',
    name: 'task-config',
    schema: {
      crontab: String,
      name: { index: true, type: String },
      started: { type: Boolean, Default: false },
      description: String
    }
  },
  {
    id: 'TaskHistory',
    name: 'task-history',
    schema: {
      name: { index: true, type: String },
      state: { type: Number, Default: 1 },
      manual: { type: Boolean, Default: false },
      exited: { type: Number, Default: null },
      created: { type: Date, Default: Date.now },
      updated: { type: Date, Default: null }
    }
  }
]
