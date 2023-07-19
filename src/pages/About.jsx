import React, { useContext } from "react";
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";

export default function About() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>About page</h1>
      <p>Welcome {user}</p>

      <NavLink to="/about/componentA">ComponentA</NavLink>
    </div>
  );
}
