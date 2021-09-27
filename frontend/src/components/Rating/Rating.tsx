import React from "react";
import Pet from "../../model/Pet";

interface Props {
  pet: Pet;
}

export default function Rating(props: Props) {
  const ratings = props.pet.ratings;

  // TODO: calculate average and number of ratings from props

  const ratingCount = ratings.length;
  const average = () => {
    let ratingTotal = 0;
    for (let i = 0; i < ratings.length; i++) {
      ratingTotal += ratings[i].value;
    }
    return (ratingTotal / ratings.length).toFixed(1);
  };
  return (
    <span id="rating-span">{`${average()} / 5 (${ratingCount} ratings)`}</span>
  );
}
