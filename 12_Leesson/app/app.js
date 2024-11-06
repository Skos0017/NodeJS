const { PORT, HOST } = require("./services/module/constante");
const path = require('path');
const fs = require('fs');

const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.status(200).send();
// });

app.get('/auth', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendFile(path.join(__dirname, '/public/auth.html'));
});

app.post('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    let body = "";


    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const userData = JSON.parse(body);
        fs.readFile('./data/users.json', "utf-8", (err, data) => {

            const users = JSON.parse(data);

            users.forEach(element => {
                console.log(`name: ${userData.login} password: ${userData.password}`);
                if (element.login === userData.login && element.password === userData.password) {
                    console.log(`name: ${element.login} password: ${element.password}`);
                    res.sendFile(path.join(__dirname, '/public/index.html'));
                }
                else {
                    console.log(`name: ${element.login} password: ${element.password}`);
                    res.sendFile(path.join(__dirname, '/public/auth.html'));
                }
            });

        });

    });
})

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: http://${HOST}:${PORT}`);
})

