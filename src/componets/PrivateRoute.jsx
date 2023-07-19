import React, { useContext } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
// import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
