// Импортируем необходимые модули и константы
const { PORT, HOST } = require("./data/module/constante/server"); // Импортируем PORT и HOST из конфигурационного модуля
const Task = require("./data/classes/task"); // Импортируем класс Task для создания задач
const fs = require("fs");
const listTasks = []; // Создаем массив для хранения задач

const http = require('http'); // Импортируем модуль http для создания сервера

// Создаем HTTP-сервер
const server = http.createServer((req, res) => {
    // Устанавливаем заголовки для поддержки CORS
    res.setHeader("Access-Control-Allow-Origin", "*"); // Разрешаем доступ с любых источников
    res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept"); // Разрешаем определенные заголовки

    // Обработка предварительных запросов (OPTIONS)
    if (req.method === "OPTIONS") {
        res.writeHead(200); // Отправляем ответ 200 OK
        res.end(); // Завершаем ответ
    }
    // Обработка GET-запроса на получение списка задач
    else if (req.url === '/tasks' && req.method === 'GET') {
        getTasks(res); // Вызываем функцию для получения задач
    }
    // Обработка POST-запроса на добавление новой задачи
    else if (req.url === '/tasks' && req.method === 'POST') {
        let body = ''; // Инициализируем переменную для хранения тела запроса
        req.on('data', chunk => {
            body += chunk.toString(); // Собираем данные из запроса
        });

        req.on('end', () => {
            addTask(body, res); // Когда данные получены, вызываем функцию для добавления задачи
        });

        //TODO доработать маршрутизацию (вернуть ответ)
    }
    // Обработка всех остальных запросов
    else {
        unknowRequest(res); // Вызываем функцию для обработки неизвестных запросов
    }

    // Функция для получения списка задач
    function getTasks(res) {
        res.writeHead(200, {'Content-Type': 'application/json'}); // Устанавливаем заголовок ответа
        res.end(JSON.stringify(listTasks)); // Отправляем массив задач в формате JSON
    }

    // Функция для добавления новой задачи
    function addTask(body, res) {
        try {
            const newTaskData = JSON.parse(body); // Парсим тело запроса как JSON
            let newTask = new Task(newTaskData); // Создаем новый объект задачи
            listTasks.push(newTask); // Добавляем задачу в массив
            res.writeHead(201, {'Content-Type': 'application/json'}); // Устанавливаем заголовок ответа
            res.end(JSON.stringify(newTask)); // Отправляем новую задачу в формате JSON
        } catch (error) {
            res.writeHead(400, {'Content-Type': 'text/plain'}); // Устанавливаем заголовок ответа на ошибку
            res.end('Ошибка при добавлении задачи: ' + error.message); // Отправляем сообщение об ошибке
        }
    }

    // Функция для обработки неизвестных запросов
    function unknowRequest(res) {
        res.writeHead(404, 'NOT FOUND PAGE', {'Content-Type': 'text/plain; charset=utf-8'}); // Устанавливаем заголовок ответа на 404
        res.end('Страница не найдена'); // Отправляем сообщение о том, что страница не найдена
    }
});

// Запускаем сервер и начинаем прослушивание заданного порта и хоста
server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на хосте: http://${HOST}:${PORT}`); // Выводим сообщение о запуске сервера
});