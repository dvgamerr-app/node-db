const { ObjectId } = require('../../type')

module.exports = [
  {
    id: 'Account',
    name: 'team-account',
    schema: {
      username: { type: String, index: true, require: true, unique: true },
      pwd: { type: String, require: true },
      fullname: { type: String },
      email: { type: String, index: true },
      level: { type: Number },
      permission: { type: Array, default: null },
      facebook: { type: Object, default: null },
      line: { type: Object, default: null },
      enabled: { type: Boolean, index: true, default: true },
      lasted: { type: Date, default: Date.now },
      updated: { type: Date, default: Date.now }
    }
  },
  {
    id: 'Todo',
    name: 'team-todo',
    schema: {
      owner: {
        _id: { type: ObjectId, index: true },
        fullname: String,
        email: String
      },
      title: { type: String },
      description: String,
      project: { type: String, index: true },
      duedate: { type: Date, index: true },
      priority: { type: Number, index: true },
      assign: [
        {
          _id: { type: ObjectId, index: true },
          fullname: String,
          email: String
        }
      ],
      tags: [ String ],
      status: { type: Number, default: 0 },
      private: { type: Boolean, default: false  },
      deleted: { type: Boolean, default: false  },
      updated: { type: Date, default: Date.now }
    }
  },
  {
    id: 'Comment',
    name: 'team-comment',
    schema: {
      todo: { type: ObjectId, index: true },
      owner: { type: ObjectId, index: true },
      description: String,
      deleted: { type: Boolean },
      updated: { type: Date, default: Date.now }
    }
  }
]
