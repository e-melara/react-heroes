import React, { useEffect, useReducer } from "react";

import { AppRoute } from "./routes/AppRoute";
import { AuthReducer } from "./auth/AuthReducer";
import { UserContext } from "./auth/AuthContext";

const init = () => {
 return (
  JSON.parse(localStorage.getItem("user")) || {
   logged: false,
  }
 );
};

export const HeroesApp = () => {
 const [user, dispatch] = useReducer(AuthReducer, {}, init);
 useEffect(() => {
  localStorage.setItem("user", JSON.stringify(user));
 }, [user]);

 return (
  <>
   <UserContext.Provider value={{ user, dispatch }}>
    <AppRoute />
   </UserContext.Provider>
  </>
 );
};
