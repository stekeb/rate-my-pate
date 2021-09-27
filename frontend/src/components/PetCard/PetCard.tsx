import React from "react";
import Pet from "../../model/Pet";
import birthdayhat from "../../icons/birthday-hat.png";

import "./PetCard.css";
import Rating from "../Rating/Rating";

interface Props {
  pet: Pet;
}

export default function PetCard(props: Props) {
  const { name, imageUrl } = props.pet;
  const ageInMilliseconds =
    new Date().getTime() - new Date(props.pet.birthdate).getTime();
  const age = Math.floor(ageInMilliseconds / 31536000000);
  console.log(props.pet);

  return (
    <section className="pet-card">
      <h2>
        {name} <Rating pet={props.pet} />
      </h2>
      <div className="background">
        <img className="pet-card--img" src={imageUrl} alt="The pet" />
        {new Date().toDateString() ===
        new Date(props.pet.birthdate).toDateString() ? (
          <img className="birthdayhat--img" src={birthdayhat} alt="The pet" />
        ) : null}
      </div>

      <h2>Age: {age} years</h2>
    </section>
  );
}
