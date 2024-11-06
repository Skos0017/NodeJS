// 301 Перенаправление навсегда (Русурс был перемещен на постоянной основе)
// 302 Перенаправление (Русурс был перемещен на временной основе)

// 303 Перенаправление (управляемое)

// 307 Перенаправление временное (Временное без изменения метода запроса)
// 308 Перенаправление постоянное (Постоянное без изменения метода запроса)


const http = require('http');
const PORT = 3000;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
    if (req.url === '/old-path') {
        res.writeHead(301, {'Location': '/new-path'});
        res.end();
    }
    else if (req.url === '/new-path') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Рады видеть Вас на новой странице');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Страница не найдена');
    }
});

server.listen(PORT, () => {
    console.log(`Серевер запущен на хосте: http://${HOST}:${PORT}`);
});