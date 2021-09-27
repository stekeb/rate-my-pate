import React, { useState, useEffect } from "react";
import Pet from "../model/Pet";
import { fetchPet, ratePet } from "../service/petService";
import Rating from "../components/Rating/Rating";
import { Attribution } from "../components/Attribution/Attribution";
import Stars from "../components/Stars/Stars";
import { Rating as Ratingtype } from "../model/Rating";

interface Props {
  match: any;
}

export default function Details(props: Props) {
  const petId = props.match.params.id;
  const [pet, setPet] = useState<Pet | undefined>(undefined);
  const [petRatings, setPetRatings] = useState<Ratingtype[] | undefined>(
    undefined
  );

  let fullStars = 0;
  const amountFullStars = () => {
    if (petRatings) {
      let ratingTotal = 0;
      for (let i = 0; i < petRatings.length; i++) {
        ratingTotal += petRatings[i].value;
      }
      fullStars = Math.round(ratingTotal / petRatings.length);
    }
  };
  amountFullStars();

  let starsArray: boolean[] = [];
  const starsArrayCreator = () => {
    let fullStarsTemp = fullStars;
    let tempStarsArray: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      if (fullStarsTemp > 0) {
        tempStarsArray.push(true);
        fullStars = fullStarsTemp--;
      } else {
        tempStarsArray.push(false);
      }
    }
    starsArray = tempStarsArray;
  };

  starsArrayCreator();

  async function starHandler(id: number, value: number): Promise<void> {
    const response = await ratePet(id, value);
    setPetRatings(petRatings?.concat(response));
  }

  useEffect(() => {
    async function fetchPetFromProps() {
      const fetchedPet = await fetchPet(petId);
      setPet(fetchedPet);
      setPetRatings(fetchedPet.ratings);
    }

    fetchPetFromProps();
  }, [petId]);

  if (!pet) {
    return <>Loading...</>;
  }

  // TODO: add rate button
  let starValue = 1;
  const singleStar = starsArray.map((item) => (
    <Stars
      item={item}
      value={starValue++}
      pet={pet}
      key={starValue}
      starHandler={starHandler}
    />
  ));

  const { name, species, imageUrl } = pet;
  return (
    <>
      <article>
        <h2>
          {name}
          <Rating pet={pet} />
        </h2>

        <div style={{ alignContent: "center" }}>
          <div style={{ display: "inline-block" }}>
            <div className="starscontainer" style={{ display: "flex" }}>
              {singleStar}
            </div>
          </div>
        </div>
        <img src={imageUrl} alt={`${name} the ${species}`} />
      </article>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
