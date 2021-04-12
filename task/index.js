const task = require('../schema/db-task')
const cron = require('node-cron')

const createCronJob = ({ name }, manual = false, Task, TaskHistory) => {
  let cron = null
  let state = 2
  return {
    async getState () {
      const job = await Task.findOne({ name }, 'started')
      if (!cron) return { working: job.started, running: null, state: 'N/A' }

      return {
        working: job.started,
        running: cron.state > 0,
        error: cron.exited !== 0,
        state: cron.exited !== 0 ? 'FATAL' :cron.state === 0 ? 'COMPLATED' : cron.state === 1 ? 'INITIALIZE' : cron.state === 2 ? 'STARTING' : 'PROCESSING'
      }
    },
    async isRunning () {
      if (!cron) return false
      const job = await Task.findOne({ name })
      return job.started
    },
    async initialize () {
      await Task.updateOne({ name }, { $set: { started: true }})
      cron = await new TaskHistory({ name, manual })
    },
    async start () {
      if (!cron) return
      cron.state = 2
      await TaskHistory.updateOne({ _id: cron._id }, { $set: { state: 2, updated: new Date() } })
    },
    async processing () {
      if (!cron) return
      state++
      cron.state = state
      await TaskHistory.updateOne({ _id: cron._id }, { $set: { state, updated: new Date() } })
    },
    async finish (exited = 1) {
      if (!cron) return
      cron.state = 0
      cron.exited = exited
      await Task.updateOne({ name }, { $set: { started: false }})
      await TaskHistory.updateOne({ _id: cron._id }, { $set: { state: 0, updated: new Date(), exited } })
    },
  }
}

module.exports = {
  create: async (crontab, name, description) => {
    if (!cron.validate(crontab)) throw new Error('crontab invalidate')
    if (!name || !description) throw new Error('name or description empty.')

    await task.open()
    const { Task, TaskHistory } = task.get()
    const job = await Task.findOne({ name }, '_id')
    if (!job) await new Task({ crontab, name, description }).save()
    return createCronJob(name, false, Task, TaskHistory)
  },
  load: async (name, manual) => {
    await task.open()

    const { Task, TaskHistory } = task.get()
    const job = await Task.findOne({ name }, '_id')
    if (!job) throw new Error('task-job is not setting.')

    return createCronJob(job, manual, Task, TaskHistory)
  }
}

