const mongoose = require('mongoose')
const { Mixed } = mongoose.Schema.Types

module.exports = [
  {
    id: 'Expense',
    name: 'db-expense',
    schema: mongoose.Schema({
      enabled: Boolean,
      account_id: String,
      group: String,
      name: String,
      type: String,
      duedate: Date,
      billing: Number,
      pay: Mixed,
      receive: Number,
      currency: String,
      created: { type: Date, index: true, default: Date.now }
    })
  },
  {
    id: 'ExpenseAccount',
    name: 'db-expense-account',
    schema: mongoose.Schema({
      name: { type: String, index: true, unique: true },
      type: Object, // cash { name }, saving { name }, creditcard { name, paydate, billdate }, laon { name, interest_percent, paydate, billdate }
      group: String,
      amount: Number,
      currency: String,
      created: { type: Date, index: true, default: Date.now },
      visible: Boolean
    })
  },
  {
    id: 'ExpenseExchange',
    name: 'db-expense-exchange',
    schema: mongoose.Schema({
      base: String,
      currency: { type: String, index: true, unique: true },
      rate: Number,
      created: { type: Date, index: true, default: Date.now }
    })
  },
  {
    id: 'ExpenseTransaction',
    name: 'db-expense-transaction',
    schema: mongoose.Schema({
      account_id: { type: String, index: true }, // to_account_id
      transfer_id: { type: String, index: true },
      transfer: Object,
      amount: Number, // - expense, + income
      category: String,
      date: Date,
      created: { type: Date, index: true, default: Date.now }
    })
  },
  {
    id: 'ExpenseCategory',
    name: 'db-expense-category',
    schema: mongoose.Schema({
      group: { type: String, index: true },
      name: { type: String, index: true, unique: true },
      created: { type: Date, index: true, default: Date.now },
      visible: Boolean
    })
  }
]
