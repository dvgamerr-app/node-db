module.exports = [
  {
    id: 'StorageAnime',
    name: 'storage-anime',
    schema: {
      anilist_id: { type: String, index: true },
      folder_name: { type: String, index: true },
      path: String,
      english: { type: String, index: true },
      romaji: { type: String, index: true },
      status: { type: String, index: true },
      image: String,
      anime: {
        start_date: { type: String, index: true },
        season: { type: String, index: true },
        media_type: String,
        quality: String,
        resolution: String,
        sound: Array,
        subtitle: Array
      },
      files: Array,
      updated: { type: Date, index: true, default: Date.now },
      created: { type: Date, index: true, default: Date.now }
    }
  }
]
