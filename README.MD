# @touno-io/db

all database schema in touno-io project.

### Environment
```ini
MONGODB_ADMIN=
MONGODB_SERVER=localhost:27017
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
