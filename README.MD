# @touno-io/db

all database schema in touno-io project.

### Requirement Environment
```ini
RAVEN_CONFIG=https://{PUBLIC_KEY}:{SECRET_KEY}@sentry.io/{PROJECT_ID}
MONGODB_DEBUGER_URI=mongodb://localhost:27017/?authMode=scram-sha1&authSource=admin
```

### Installation
```bash
npm i @touno-io/db
// or
yarn i @touno-io/db
```

**sample**
```javascript
import { touno } from '@touno.io/db/mongo'

const { Touno } = await touno.open()
// Touno is mongodb collection.
```

----------
### License
MIT © 2018 Touno™
