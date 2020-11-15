import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DashboardRoute } from "./DashboardRoute";
import { LoginScreen } from "../components/login/LoginScreen";

export const AppRoute = () => {
 return (
  <Router>
   <div>
    <Switch>
     <Route exact component={LoginScreen} path="/login" />
     <Route component={DashboardRoute} path="/" />
    </Switch>
   </div>
  </Router>
 );
};
