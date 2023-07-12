import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <br />
      <NavLink to="component1">show Nested Component 1</NavLink>

      <br />
      <NavLink to="component2">Show Nested component 2</NavLink>

      <Outlet />
    </>
  );
}

export default Home;
