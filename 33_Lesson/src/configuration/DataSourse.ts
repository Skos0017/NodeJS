import {DataSource} from 'typeorm';
import { University } from '../entitis/Universion';
import { Teacher } from '../entitis/Teacher';
import { Student } from '../entitis/Students';

export const AppDataSource = new DataSource ({
    type: 'postgres',
    database: 'univer.sqlite',
    synchronize: true,
    logging: false,

    entities: [University,Teacher,Student],

    subscribers:[],
    migrations: []

})