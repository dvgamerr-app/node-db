module.exports = [
  {
    id: 'Schedule',
    name: 'schedule',
    schema: {
      period: { index: true, type: String },
      every: { index: true, type: String },
      title: String,
      holiday: { index: true, type: Boolean, default: false },
      notify: { index: true, type: Boolean, default: true },
      created: { index: true, type: Date, default: Date.now }
    }
  },
  {
    id: 'ScheduleNote',
    name: 'schedule-note',
    schema: {
      title: String,
      desc: String,
      date_from: { index: true, type: Date },
      date_to: { index: true, type: Date },
      allday: { index: true, type: Boolean, default: false },
      notify: { index: true, type: Boolean, default: true },
      created: { index: true, type: Date, default: Date.now }
    }
  }
]
