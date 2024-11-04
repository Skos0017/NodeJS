import express, {Request, Response, Express, NextFunction} from 'express';
import cors from 'cors';
import {readFile} from './service/modules/fileSystem';
import { User } from './service/classes/user';

const app: Express = express();
const PORT: Number = 3000;
const ERROR = {
    "AuthorizationError": "Ошибка авторизации. Проверьте правильность ввода логина и пароля",
    "RegistrationError": "Пользователь с email уже зарегистрирован"
}    

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.url === '/') {
        res.writeHead(301, {'Location': '/enter-page'});
        res.end();
    }
    next();
})

app.get('/enter-page', async (req: Request, res: Response) => {
    res.writeHead(200, 'OK', {'Content-Type': 'text/html; charset=utf-8'});

    let html = await readFile('./app/public/enter-page.html');

    res.end(html);
})

app.post('/login', async (req: Request, res: Response) => {
    console.log('Пришел запрос на логин');
    res.writeHead(200, 'OK', {'Content-Type': 'text/html; charset=utf-8'});

    const user: User = req.body;
    console.log(`Смотрим юзера: username: ${user.username} password: ${user.password}`);
    console.log(`JSON: ${JSON.stringify(user)}`);
    const users: User[] = JSON.parse(await readFile('./app/db/users.json'));

    users.forEach(element => {
        if (element.username === user.username && element.password === user.password) {
            res.writeHead(201, 'OK', {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Вы успешно вошли');
        }
        else{
            res.writeHead(403, 'NOT FOUND USER', {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('Пользователь не найден');
        }
    });

    
})

app.listen(3000, () => {
    console.log(`Сервер запущен по адресу: http://127.0.0.1:3000`);
})