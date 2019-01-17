const mongoose = require('mongoose')

module.exports = [
  {
    id: 'CryptoMarket',
    name: 'db-market',
    schema: mongoose.Schema({
      market: { index: true, type: String },
      symbol: { index: true, type: String },
      ask: Number,
      bid: Number,
      created: { index: true, type: Date }
    })
  }
]
