// npm install ts-node @types/node @types/express
import express, {Request, Response, NextFunction, Express, Router} from 'express';
import cors from 'cors';

const app: Express = express();
const router: Router = express.Router();

const PORT: number = 3000;

router.get('/route1', (req: Request, res: Response) => {
    res.end('Route 1');
});

router.get('/route2', (req: Request, res: Response) => {
    res.end('Route 2');
});

app.use('/main', router);

app.listen(PORT, () => {
    console.log("Сервер запущен")
})