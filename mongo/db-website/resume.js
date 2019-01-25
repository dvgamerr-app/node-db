const mongoose = require('mongoose')
module.exports = [
  {
    id: 'WebResume',
    name: 'web-resume',
    schema: mongoose.Schema({
      data: { index: true, type: String },
      content: mongoose.Schema.Types.Mixed
    })
  },
  {
    id: 'WebResumeContact',
    name: 'web-resume-contact',
    schema: mongoose.Schema({
      name: String,
      email: String,
      subject: String,
      token: String,
      text: String,
      score: Number,
      challenge: Date,
      sended: Boolean,
      readed: Boolean,
      created: Date
    })
  }
]
