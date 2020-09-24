import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, LogIn, SignUp, Account } from "../pages";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";

const Routes = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PublicRoute path="/login" exact component={LogIn} />
        <PublicRoute path="/account/signup" exact component={SignUp} />
        <PrivateRoute path="/account" exact component={Account} />
      </Switch>
    </Router>
  );
};

export default Routes;
