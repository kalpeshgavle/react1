import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Component1() {
  return (
    <>
      <h1>Component1</h1>
      <button>
        <NavLink to="component1/mobile">Mobile Data</NavLink>
      </button>
      <button>
        <NavLink to="component1/laptop">Laptop Data</NavLink>
      </button>
      <button>
        <NavLink to="component1/computer">Computer Data</NavLink>
      </button>
      <Outlet />
    </>
  );
}

export default Component1;
