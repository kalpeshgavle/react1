import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function NavComponent() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
      >
        Go next
      </button>
      <div className="navbar">
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default NavComponent;
