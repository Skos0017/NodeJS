import { machine }  require('os');
const http = require('http');
const fs = require('fs');
const PORT = 3001;
const HOST = 'localhost';

const server = http.createServer((req , res) =>{
    if(req.url = "/user-data" && req.method === 'GET'){
        res.statusCode = 200;

        res.setHeader('Content-Type', 'application/json');

        fs.readFile('../public/students.json','utf8', (err,data) => {
            if (err) {
                console.log('Ошибка файла при чтении');
                req.statusCode = 500;
                res.statusMessage = 'Cant reade file';
                res.end();
            }
            res.end(data);
        });
    }
});

server.listen(PORT, HOST,()=>{
    console.log(`server start: http://${HOST}:${PORT}`);
});
