import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return <Redirect to={{ pathname: "/login" }} />;
        }
        return <Component />;
      }}
    />
  );
};

export default PrivateRoute;
