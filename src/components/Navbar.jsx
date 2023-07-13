import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.setItem("islogin", false);
  };
  return (
    <div>
      <nav className="nav-menu">
        <h3>React Demo</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="product">Product</NavLink>
        <NavLink to="help">Help</NavLink>
        <button onClick={logout}>logout</button>
      </nav>
      <div className="main-section">
        <Outlet />
      </div>
    </div>
  );
}
