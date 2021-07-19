import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "./customHooks";

interface IPrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({
  ...rest
}) => {
  const auth = useAuth();

  if (auth?.user === null) return <Redirect to="login" />;

  return <Route {...rest} />;
};

export default PrivateRoute;
