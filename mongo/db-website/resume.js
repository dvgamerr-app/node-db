const mongoose = require('mongoose')
module.exports = [
  {
    id: 'WebResume',
    name: 'web-resume',
    schema: mongoose.Schema({
      data: { index: true, type: String },
      content: mongoose.Schema.Types.Mixed
    })
  }
]
