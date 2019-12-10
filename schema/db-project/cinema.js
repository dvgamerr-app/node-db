const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'Cinema',
    name: 'cinema',
    schema: {
      weekly: { type: Number, index: true },
      year: { type: Number, index: true },
      img: String,
      link: String ,
      name: { type: String, index: true },
      display: String,
      release: Date,
      time: Number,
      cinema: Mixed
    }
  }
]
