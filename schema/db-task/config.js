const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'Config',
    name: 'config',
    schema: {
      scope: { index: true, type: String },
      key: { index: true, type: String },
      value: Mixed,
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'ConfigTask',
    name: 'config-tasks',
    schema: {
      job: { index: true, type: String },
      name: { index: true, type: String },
      description: String,
      crontab: String,
      initial: { index: true, type: Boolean, Default: false },
      started: { index: true, type: Date, Default: null },
      created: { index: true, type: Date, Default: Date.now }
    }
  }
]
