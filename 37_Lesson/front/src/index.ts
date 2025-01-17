import express, { Request, Response, NextFunction } from 'express';
import cookieParser  from 'cookie-parser';
import { readFilePromise, writeFilePromise } from './file-operator_module'
import { User } from './User'
import {CookieCheck} from './middlewares/CookieCheck'
import {replaceTemplateValues} from './helpers/template'

const app = express();
const cookieName = 'Token';
let registratedUsers: User[] = [];
const userDataJson = "/../userData.json"

app.use(cookieParser());
app.use(express.json()); // Готов принять JSON
app.use(express.urlencoded({ extended: true })); // Укажите для обработки URL-encoded форм

app.use(CookieCheck(registratedUsers));

function checkRegisteredUsers(req: Request, res: Response, next: NextFunction) {
    let user: User = new User(req.body.user);
    
    if (!req.body.user) {
        res.status(404).send('Ошибка запроса')
        return;
    }

    let findUserByEmail = registratedUsers.find(registratedUser => registratedUser.email === user.email)

    if (findUserByEmail) {
        res.status(401).send('Пользователь с таким email уже зарегистрирован');
        return;
    }
    next();
}



function readTemplate(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readFilePromise(fileName)
            // resolve
            .then(function(data: string) {
                resolve(data);
            })
            // reject
            .catch(function(err) {
                console.log("Не смоглим прочитать файл: ", err);
            });
    });
}
// так отдавать
app.get('/', (req: Request, res: Response) => {
    readTemplate('/../main-page.html').then(page => {
        res.set('Content-Type', 'text/html')
        .status(200)
        .send(page)
    }).catch(err => {
        console.log(err);
    })
});

app.get('/login', (req: Request, res: Response) => {
    readTemplate('/../enter-page.html').then(page => {
        res.set('Content-Type', 'text/html')
        .status(200)
        .send(page)
    }).catch(err => {
        console.log(err);
    })
});

app.get('/enter-page', (req: Request, res: Response) => {
    readTemplate('/../enter-page.html').then(page => {
        res.set('Content-Type', 'text/html')
        .status(200)
        .send(page)
    }).catch(err => {
        console.log(err);
    })
});

app.get('/registration-page', (req: Request, res: Response) => {
    readTemplate('/../registration-page.html').then(page => {
        res.set('Content-Type', 'text/html')
        .status(200)
        .send(page)
    }).catch(err => {
        console.log(err);
    })
});

app.get('/main-page', (req: Request, res: Response) => {
    readTemplate('/../main-page.html').then(page => {
        res.set('Content-Type', 'text/html')
        .status(200)
        .send(page)
    }).catch(err => {
        console.log(err);
    })
});

app.post('/login',checkRegisteredUsers, function(req: Request, res: Response) {
    // {user: {login,password}}
    let {login, password} = req.body.user;


    readFilePromise(userDataJson)
    .then(function (dataUsers: string) {
        let users: User[] = JSON.parse(dataUsers);
        let userLogin: User | undefined;

        userLogin = users.find((value) => {
            return value.username === login
        })

        if(userLogin === undefined){
            res.status(404);
            res.json({"message": "Пользователь не найден"});
            return;
        }

        if(userLogin.password != password){
            res.status(404);
            res.json({"message": "Логин или Пароль не правельные"});
            return;
        }
       
        res.status(201)
        .cookie('Token', userLogin.token, { httpOnly: true })
        res.json({"message": ''});
       

    })
})

app.post('/registration', checkRegisteredUsers, (req: Request, res: Response) => {
    // {user: {'Name': 'Kas'}}
    let newUser: User = new User(req.body.user);

        readFilePromise(userDataJson)
        .then(dataUsers => {
            let users: User[] = JSON.parse(dataUsers);
            users.push(newUser);

            newUser.setUserToken(generateToken(128, 9));
            registratedUsers.push(newUser);

            return writeFilePromise(userDataJson, JSON.stringify(users, null, 2));
        })
        .then(() => {
            return replaceTemplateValues('/../main-page.html', newUser)
        })
        .then(page => {
            res.set('Content-Type', 'text/html')
                .status(200)
                .cookie('Token', newUser.token, { httpOnly: true })
                .send(page);
        });
});

type cookieLength = 64 | 128 | 256;

function generateToken(length: cookieLength = 128, countSymbolsInBucket: number = 9) {
    let alphabeth: string = 'abcdefghijklmnopqrstuvwxyz';
    let symbolsSet: string = alphabeth + alphabeth.toUpperCase() + '0123456789';

    let token: string = ''
    for (let i = 1; i <= length; i++) {
        if (i % countSymbolsInBucket == 0) {
            token += '-';
            continue;
        }
        let randomIndex = Math.floor(Math.random() * (symbolsSet.length));

        let randomSymbol = symbolsSet[randomIndex];

        token += randomSymbol;
    }

    return token;
}

app.listen(3000, () => {
    readFilePromise(userDataJson)
        .then((data: string) => {
            let users: User[] = JSON.parse(data);

            for (const user of users) {
                registratedUsers.push(user);
            }

            console.log('Server running on port 3000')
        });
});