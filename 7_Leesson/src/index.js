const {PORT, HOST} = require("../module/constante");

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/tasks") {
        res.writeHead(301, {'Location': '/not relis'});
        res.end();
    }
    else if (req.method === 'POST' && req.url === "/tasks") {
        res.writeHead(301, {'Location': '/not relis'});
        res.end();
    }
    else if (req.method === 'PUT' && req.url === "/tasks/:id") {
        res.writeHead(301, {'Location': '/not relis'});
        res.end();
    }
    else if (req.method === 'DELETE' && req.url === "/tasks/:id") {
        res.writeHead(301, {'Location': '/not relis'});
        res.end();
    }
    else if (req.url === "/not relis") {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Данная функция еще недоступна!!!');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Страница не найдена');
    }
});