
const server2 = http.createServer((req, res) => {
    // Обработка запросов и ответов
});

// req - requesr - Запрос от клиента 
// ses - response - Ответ Сервера
const server3 = http.createServer((req, res) => {
    //работа с Запросом
    console.log(req.url);
    console.log(req.method);
    console.log(JSON.stringify(req.headers));

    console.log(req.httpVersion);
    console.log(req.connection.remoteAddress);// ip Клиента
    console.log(req.socket.remotePort);// port Клиента

    console.log(req.body);//

    let body = '';

    //req.on( событие , функция которая вызывается когда приходят данные) 
    // chunk пакет из body
    req.on('data', chunk =>{
        body += chunk.toString();
    })

    req.on('end',()=>{
        console.log(body);
    })

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

const http = require('http');
// const url = require('url');
// есть 2 типов запросов body / query
const server = http.createServer((req , res)=>{
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    req.statusCode = 200;
    req.statusMessage = ' Bad response';

    res.setHeader('headertype', 'headercontent');
    res.removeHeader('headertype');


    //Все заголовки сначало код статус
    res.writeHead(200, 'OK',{
        'headertype1': "headercontent",
        'headertype2': "headercontent",
        'headertype3': "headercontent"
    });


    res.end();
});

const PORT = 3001;
const HOST = 'localhost'
server.listen(PORT, HOST,()=>{
    console.log(`setver Started: http://${HOST}:${PORT}`);
});

server.close(()=>{});//последнее что выплевывает перед отключением

server.setTimeout(5000,(socket) =>{
    console.log('Я не могу ответить на ваш запрос Слишком долго ждать');
    socket.end();
});

server.getConnections((err, count)=>{
    if(err){
        console.log('Ошибка получения соединений');
    }else{
        console.log('Open'+ count + 'соединений');
    }
});


//Ошибки 
server.on('request', (req, res)=>{});
server.on('close', ()=>{});
server.on('error', (err)=>{});

const http = require('http');
const server1 = http.createServer((req , res)=>{
    if (req.url === '/' && req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Добро пожаловать на новую страницу</h1>');
    } else if (req.url === '/about' && req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Добро пожаловать на страницу О нас </h1>');
    } else {
        res.statusCode = 404;
        res.end('Страница не найдена');
    }
});

server.listen(3000, () =>{
    console.log("server stated ah host http://localhost:3000")
})