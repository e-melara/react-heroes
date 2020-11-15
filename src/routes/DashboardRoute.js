import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { DCScreen } from "../components/dc/DCScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoute = () => {
 return (
  <>
   <Navbar />
   <div>
    <Switch>
     <Route exact path="/marvel" component={MarvelScreen} />
     <Route exact path="/dc" component={DCScreen} />
     <Route exact path="/heroes/:heroeId" component={HeroesScreen} />

     <Redirect to="/marvel" />
    </Switch>
   </div>
  </>
 );
};
