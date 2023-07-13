import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export default function PrivateRoute() {
  let login = localStorage.getItem("islogin");
  // const login = localStorage.getItem("islogin");
  // const login = true;
  // login = false;
  console.log(login);

  return login ? <Outlet /> : <LoginPage />;
}
