import { Rating } from "./Rating";

export interface Pet {
	id: number;
	name: string;
	species: string;
	birthdate: Date;
	imageUrl: string;
	ratings: Rating[];
}
