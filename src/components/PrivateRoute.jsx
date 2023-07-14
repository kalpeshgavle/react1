import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  let login = JSON.parse(localStorage.getItem("islogin"));
  // console.log(login);

  return login ? <Outlet /> : <Navigate to="login" />;
}
