import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import ROUTE from "../Routes";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const { checkAuth } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (!checkAuth())
          return (
            <Redirect
              to={{
                pathname: ROUTE.LOGIN,
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};
export default ProtectedRoute;
