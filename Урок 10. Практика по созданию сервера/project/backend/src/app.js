const {PORT, HOST} = require("./data/module/constante");
const Task = require("./data/classes/task");
const listTasks = [];

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === "OPTIONS") {
        req.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
        res.end();
    }
    else if (req.url === '/tasks' && req.method === 'GET') {
        getTasks();
    }
    else if (req.url === '/tasks' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            addTask(body);
        })

    }
    else {
        unknowRequest();
    }


    function getTasks() {
        const fs = require('fs');
        console.log(req.url);
        
    }

    function addTask(body) {
        console.log(body);
        let newTask = new Task();
        listTasks.push(newTask);
    }

    function unknowRequest() {
        res.writeHead(404, 'NOT FOUND PAGE', {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Страница не найдена');
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на хосте: http://${HOST}:${PORT}`);
});

