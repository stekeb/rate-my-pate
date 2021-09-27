import { sampleData } from "./sampleData";
import { getTrendingPet } from "./petsService";

describe("Pets Service", () => {
	it("considers Rose and Helena trending on Sept 10th", () => {
		const result = getTrendingPet(sampleData, new Date("2020-09-10"));

		expect(result).toBeDefined();
		expect(result!.name).toBe("Rose and Helena");
	});

	it("considers Bubbles trending on July 6th", () => {
		const result = getTrendingPet(sampleData, new Date("2020-07-06"));

		expect(result).toBeDefined();
		expect(result!.name).toBe("Bubbles");
	});
});
