import { Repository } from "typeorm";
import { AppDataSource } from "./configuration/DataSource";
import { User } from "./entitis/User";
import { Profile } from "./entitis/Progile";




let tempUser: User;


async function transactionalOperation() {
    await AppDataSource.initialize();


    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const queeryRunner = AppDataSource.createQueryRunner();
    await queeryRunner.connect();
    await queeryRunner.startTransaction();

    try{
        AppDataSource.transaction(async transactionalEntityManager => {
            const user: User = new User();
            user.name = 'Valeryy';

            await queeryRunner.manager.save(user);
            tempUser = user;
            // await transactionalEntityManager.save(user);

            
            const userProfile: Profile = new Profile();
            userProfile.user = user;
            userProfile.bio = 'Разработчик на английском языке';

            await queeryRunner .manager.save(userProfile);
            await queeryRunner.commitTransaction();
        })
    }
    catch ( error ) {
        await queeryRunner.rollbackTransaction();
    }finally{
        await queeryRunner.release();
    }

}