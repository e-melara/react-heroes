import React from "react";

import { HeroCard } from "./HeroCard";
import { getHeroesByPusblisher } from "../../selectors/getHeroesByPusblisher";

export const HeroesList = ({ pusblisher }) => {
 const heroes = getHeroesByPusblisher(pusblisher);
 return (
  <ul>
   {heroes.map((hero) => (
    <HeroCard key={hero.id} {...hero} />
   ))}
  </ul>
 );
};
