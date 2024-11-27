import  express  from "express";
import Passport  from "./config/jwtStrategy";
import passport from "./config/jwtStrategy";
import aurrouter from "./routes/authRoutes";

const app = express();
app.use(express.json());

app.use(passport.initialize());
app.use('/api', aurrouter)
export default app;