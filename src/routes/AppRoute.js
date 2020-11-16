import React, { useContext } from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { UserContext } from "../auth/AuthContext";
import { DashboardRoute } from "./DashboardRoute";
import { LoginScreen } from "../components/login/LoginScreen";

export const AppRoute = () => {
 const {
  user: { logged },
 } = useContext(UserContext);

 return (
  <Router>
   <div>
    <Switch>
     <PublicRoute
      exact
      component={LoginScreen}
      path="/login"
      isAutheticathe={logged}
     />
     <PrivateRoute
      isAutheticathe={logged}
      component={DashboardRoute}
      path="/"
     />
    </Switch>
   </div>
  </Router>
 );
};
