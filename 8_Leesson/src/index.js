const {PORT, HOST} = require("../module/constante");
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/get-student?id' && req.method === 'GET') {
        fs.readFile("../data/students.json", 'utf-8', (errData, data) => {
            if (errData) {
                console.error("Ошибка чтения файла данных");
            }
            fs.readFile("../public", 'utf-8', (errHtml, card) => {
                if (errHtml) {
                    console.error("Ошибка чтения файла карточки");
                }
                card.replace();
            })
            
            
        });
    }
})