import React from "react";
import Pet from "../../model/Pet";
import PetCard from "../PetCard/PetCard";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./PetList.css";

interface Props {
  pets: Pet[];
}

function PetList(props: Props) {
  return (
    <ul className="pet-list">
      {props.pets.map((pet) => (
        <li key={pet.id}>
          <Link to={`/pets/${pet.id}`}>
            <PetCard pet={pet} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(PetList);
