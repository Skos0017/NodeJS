const http = require('http');


// const server = http.createServer((req, res) => {
//     // Обработка запросов и ответов
// });


const server = http.createServer((req, res) => {
    //работа с Запросом
    console.log(req.url);
    console.log(req.method);
    console.log(JSON.stringify(req.headers));

    //Работа с ответом
    //подготовка ответ
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    //отвечаем
    res.end('Hello world');
});

server.listen(3000,()=>{
    console.log('server stated ah host http://localhost:3000');
})