const express = require('express');

const app = express();

//****************************** Начало блока Middleware ******************************
app.use(express.json());

app.use( (req, res, next) => {
    console.log(`${req.url} - ${req.method}`)
    next(); // Нужен если есть еще олдин use что бы перейти к следующему
});

app.use((req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        res.status(403).send();
    }
});
//****************************** Конец блока Middleware ******************************




//****************************** Начало блока маршрутизации ******************************
app.post('/', (req, res) => {
    let body = req.body;
    console.log(body)
    res.status(200).send('success');
});

app.listen(3000, () => {
    console.log('Сервер запущен')
})

//****************************** Конец блока маршрутизации ******************************