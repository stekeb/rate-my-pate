import { Pet } from "../domain/Pet";

// initialize sample data
export const sampleData = [
	pet(
		0,
		"Mambo",
		"dog",
		new Date(2012, 6, 3),
		"https://abload.de/img/mamboy5j6z.jpg",
		[
			rating(5, new Date(2020, 6, 2)),
			rating(4, new Date(2020, 6, 3)),
			rating(5, new Date(2020, 7, 14)),
			rating(3, new Date(2020, 7, 19)),
			rating(4, new Date(2020, 8, 9)),
		]
	),
	pet(
		1,
		"Ms Pancakes",
		"cat",
		new Date(2017, 3, 14),
		"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gr%C3%BCne_Augen_einer_Katze.JPG/180px-Gr%C3%BCne_Augen_einer_Katze.JPG",
		[
			rating(3, new Date(2020, 6, 2)),
			rating(2, new Date(2020, 6, 3)),
			rating(2, new Date(2020, 8, 5)),
			rating(4, new Date(2020, 8, 8)),
			rating(4, new Date(2020, 8, 9)),
		]
	),
	pet(
		2,
		"Archibald",
		"parrot",
		new Date(1987, 11, 6),
		"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Graupapagei.jpg/180px-Graupapagei.jpg",
		[
			rating(5, new Date(2020, 4, 23)),
			rating(1, new Date(2020, 4, 28)),
			rating(3, new Date(2020, 5, 3)),
			rating(4, new Date(2020, 6, 8)),
			rating(3, new Date(2020, 7, 7)),
		]
	),
	pet(
		3,
		"Bubbles",
		"dog",
		new Date(2010, 6, 3),
		"https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg",
		[
			rating(4, new Date(2020, 6, 2)),
			rating(2, new Date(2020, 6, 2)),
			rating(1, new Date(2020, 6, 6)),
			rating(2, new Date(2020, 8, 8)),
			rating(4, new Date(2020, 8, 7)),
		]
	),
	pet(
		4,
		"Charles",
		"dog",
		new Date(2009, 12, 24),
		"https://images.dog.ceo/breeds/malinois/n02105162_5800.jpg",
		[
			rating(5, new Date(2020, 6, 7)),
			rating(1, new Date(2020, 7, 2)),
			rating(3, new Date(2020, 8, 3)),
			rating(4, new Date(2020, 8, 8)),
			rating(3, new Date(2020, 8, 7)),
		]
	),
	pet(
		5,
		"Rose and Helena",
		"parrot",
		new Date(2003, 2, 17),
		"https://upload.wikimedia.org/wikipedia/commons/c/cc/Rosakakadu_ts3.jpg",
		[
			rating(5, new Date(2020, 8, 1)),
			rating(5, new Date(2020, 8, 4)),
			rating(5, new Date(2020, 8, 6)),
			rating(5, new Date(2020, 8, 8)),
			rating(5, new Date(2020, 8, 9)),
		]
	),
];

function pet(
	id: number,
	name: string,
	species: string,
	birthdate: Date,
	imageUrl: string,
	ratings: { value: number; date: Date }[]
): Pet {
	return {
		id,
		name,
		species,
		birthdate,
		imageUrl,
		ratings: ratings.map((rating, index) => ({
			...rating,
			id: id * 100 + index + 1,
			petId: id,
		})),
	};
}

function rating(value: number, date: Date) {
	return {
		value,
		date,
	};
}
