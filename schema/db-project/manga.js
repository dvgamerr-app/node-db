const { ObjectId } = require('../../type')

module.exports = [
  {
    id: 'MangaOwner',
    name: 'manga-owner',
    schema: {
      owner: { type: String, index: true },
      priority: { type: Number, index: true },
      watch: { type: Boolean, default: false }
    }
  },
  {
    id: 'Manga',
    name: 'manga',
    schema: {
      ref_id: { type: ObjectId, index: true },
      display: String,
      display_th: String,
      name: { type: String, index: true },
      lasted_id: { type: ObjectId, index: true }
    }
  },
  {
    id: 'MangaLatest',
    name: 'manga-latest',
    schema: {
      owner: { type: String, index: true },
      name: { type: String, index: true },
      published: { type: Date, index: true },
      chapter: String,
      url: String,
      filename: String,
      images: Array,
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
