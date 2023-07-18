import React, { useContext } from "react";
import { UserContext } from "../App";
import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({ path, element }) {
  const { login } = useContext(UserContext);

  return login ? (
    <Route path={path} element={element} />
  ) : (
    // <Navigate to={"/login"} />
    <Route path={path} element={element} />
  );
}
