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

mongo.set('TableName1', 'table_name1', { data: String })

await mongo.open('database_name')

mongo.set({
  id: 'TableName2',
  name: 'table_name2',
  schema: {
    data: String
  }
})

const { TableName1 } = mongo.get()
// or 
const TableName1 = mongo.get('TableName1')

let { data } = await TableName1.findOne({})

await mongo.close()
```
----------
### License
MIT © 2018 Touno™
