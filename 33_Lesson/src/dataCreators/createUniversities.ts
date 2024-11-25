import { University } from "../entitis/Universion";


async function createUniversities() {
    const universityRepository = AppDataSource.getRepository(University);


    for (let i = 0; i < 10; i++) {
        await universityRepository.createQueryBuilder()
            .insert()
            .into(University)
            .values({
                name: faker.company.name(),
            })
            .execute();
    }
}
