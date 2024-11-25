import { MyCustomDataSource } from "./configuration/AppDataSource";
import { Person } from './entities/Person';
import { Pet } from './entities/Pet';


MyCustomDataSource.initialize().then(async () => {
    const pet1: Pet = new Pet();
    pet1.name = 'Арчик';
    pet1.type = 'Собака';

    const pet2: Pet = new Pet();
    pet2.name = 'Тишка';
    pet2.type = 'Кот';

    const human: Person = new Person();
    human.name = 'Kas';

    pet1.owner = human;
    pet2.owner = human;
    human.pet = [pet1, pet2];


    await MyCustomDataSource.manager.save(human);
    await MyCustomDataSource.manager.save(pet1);
    await MyCustomDataSource.manager.save(pet2);
});

