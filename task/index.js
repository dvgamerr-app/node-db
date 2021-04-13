const task = require('../schema/db-task')
const cron = require('node-cron')

const createCronJob = ({ name, started }, Task, TaskHistory) => {
  let cron = null
  let state = 2
  return {
    async getState () {
      const { Task, TaskHistory } = task.get()
      const job = await Task.findOne({ name }, 'name started')
      cron = await TaskHistory.findOne({ name, exited: null })

      return {
        worker: job.started,
        running: !cron ? false : cron.state > 0,
        error: !cron ? false : cron.exited !== 0 && cron.exited !== null,
        state: !cron ? null : cron.exited !== 0 && cron.exited !== null ? 'FATAL' : cron.state === 0 ? 'COMPLATED' : cron.state === 1 ? 'INITIALIZE' : cron.state === 2 ? 'STARTING' : 'PROCESSING'
      }
    },
    async isRunning () {
      return started
    },
    async initialize (manual = false) {
      await Task.updateOne({ name }, { $set: { started: true }})
      cron = await new TaskHistory({ name, manual, state: 1, exited: null, created: new Date(), updated: new Date() }).save()
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
    async stop () {
      if (!cron) return
      cron.state = 0
      await TaskHistory.updateOne({ _id: cron._id }, { $set: { state: 0, updated: new Date() } })
    },
    async finish (exited = 1) {
      if (!cron) return
      cron.state = 0
      cron.exited = exited
      started = false
      await Task.updateOne({ name }, { $set: { started: false }})
      await TaskHistory.updateOne({ _id: cron._id }, { $set: { state: 0, updated: new Date(), exited } })
    },
    async error (ex) {
      await TaskHistory.updateOne({ _id: cron._id }, { $set: { error: ex.message.toString(), updated: new Date() } })
    }
  }
}

module.exports = {
  create: async (crontab, name, description) => {
    if (!cron.validate(crontab)) throw new Error('crontab invalidate')
    if (!name || !description) throw new Error('name or description empty.')

    await task.open()
    const { Task, TaskHistory } = task.get()
    const job = await Task.findOne({ name }, '_id')
    if (!job) await new Task({ started: false, crontab, name, description }).save()
    return createCronJob(name, false, Task, TaskHistory)
  },
  load: async (name) => {
    await task.open()

    const { Task, TaskHistory } = task.get()
    const job = await Task.findOne({ name }, '_id name started')
    if (!job) throw new Error('task-job is not setting.')

    return createCronJob(job, Task, TaskHistory)
  }
}

