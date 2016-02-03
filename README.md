> Get the [mongodb's](https://www.mongodb.org/) command history


## Install

```
$ npm install --save mongo-history
```


## Usage

```js
const mongoHistory = require('mongo-history');

console.log(mongoHistory());
//=> ['show dbs', 'db.fs.files.count()', 'db.serverStatus()', 'show dbs', 'db.serverStatus()', ...]

console.log(mongoHistory({uniq: true}));
//=> [db.fs.files.count()', 'db.serverStatus()', 'show dbs', ...]
```


## API

### mongoHistory(options)

Returns an array of mongodb's commands.
On Windows machines returns empty array.

#### options

##### uniq

Type: `boolean`
Default: `false`

Returns array with uniq mongodb's commands.

## License

MIT © [Nikolay Spiridonov]

