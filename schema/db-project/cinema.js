const { Mixed } = require('../../type')

module.exports = [
  {
    id: 'Cinema',
    name: 'cinema',
    schema: {
      img: String,
      link: String ,
      name: { type: String, index: true },
      display: String,
      release: String,
      time: String,
      cinema: Mixed,
      weekly: { type: Number, index: true }
    }
  }
]
