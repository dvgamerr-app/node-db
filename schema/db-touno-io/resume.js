const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'Resume',
    name: 'resume',
    schema: {
      section: { index: true, type: String, require: true },
      content: Mixed,
      updated: { type: Date, default: Date.now }
    }
  },
  {
    id: 'ResumeContact',
    name: 'resume-contact',
    schema: {
      name: { index: true, type: String },
      email: { index: true, type: String },
      subject: String,
      token: String,
      text: String,
      score: Number,
      challenge: Date,
      sended: { index: true, type: Boolean, Default: false },
      readed: { index: true, type: Boolean, Default: false },
      created: { index: true, type: Date, Default: Date.now }
    }
  }
]
