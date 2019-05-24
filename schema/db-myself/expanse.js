const mongo = require('../../index')

module.exports = [
  {
    id: 'ExpenseAccount',
    name: 'expense-account',
    schema: {
      name: { type: String, index: true, unique: true },
      type: { type: String, index: true }, // cash { name }, saving { name }, creditcard { name, paydate, billdate }, laon { name, interest_percent, paydate, billdate }
      group: String,
      amount: Number,
      currency: String,
      created: { type: Date, index: true, default: Date.now },
      enabled: { type: Boolean, index: true, default: true }
    }
  },
  {
    id: 'ExpenseBill',
    name: 'expense-bill',
    schema: {
      enabled: { type: Boolean, index: true, default: true },
      account_id: { type: mongo.Schema.ObjectId, require: true },
      group: String,
      name: String,
      type: String,
      duedate: Date,
      billing: Number,
      pay: Number,
      receive: Number,
      currency: String,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'ExpenseExchange',
    name: 'expense-exchange',
    schema: {
      base: String,
      currency: { type: String, index: true, unique: true },
      rate: Number,
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'ExpenseTransaction',
    name: 'expense-transaction',
    schema: {
      account_id: { type: String, index: true }, // to_account_id
      transfer_id: { type: String, index: true },
      transfer: Object,
      amount: Number, // - expense, + income
      category: String,
      date: { type: Date, index: true, default: Date.now },
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'ExpenseCategory',
    name: 'expense-category',
    schema: {
      group: { type: String, index: true },
      name: { type: String, index: true, unique: true },
      enabled: { type: Boolean, index: true, default: true },
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
