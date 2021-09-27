import { Rating } from "./Rating";

export default interface Pet {
  id: number;
  name: string;
  species: string;
  birthdate: Date;
  imageUrl: string;
  ratings: Rating[];
}
