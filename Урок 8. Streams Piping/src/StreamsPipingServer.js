const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/upload' && req.method === "POST") {
        const writable = fs.createWriteStream('new.txt');

        req.pipe(writable);
    }
})

server.listen(3000, () => {
    console.log(`hello`);
})