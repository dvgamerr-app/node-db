module.exports = [
  {
    id: 'BnkOta',
    name: 'bnk48-ota',
    schema: {
      userId: { index: true, type: String },
      displayName: String,
      pictureUrl: String,
      statusMessage: String,
      roomId: { index: true, type: String },
      roomType: { index: true, type: String },
      oshi: Array,
      updated: { index: true, type: Date, Default: Date.now },
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'BnkOtaEvent',
    name: 'bnk48-ota-event',
    schema: {
      roomId: { index: true, type: String },
      roomType: { index: true, type: String },
      eventId: { index: true, type: Number },
      schedule: { index: true, type: Date },
      sender: Object,
      notify: { index: true, type: Boolean },
      updated: { index: true, type: Date, Default: Date.now },
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'BnkMember',
    name: 'bnk48-member',
    schema: {
      id: { index: true, type: Number },
      nickname_th: { index: true, type: String },
      nickname_en: { index: true, type: String },
      position: String,
      birthday: { index: true, type: Date },
      small: String,
      full: String,
      name_th: String,
      name_en: String,
      height: String,
      province: String,
      like: String,
      blood: String,
      hobby: String,
      created: { index: true, type: Date, Default: Date.now }
    }
  },
  {
    id: 'BnkSchedule',
    name: 'bnk48-schedule',
    schema: {
      id: { index: true, type: Number },
      type: { index: true, type: String },
      name: String,
      date: {
        from: { index: true, type: Date },
        to: { index: true, type: Date }
      },
      place: String,
      detail: String,
      time: String,
      oshi: Array,
      created: { index: true, type: Date, Default: Date.now }
    }
  }
]
