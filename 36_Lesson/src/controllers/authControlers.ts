import { Request, Response } from "express";
import jwr from 'jsonwebtoken';

//секретный Ключ Для подписи JWT
const secretKey =  process.env.JWT_SECRET || 'secretkey';

// проверка пользователя здесь может быть заброс в (БД или Json)
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if(username === 'admin' && password === 'password'){
        const payload = {
            id:1,
            username: 'Admin user'
        }

        const token = jwr.sign(payload, secretKey, { expiresIn: '1h' });

        res.json({ token });
    }
    
}
// Пример зашифрованого маршрута 
export const protectedRoute = async (req: Request, res: Response) => {
    return res.json({ message: 'Hello from protected route' ,user: req.user});
}
