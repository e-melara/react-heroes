import React from "react";
import { HeroesList } from "../heroes/HeroesList";

export const MarvelScreen = () => {
 return (
  <>
   <h2>Marvel Screen</h2>
   <hr />
   <HeroesList pusblisher={"Marvel Comics"} />
  </>
 );
};
