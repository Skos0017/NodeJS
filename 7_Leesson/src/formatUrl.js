const url = require('url');

const urlObject = {
    protocol: 'http',
    hostname: 'example.com',
    port: '8000',
    pathname: '/path/name',
    query: {
        query: 'string'
    }
}

const formattedUrl = url.format(urlObject);
console.log(formattedUrl);