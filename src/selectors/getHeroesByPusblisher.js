const { heroes } = require("../data/heroes");

export const getHeroesByPusblisher = (pusblisher) => {
 const validCampus = ["DC Comics", "Marvel Comics"];
 if (!validCampus.includes(pusblisher)) {
  throw new Error("El Pusblisher ingresado no es valido");
 }

 return heroes.filter((hero) => hero.publisher === pusblisher);
};
