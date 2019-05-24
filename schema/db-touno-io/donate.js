module.exports = [
  {
    id: 'DonateHistory',
    name: 'donate-history',
    schema: {
      userId: { type: String, index: true },
      method: { type: String, index: true },
      date: Date,
      amount: Number,
      fee: Number,
      currency: String,
      rate: Number,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'DonateUser',
    name: 'donate-user',
    schema: {
      userId: { type: String, index: true, unique: true },
      name: String,
      email: { type: String, index: true, unique: true },
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
