# @touno-io/db

mongodb simple connection 

### Environment
```ini
MONGODB_SERVER = 'localhost:27017'
// Or
MONGODB_URI = 'mongodb://localhost:27017'
```

### Installation
```bash
npm i @touno-io/db
// or
yarn i @touno-io/db
```

**sample**
```javascript
import mongo from '@touno.io/db'
const db = mongo()
// or
const db = require('@touno.io/db')()

db.set('TableName1', 'table_name1', { data: String })

await db.open('database_name')

db.set({
  id: 'TableName2',
  name: 'table_name2',
  schema: {
    data: String
  }
})

const { TableName1 } = db.get()
// or 
const TableName1 = db.get('TableName1')

let { data } = await TableName1.findOne({})

await db.close()
```
----------
### License
MIT © 2018 Touno™
