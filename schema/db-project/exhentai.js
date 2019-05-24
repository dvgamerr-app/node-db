module.exports = [
  {
    id: 'ExHistory',
    name: 'exhentai-history',
    schema: {
      name: String,
      cover: String,
      link: { index: true, type: String },
      page: Number,
      size: String,
      language: String,
      downloaded: Number,
      updated: { index: true, type: Date, Default: Date.now },
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'ExQueue',
    name: 'exhentai-queue',
    schema: {
      user_id: { index: true, type: String },
      name: String,
      link: { index: true, type: String },
      page: Number,
      size: String,
      requested: { index: true, type: Date, Default: Date.now },
      status: { index: true, type: String }
    }
  },
  {
    id: 'ExUser',
    name: 'exhentai-user',
    schema: {
      user_id: { index: true, type: String },
      nickname: String,
      username: { index: true, type: String },
      expire: { index: true, type: Date, Default: Date.now },
      online: { index: true, type: Boolean }
    }
  }
]
