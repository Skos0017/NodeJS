import { Router } from "express";
import passport from "passport";
import { login, protectRoute } from "../controllers/authControlers";

const aurrouter = Router();

aurrouter.post('/login', login);
aurrouter.get('/protected', passport.authenticate('jwt',{session:false},protectRoute));

export default aurrouter;