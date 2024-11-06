const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Привет сервере на express');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID ${userId}`);
})

app.get('/search', (req, res) => {
    const query = req.query;
    res.send(JSON.stringify(query));
})

app.post('/users', (req, res) => {
    let body = "";
    req.on('data', (data) => {
        body += data;
    })
    req.on('end', () => {
        res.status(201).statusMessage('CREATE OK').send(`Пользователь ${JSON.stringify(body)}`);
    })

    
})

app.put('/users/:id', (res, req) => {
    const userId = req.params.id;

    let body = "";
    req.on('data', (data) => {
        body += data;
    })
    req.on('end', () => {
        res.status(201).send(`Пользователь с ID ${userId}:${JSON.stringify(body)}`);
    })
})

app.delete('/users/:id', (res, req) => {
    const userId = req.params.id;
    res.status(200).send(`Пользователь с ID: ${userId} удален`);
})

app.listen(PORT, () => {
    console.log(`Рексурс запущен по адресу: http://127.0.0.1:3000`);
})