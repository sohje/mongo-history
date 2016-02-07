> Get the [mongodb's](https://www.mongodb.org/) command history

[![npm version](https://badge.fury.io/js/mongo-history.svg)](https://badge.fury.io/js/mongo-history)

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

MIT © [Nikolay Spiridonov](https://github.com/sohje)

