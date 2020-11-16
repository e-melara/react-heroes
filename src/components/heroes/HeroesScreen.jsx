import React, { useMemo } from "react";

import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroesScreen = ({ history }) => {
 const { heroeId } = useParams();
 const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

 if (!hero) {
  return <Redirect to="/" />;
 }

 const handleClick = () => {
  history.goBack();
 };

 const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

 return (
  <div className="row mt-5">
   <div className="col-4">
    <img
     src={`../assets/${heroeId}.jpg`}
     alt={superhero}
     className="img-thumbnail"
    />
   </div>
   <div className="col-8">
    <h3>{superhero}</h3>
    <ul className="list-group list-group-flush">
     <li className="list-group-item">
      <b>Alter ego: </b> {alter_ego}
     </li>
     <li className="list-group-item">
      <b>Publisher: </b> {publisher}
     </li>
     <li className="list-group-item">
      <b>First Appearance: </b> {first_appearance}
     </li>
    </ul>

    <h5>Characters</h5>
    <p>{characters}</p>
    <button className="btn btn-outline-info" onClick={handleClick}>
     Return
    </button>
   </div>
  </div>
 );
};
