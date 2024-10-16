const http = require('http');
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        for (let index = 0; index <= 100; index++) {
            console.log(index)
        }
    </script>
    </body>
    </html>`

    res.end(html)
})
const PORT = 15151;
server.listen(PORT,() => {
    console.log(`Сервер Запущен По адресу: http://localhost:${PORT}`);
})

