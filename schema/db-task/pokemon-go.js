module.exports = [
  {
    id: 'PokemonGo',
    name: 'pokemon-go',
    schema: {
      filename: String,
      image: String,
      alternate_form: String,
      field_pokemon_type: String,
      field_primary_moves: String,
      field_secondary_moves: String,
      field_legacy_charge_moves: String,
      field_legacy_quick_moves: String,
      exclusive_moves: String,
      field_evolutions: String,
      catch_rate: String,
      field_flee_rate: String,
      quick_exclusive_moves: String,
      number: Number,
      title_1: String,
      name: Array,
      image_mini: String,
      cp_35: String,
      cp_30: String,
      cp_25: String,
      rating: String,
      egg_cp: String,
      min_egg_cp: String,
      candy: String,
      hatch: String,
      buddy: String,
      pokemon_class: String,
      field_pokemon_generation: String,
      def: String,
      atk: String,
      sta: String,
      link: String,
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'PokemonGoEvents',
    name: 'pokemon-go-event',
    schema: {
      title: { index: true, type: String },
      event: String,
      description: String,
      url: String,
      type: String,
      image: String,
      share_body: String,
      logo: String,
      start_date: String,
      end_date: String,
      countries: String,
      upvotes_id: String,
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'PokemonGoNews',
    name: 'pokemon-go-news',
    schema: {
      title: { index: true, type: String },
      description: String,
      url: String,
      image: String,
      start_date: Date,
      created: { index: true, type: Date, Default: Date.now }
    }
  }
]
