import React, { useContext } from "react";
import { UserContext } from "../App";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        login ? <Component {...props} /> : navigate("/login")
      }
    />
  );
};

export default PrivateRoute;
