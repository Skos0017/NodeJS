import express, {Request, Response, Express, NextFunction} from 'express';
import cors from 'cors';
import { json } from 'stream/consumers';

const app: Express = express();
const PORT: Number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req: Request, res: Response) => {
    if (req.url === '/') {

    }
})

app.get('/', () => {

})