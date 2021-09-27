import { addSampleData, loadPet, loadPets } from "./petsRepository";
import sequelize from "../infrastructure/db";

describe("petsRepository", () => {
	beforeAll(async () => {
		await sequelize.sync();
		await addSampleData();
	});

	describe(loadPet, () => {
		it("loads pet for id", async () => {
			const mambo = await loadPet(0);
			expect(mambo.name).toBe("Mambo");

			const archibald = await loadPet(2);
			expect(archibald.name).toBe("Archibald");
		});

		it("loads ratings", async () => {
			const mambo = await loadPet(0);
			expect(mambo.ratings.length).toBe(5);
			expect(mambo.ratings[0].value).toBe(5);
		});

		it("throws error if pet is not found", async () => {
			try {
				await loadPet(77);
				fail();
			} catch (error) {}
		});
	});

	describe(loadPets, () => {
		it("loads all pets from sample data", async () => {
			const pets = await loadPets();
			expect(pets.length).toBe(6);
		});
	});

	test.todo("store rating");
});
