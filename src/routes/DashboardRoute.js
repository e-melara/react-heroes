import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar";
import { DCScreen } from "../components/dc/DCScreen";
import { Search } from "../components/search/Search";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";

export const DashboardRoute = () => {
 return (
  <>
   <Navbar />
   <div className="container mt-5">
    <Switch>
     <Route exact path="/marvel" component={MarvelScreen} />
     <Route exact path="/dc" component={DCScreen} />
     <Route exact path="/heroes/:heroeId" component={HeroesScreen} />
     <Route exact path="/search" component={Search} />

     <Redirect to="/marvel" />
    </Switch>
   </div>
  </>
 );
};
