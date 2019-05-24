module.exports = [
  {
    id: 'Anilist',
    name: 'storage-anilist',
    schema: {
      id: { type: Number, index: true },
      title_romaji: { type: String, index: true },
      title_english: { type: String, index: true },
      title_japanese: { type: String, index: true },
      type: { type: String, index: true },
      series_type: String,
      start_date: { type: String, index: true },
      end_date: { type: String, index: true },
      start_date_fuzzy: Number,
      end_date_fuzzy: Number,
      season: { type: String, index: true },
      description: String,
      adult: Boolean,
      image_url_sml: String,
      image_url_med: String,
      image_url_lge: String,
      image_url_banner: String,
      genres: Array,
      synonyms: Array,
      youtube_id: String,
      hashtag: String,
      updated_at: Number,
      total_episodes: Number,
      duration: Number,
      airing_status: { type: String, index: true },
      created: { type: Date, index: true, default: Date.now }
    }
  },
  {
    id: 'StorageAnime',
    name: 'storage-anime',
    schema: {
      anilist_id: { type: Number, index: true },
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
