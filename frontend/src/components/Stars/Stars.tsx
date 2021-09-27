import React from "react";
import fullStarImage from "../../icons/star-filled.png";
import emptyStarImage from "../../icons/star-empty.png";

export default function Stars(props) {
  return (
    <div onClick={() => props.starHandler(props.pet.id, props.value)}>
      {props.item ? (
        <img src={fullStarImage} alt="full star" />
      ) : (
        <img src={emptyStarImage} alt="empty star" />
      )}
    </div>
  );
}
