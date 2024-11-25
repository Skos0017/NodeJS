import { DataSource } from "typeorm";
import { User } from "../entitis/User";
import { Profile } from "../entitis/Progile";


export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'myDB.sqlite',
    logging: false,
    synchronize: true,


    entities: [User, Profile],


    migrations:[],
    subscribers: []
});
