import {Strategy as JwtStategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import  passport, { use }  from 'passport';

//секретный Ключ Для подписи JWT
const secretKey =  process.env.JWT_SECRET || 'secretkey';

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}

passport.use(new JwtStategy(options, (jwtPlayload, done) => {
    try{
        const user = {
            id: jwtPlayload.id,name: jwtPlayload.name
        };
        if(user){
            return done(null, user);
        }else{
            return done(null, user);
        }
    }catch(error){
        return done(error, false);
    }
}));

export default passport;
