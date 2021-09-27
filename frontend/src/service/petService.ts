import axios from "axios";
import Pet from "../model/Pet";
import { Rating } from "../model/Rating";

export async function fetchPets(): Promise<Pet[]> {
  const response = await axios.get("http://localhost:8080/pets");
  return response.data as Pet[];
}

export async function fetchPet(id: number): Promise<Pet> {
  const response = await axios.get(`http://localhost:8080/pets/${id}`);
  return response.data as Pet;
}

export async function ratePet(id: number, value: number): Promise<Rating[]> {
  const response = await axios.put(`http://localhost:8080/pets/${id}`, {
    value,
  });
  return response.data as Rating[];
}
