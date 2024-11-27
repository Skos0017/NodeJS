import express , {Express, Request, Response, NextFunction} from 'express';
import session from 'express-session';
import passport, { use } from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
//PassportJs
//Statelss Без сохранения состояния
//Преемущества маштабируеться , легкость
// Недостатки каждый запрос должен содердать всю необхадимую информацию 
//Statefull Сохранение состояния
// Statefull плюсы удобный для пользователя , минимальное количество запросов 
// Statefull недостатки нету маштобирования , сложность ,сложность разработки 
/*
    Разница между statefull и stateless 
    statefull - сохранение состояния
    stateless - без сохранения состояния
    statefull - удобно для пользователя , минимальное количество запросов
    statefull - нету маштабирования , сложность ,сложность разработки
    CDN и прокси-сервера для уменьшения нагрузки на сервер и увеличения скорости 
    REST API - архитектура для взаимодействия между сервисами

    JWT - JSON WEB TOKEN - токен который содержит информацию о пользователе
    JWT - плюсы легкость , безопасность , масштабируемость
    JWT - минусы сложность , не поддерживается IE

    JWT состоит из Трех частей 
    1. Header - тип токена
    2. Payload - информация о пользователе
    3. Signature - подпись токена

    JWT - можно задать врямя жизни токена
    JWT - Пример полезной нагруски 
    {
     "sub": "1234567890"
     "name": "John Doe"
     "admin": true
    }
    JWT - может содержать информацию о пользователе админ или нет 

*/

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Первый мидел веер для настройки сесии
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));
//Сессия
app.use(passport.initialize());
app.use(passport.session());
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
app.get('/',(req: Request,res: Response)=>{if(req.isAuthenticated()){ res.send('Добро пожаловать на login')}else{res.redirect('/login');}});
app.get('/reg', (req: Request,res: Response)=>{if(req.isAuthenticated()){ res.send('Добро пожаловать на Reg')}else{res.redirect('/login');}})
//Сессия



interface User extends Express.User {
    id: number;
    userName: string;
    password: string;
}
const users: User[] = [
    {id: 1, userName: 'user1', password: 'password1'},
    {id: 2, userName: 'user2', password: 'password2'},

];

passport.use(new LocalStrategy(
    function(username: string, password: string, done: (err: any, user: Express.User | false, options?: { message: string }) => void) {
        const user: Express.User | undefined = users.find(u => u.userName === username && u.password === password);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Неверное имя пользователя или пароль!" });
        }
    }
));

passport.serializeUser((user: User | Express.User, done)=> {
    done(null,(user as User).id);
});
passport.deserializeUser((id: number, done)=> {
    const user: User | undefined = users.find(u => u.id === id);
    done(null, user || null);
})

app.listen(3000, () => {
    console.log('http://localhost/:3000/')
})