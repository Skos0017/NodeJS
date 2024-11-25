export async function seedDatabase() {
    await AppDataSource.initialize();


    await createUniversities();
    await createTeachers();
    await createStudents();


    console.log("Database seeded successfully!");
}
