import React, { useState, useEffect } from "react";
import Pet from "../model/Pet";
import PetList from "../components/PetList/PetList";
import { fetchPets } from "../service/petService";

export default function Home() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchPetsFromBackend() {
      try {
        setPets(await fetchPets());
      } catch (e) {
        setError(true);
      }
    }

    fetchPetsFromBackend();
  }, []);

  if (error) {
    return <>Error! Could not fetch pets from the backend</>;
  }

  if (pets.length === 0) {
    return <>Loading...</>;
  }

  return (
    <article>
      <p>
        Look at all those cute pets{" "}
        <span role="img" aria-label="heart emoji">
          😍
        </span>
      </p>
      <PetList pets={pets} />
    </article>
  );
}
