module.exports = [
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
