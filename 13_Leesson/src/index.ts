// npm install ts-node @types/node @types/express
import express, {Request, Response, NextFunction, Express} from 'express';
import cors from 'cors';


const app: Express = express();
const PORT: number = 3000;

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '127.0.0.1');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD, PUT, PATCH');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use(cors( {
    origin: '127.0.0.1',
    methods: 'GET, POST, OPTIONS, HEAD, PUT, PATCH',
    allowedHeaders: 'Content-Type, Authorization'
}));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method);
});

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('success')
})

app.listen(PORT, () => {
    console.log("Сервер запущен")
})