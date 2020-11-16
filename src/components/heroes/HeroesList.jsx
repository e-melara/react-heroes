import React, { useMemo } from "react";

import { HeroCard } from "./HeroCard";
import { getHeroesByPusblisher } from "../../selectors/getHeroesByPusblisher";

export const HeroesList = ({ pusblisher }) => {
 const heroes = useMemo(() => getHeroesByPusblisher(pusblisher), [pusblisher]);

 return (
  <div className="card-columns">
   {heroes.map((hero) => (
    <HeroCard key={hero.id} {...hero} />
   ))}
  </div>
 );
};
