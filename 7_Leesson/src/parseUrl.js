const url = require('url');

const urlString = 'http://example.com:8000/path/name?name=ivan&id=12';

const parseUrl = url.parse(urlString, true);
console.log(parseUrl.query.name);
console.log(parseUrl.query.id);