import { heroes } from "../data/heroes";

export const getByHeroeName = (name = "") => {
 if (name === "") {
  return [];
 }
 const nameLower = name.toLowerCase();
 return heroes.filter((heroe) =>
  heroe.superhero.toLowerCase().includes(nameLower)
 );
};
