import React from "react";
import { NavLink, Outlet, useMatch, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const match = useMatch("/login");

  // console.log(match);

  function logout() {
    localStorage.setItem("islogin", false);
    navigate("/login");
  }

  return (
    <div>
      <nav className="nav-menu">
        <h3>React Demo</h3>
        {match ? (
          <></>
        ) : (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="product">Product</NavLink>
            <NavLink to="help">Help</NavLink>
            <button className="btn btn-danger" onClick={logout}>
              logout
            </button>
          </>
        )}
      </nav>
      <div className="main-section">
        <Outlet />
      </div>
    </div>
  );
}
