import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "./../contexts/LoginContext";

const UnProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const { checkAuth } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (!checkAuth())
          return Component ? <Component {...props} /> : render(props);
        return (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
export default UnProtectedRoute;
